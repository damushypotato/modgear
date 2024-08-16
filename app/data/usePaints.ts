import { Paint } from '../types/definitions';
import useSWR from 'swr';

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json());

export function usePaints() {
    const { data, error, isLoading } = useSWR('/api/paints', fetcher);

    return {
        paints: data as Paint[],
        error,
        isLoading,
    };
}

export function usePaint(id: string) {
    const { data, error, isLoading } = useSWR(`/api/paints?id=${id}`, fetcher);

    return {
        paint: data as Paint,
        error,
        isLoading,
    };
}
