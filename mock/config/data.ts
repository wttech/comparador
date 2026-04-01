import type { TeamMember, Variant } from './types';

export const team: TeamMember[] = [
    { id: 'team1', name: 'John Developer', role: 'Lead Developer' },
    { id: 'team2', name: 'Jane Designer', role: 'UI/UX Designer' },
    { id: 'team3', name: 'Bob Manager', role: 'Project Manager' },
];

export const variants: Record<string, Variant> = {
    a: {
        id: 'a',
        label: 'Baseline',
        envOverrides: {},
        responseHeaders: {
            'X-CDN-Cache': 'HIT',
            'X-Frame-Options': 'DENY',
        },
        affectedPages: ['home', 'products'],
    },
    b: {
        id: 'b',
        label: 'After deployment',
        envOverrides: {
            productCount: 6,
            customers: '12k+',
            satisfaction: 97,
        },
        responseHeaders: {
            'X-CDN-Cache': 'MISS',
            'X-Frame-Options': 'SAMEORIGIN',
            'X-Debug': 'true',
        },
        affectedPages: ['home', 'products'],
        announcement: 'Spring Sale — 20% off all products!',
    },
};

export const variantDefault = 'a';
