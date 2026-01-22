import type { Environment, ServerConfig } from './types';

export const serverConfig: ServerConfig = {
    port: 443,
    defaultEnvId: 'www',
};

export const dev: Environment = {
    id: 'dev',
    name: 'Development',
    host: 'dev.acme.local',
    color: '#28a745',
    productCount: 3,
    customers: '1.2k+',
    satisfaction: 50,
};

export const stage: Environment = {
    id: 'stage',
    name: 'Staging',
    host: 'stage.acme.local',
    color: '#ffc107',
    productCount: 4,
    customers: '5k+',
    satisfaction: 85,
};

export const www: Environment = {
    id: 'www',
    name: 'Production',
    host: 'www.acme.local',
    color: '#dc3545',
    productCount: 5,
    customers: '10k+',
    satisfaction: 99,
};

export const environments: Record<string, Environment> = { dev, stage, www };

/** Map host to environment for quick lookup */
export const hostToEnv: Record<string, Environment> = Object.fromEntries(
    Object.values(environments).map(env => [env.host, env])
);
