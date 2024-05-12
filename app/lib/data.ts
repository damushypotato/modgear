import { Product } from './definitions';

const { catalog } = require('@/app/lib/placeholder-data') as { catalog: Product[] };

export async function fetchProducts() {
    return catalog;
}

export async function fetchProduct(id: string) {
    return catalog.find(p => p.id == id);
}
