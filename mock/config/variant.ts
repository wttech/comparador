import type { IncomingHttpHeaders } from 'http';

import { variantDefault, variants } from './data';
import type { Variant } from './types';

/**
 * Resolve variant from (in priority order): query param `v`, header `X-Variant`, cookie `variant`.
 */
export function resolveVariant(
    queryString: string | undefined,
    headers: IncomingHttpHeaders,
    cookieHeader: string | undefined,
    envDefault?: string
): Variant {
    const id = fromQuery(queryString) ?? fromHeader(headers) ?? fromCookie(cookieHeader) ?? envDefault ?? variantDefault;
    return variants[id] || variants[variantDefault];
}

function fromQuery(qs: string | undefined): string | undefined {
    if (!qs) return undefined;
    const params = new URLSearchParams(qs);
    return params.get('v') ?? undefined;
}

function fromHeader(headers: IncomingHttpHeaders): string | undefined {
    const value = headers['x-variant'];
    if (Array.isArray(value)) return value[0];
    return value ?? undefined;
}

function fromCookie(cookieHeader: string | undefined): string | undefined {
    if (!cookieHeader) return undefined;
    const match = cookieHeader.match(/(?:^|;\s*)variant=([^;]+)/);
    return match?.[1] ?? undefined;
}
