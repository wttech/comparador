import { execSync } from 'child_process';
import { consola } from 'consola';
import fs from 'fs';
import path from 'path';
import { environments } from './config';

const certsDir = path.join(__dirname, '..', 'certs');
const caKeyPath = path.join(certsDir, 'ca.key');
const caCrtPath = path.join(certsDir, 'ca.crt');
const hostKeyPath = path.join(certsDir, 'host.key');
const hostCsrPath = path.join(certsDir, 'host.csr');
const hostCrtPath = path.join(certsDir, 'host.crt');
const extFilePath = path.join(certsDir, 'host.ext');

const hosts = Object.values(environments).map(env => env.host);

export function certsExist(): boolean {
    return fs.existsSync(caKeyPath) &&
        fs.existsSync(caCrtPath) &&
        fs.existsSync(hostKeyPath) &&
        fs.existsSync(hostCrtPath);
}

export function generateCerts(): void {
    consola.info('Generating SSL certificates...');

    // Create certs directory if not exists
    if (!fs.existsSync(certsDir)) {
        fs.mkdirSync(certsDir, { recursive: true });
    }

    // Generate CA private key
    consola.log('  1. Generating CA private key...');
    execSync(`openssl genrsa -out "${caKeyPath}" 4096`, { stdio: 'pipe' });

    // Generate CA certificate
    consola.log('  2. Generating CA certificate...');
    execSync(`openssl req -new -x509 -days 3650 -key "${caKeyPath}" -out "${caCrtPath}" -subj "/CN=Comparador Local CA/O=Comparador/C=US"`, { stdio: 'pipe' });

    // Generate host private key
    consola.log('  3. Generating host private key...');
    execSync(`openssl genrsa -out "${hostKeyPath}" 2048`, { stdio: 'pipe' });

    // Generate CSR
    consola.log('  4. Generating certificate signing request...');
    execSync(`openssl req -new -key "${hostKeyPath}" -out "${hostCsrPath}" -subj "/CN=*.acme.local/O=Comparador/C=US"`, { stdio: 'pipe' });

    // Create extension file for SAN
    consola.log('  5. Creating extension file with Subject Alternative Names...');
    const sanEntries = hosts.map((host, i) => `DNS.${i + 1} = ${host}`).join('\n');
    const extContent = `authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
${sanEntries}
`;
    fs.writeFileSync(extFilePath, extContent);

    // Sign the certificate
    consola.log('  6. Signing the certificate...');
    execSync(`openssl x509 -req -in "${hostCsrPath}" -CA "${caCrtPath}" -CAkey "${caKeyPath}" -CAcreateserial -out "${hostCrtPath}" -days 825 -sha256 -extfile "${extFilePath}"`, { stdio: 'pipe' });

    // Cleanup temporary files
    fs.unlinkSync(hostCsrPath);
    fs.unlinkSync(extFilePath);

    consola.success('SSL certificates generated!');
}

// Run if executed directly
if (require.main === module) {
    if (certsExist()) {
        consola.warn('Certificates already exist. Delete certs/ folder to regenerate.');
    } else {
        generateCerts();
    }
}
