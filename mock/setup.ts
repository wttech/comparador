import { execSync } from 'child_process';
import { consola } from 'consola';
import hostile from 'hostile';
import path from 'path';
import { environments } from './config';
import { certsExist, generateCerts } from './generate-certs';

const rootDir = path.join(__dirname, '..');
const hosts = Object.values(environments).map(env => env.host);

// Check if running with --system flag (sudo part)
const isSystemMode = process.argv.includes('--system');

async function setupHosts(): Promise<void> {
    consola.info('Setting up hosts entries...');

    for (const host of hosts) {
        await new Promise<void>((resolve, reject) => {
            hostile.set('127.0.0.1', host, (err: Error | null) => {
                if (err) {
                    if (err.message.includes('already')) {
                        consola.success(`Already exists: 127.0.0.1 ${host}`);
                        resolve();
                    } else {
                        consola.error(`Failed to add ${host}:`, err.message);
                        reject(err);
                    }
                } else {
                    consola.success(`Added: 127.0.0.1 ${host}`);
                    resolve();
                }
            });
        });
    }
}

function trustCertificate(): void {
    const platform = process.platform;
    const caPath = path.join(rootDir, 'certs', 'ca.crt');

    consola.info('Trusting CA certificate...');

    if (platform === 'darwin') {
        consola.log('  macOS detected. Adding certificate to System Keychain...');

        try {
            execSync(`security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${caPath}"`, {
                stdio: 'inherit',
            });
            consola.success('Certificate trusted successfully!');
        } catch {
            consola.error('Failed to trust certificate. Make sure you run setup with sudo.');
            process.exit(1);
        }
    } else if (platform === 'win32') {
        consola.log('  Windows detected. Adding certificate to Root store...');

        try {
            execSync(`certutil -addstore -f "ROOT" "${caPath}"`, {
                stdio: 'inherit',
            });
            consola.success('Certificate trusted successfully!');
        } catch {
            consola.error('Failed to trust certificate. Make sure you run this as Administrator.');
            process.exit(1);
        }
    } else {
        consola.warn(`Platform "${platform}" is not supported for automatic trust.`);
        consola.info(`Please manually import: ${caPath}`);
    }
}

async function setupSystem(): Promise<void> {
    // This runs with sudo - handles hosts and certificate trust
    await setupHosts();
    trustCertificate();

    consola.box({
        title: 'Setup Complete',
        message: 'Run the mock server with: npm run mock:run\nRestart your browser for certificate changes.',
        style: { borderColor: 'green' },
    });
}

async function setup(): Promise<void> {
    consola.start('Comparador Mock Server Setup\n');

    // Step 1: Generate certificates if needed (no sudo required)
    consola.info('Checking SSL certificates...');
    if (certsExist()) {
        consola.success('Certificates already exist.');
    } else {
        generateCerts();
    }

    // Step 2: Run system setup with sudo (hosts + trust)
    consola.info('Running system configuration (requires sudo)...\n');
    try {
        execSync(`sudo node "${path.join(__dirname, 'setup.js')}" --system`, {
            stdio: 'inherit',
            cwd: rootDir,
        });
    } catch {
        consola.error('System setup failed.');
        process.exit(1);
    }
}

// Entry point
if (isSystemMode) {
    setupSystem().catch((err) => {
        consola.error('System setup failed:', err.message);
        process.exit(1);
    });
} else {
    setup().catch((err) => {
        consola.error('Setup failed:', err.message);
        process.exit(1);
    });
}
