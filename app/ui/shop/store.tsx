import { fetchProducts } from '@/app/lib/data';
import { use } from 'react';
import Item from './item';

export default function Store() {
    const products = use(fetchProducts());

    return (
        <div className='flex justify-center flex-wrap'>
            {products.map(p => (
                <Item key={p.id} product={p} />
            ))}
        </div>
    );
}
