import { Product } from '../types/definitions';
import useSWR from 'swr';

// fetcher function to fetch data from the API
const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json());

// custom hook to fetch all products from the API
export function useProducts() {
    // useSWR hook to fetch data from the API
    const { data, error, isLoading } = useSWR('/api/products', fetcher);

    // return the products, error, and loading state
    return {
        products: data as Product[],
        error,
        isLoading,
    };
}

// custom hook to fetch a single product by its slug
export function useProductBySlug(slug: string) {
    // useSWR hook to fetch data from the API
    const { data, error, isLoading } = useSWR(`/api/products?slug=${slug}`, fetcher);

    // return the product, error, and loading state
    return {
        product: data as Product,
        error,
        isLoading,
    };
}
