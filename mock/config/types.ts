export interface Environment {
    id: string;
    name: string;
    host: string;
    color: string;
    productCount: number;
    customers: string;
    satisfaction: number;
}

export interface ServerConfig {
    port: number;
    defaultEnvId: string;
}

export interface Route {
    template: string;
    page: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
}

export interface Variant {
    id: string;
    label: string;
    envOverrides: Partial<Environment>;
    responseHeaders: Record<string, string>;
    affectedPages?: string[];
    announcement?: string;
}
