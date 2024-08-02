import products from '@/public/data/products.json';
import { Product } from '@/app/types/definitions';

// function to get all products from the products.json file
export async function getProducts() {
    return products as Product[];
}

// function to get a single product by its name
export async function getProduct(slug: string) {
    // find the product whose slug matches the given slug (name)
    return products.find(product => product.slug === slug) as Product | null;
}
