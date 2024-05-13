import { Product } from './definitions';

const { catalog } = require('@/app/lib/placeholder-data') as { catalog: Product[] };

export async function fetchProducts() {
    return catalog;
}

export async function fetchProductBySlug(slug: string) {
    return catalog.find(p => p.slug == slug);
}
