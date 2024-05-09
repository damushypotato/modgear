import { Product } from './definitions';

const { catalog } = require('@/app/lib/placeholder-data');

export async function fetchProducts() {
    return catalog as Product[];
}
