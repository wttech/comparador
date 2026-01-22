import type { Route } from './types';

export const home: Route = { template: 'index.njk', page: 'home' };
export const about: Route = { template: 'about.njk', page: 'about' };
export const products: Route = { template: 'products.njk', page: 'products' };

export const routes: Record<string, Route> = {
    '/': home,
    '/about': about,
    '/products': products,
};
