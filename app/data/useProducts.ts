import { Product } from '../types/definitions';
import useSWR from 'swr';

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json());

export function useProducts() {
    const { data, error, isLoading } = useSWR('/api/products', fetcher);

    return {
        products: data as Product[],
        error,
        isLoading,
    };
}

export function useProductBySlug(slug: string) {
    const { data, error, isLoading } = useSWR(`/api/products?slug=${slug}`, fetcher);

    return {
        product: data as Product,
        error,
        isLoading,
    };
}
