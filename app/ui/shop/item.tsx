import { Product } from '@/app/lib/definitions';
import Image from 'next/image';

export default function Item({ product }: { product: Product }) {
    return (
        <div className='m-6 p-6 bg-slate-500 text-white rounded-lg'>
            <h1>{product.name}</h1>
            <Image src={`/${product.image}`} width={200} height={200} alt='' />
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    );
}
