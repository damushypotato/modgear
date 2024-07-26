'use client';

import { useProducts } from '@/app/lib/data';
import Item from './item';

export default function Store() {
    const { products, isLoading } = useProducts();

    return (
        <div className='flex justify-center flex-wrap'>
            {isLoading
                ? 'Loading...'
                : products.map(product => <Item key={product.id} product={product} />)}
        </div>
    );
}
