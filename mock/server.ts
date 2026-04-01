import browserSyncModule from 'browser-sync';
import { consola } from 'consola';
import nunjucks from 'nunjucks';
import path from 'path';
import type { IncomingMessage, ServerResponse } from 'http';

import { environments, hostToEnv, resolveVariant, routes, serverConfig, team, variants } from './config';
import { certsExist } from './generate-certs';

const defaultVariant = process.env.VARIANT || undefined;
if (defaultVariant && !variants[defaultVariant]) {
    consola.error(`Unknown variant '${defaultVariant}'. Available: ${Object.keys(variants).join(', ')}`);
    process.exit(1);
}

const browserSync = browserSyncModule.create();
const rootDir = path.join(__dirname, '..');

// Check if setup has been completed
if (!certsExist()) {
    consola.error('SSL certificates not found! Run setup first: npm run mock:setup');
    process.exit(1);
}

const defaultEnv = environments[serverConfig.defaultEnvId];

// Configure Nunjucks
nunjucks.configure(path.join(rootDir, 'templates'), {
    autoescape: true,
    noCache: true,
});

browserSync.init({
    port: serverConfig.port,
    https: {
        key: path.join(rootDir, 'certs/host.key'),
        cert: path.join(rootDir, 'certs/host.crt'),
    },
    notify: false,
    open: false,
    server: {
        baseDir: path.join(rootDir, 'public'),
        middleware: [
            function (req: IncomingMessage, res: ServerResponse, next: () => void) {
                const host = req.headers.host || defaultEnv.host;
                const baseEnv = hostToEnv[host] || defaultEnv;

                const fullUrl = req.url || '/';
                const [pathname, queryString] = fullUrl.split('?');
                const route = routes[pathname];

                if (route) {
                    const variant = resolveVariant(queryString, req.headers, req.headers.cookie, defaultVariant);
                    const affected = !variant.affectedPages || variant.affectedPages.includes(route.page);
                    const env = affected ? { ...baseEnv, ...variant.envOverrides } : baseEnv;

                    consola.info(`${host}${fullUrl} [variant=${variant.id}]`);

                    const html = nunjucks.render(route.template, {
                        env,
                        page: route.page,
                        team,
                        variant: affected ? variant : undefined,
                    });

                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    if (affected) {
                        res.setHeader('X-Variant', variant.id);
                        const headers = variant.responseHeaders;
                        for (const key of Object.keys(headers)) {
                            res.setHeader(key, headers[key]);
                        }
                    }
                    res.end(html);
                    return;
                }

                next();
            },
        ],
    },
    callbacks: {
        ready: function () {
            const envList = Object.values(environments)
                .map(e => `https://${e.host} (${e.name})`)
                .join('\n');
            const routeList = Object.keys(routes).join(', ');
            const variantList = Object.values(variants)
                .map(v => `${v.id} — ${v.label}`)
                .join(', ');
            const variantNote = defaultVariant
                ? `Default: ${defaultVariant} (override with ?v=a, X-Variant, or cookie)`
                : `${variantList}\nUsage: ?v=b  |  X-Variant: b  |  cookie variant=b  |  VARIANT=b npm start`;

            consola.box({
                title: 'Comparador Mock Server',
                message: `${envList}\n\nPages: ${routeList}\nVariants: ${variantNote}`,
                style: { borderColor: 'cyan' },
            });
        },
    },
});
