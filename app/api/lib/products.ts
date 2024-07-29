import products from '@/public/data/products.json';
import { Product } from '@/app/types/definitions';

export async function getProducts() {
    return products as Product[];
}

export async function getProduct(slug: string) {
    return products.find(product => product.slug === slug) as Product | null;
}
