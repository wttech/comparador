import browserSyncModule from 'browser-sync';
import { consola } from 'consola';
import nunjucks from 'nunjucks';
import path from 'path';
import type { IncomingMessage, ServerResponse } from 'http';

import { environments, hostToEnv, routes, serverConfig, team } from './config';
import { certsExist } from './generate-certs';

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
                const env = hostToEnv[host] || defaultEnv;

                const pathname = (req.url || '/').split('?')[0];
                const route = routes[pathname];

                if (route) {
                    consola.info(`${host}${req.url}`);

                    const html = nunjucks.render(route.template, {
                        env,
                        page: route.page,
                        team,
                    });

                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
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

            consola.box({
                title: 'Comparador Mock Server',
                message: `${envList}\n\nPages: ${routeList}`,
                style: { borderColor: 'cyan' },
            });
        },
    },
});
