'use client';

import { useProductBySlug } from '@/app/data/useProducts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { useCartStore } from '@/app/store/useCartStore';

export default function Product({ slug }: { slug: string }) {
    const { product, isLoading } = useProductBySlug(slug);

    const addToCart = useCartStore(state => state.addToCart);

    if (isLoading) {
        return 'Loading...';
    }

    if (!product) {
        return notFound();
    }

    return (
        <div className='flex justify-center items-center mt-24 px-60'>
            <div className='flex flex-col items-center max-w-96 max-h-96'>
                <Image
                    src={`/${product.image}`}
                    width={300}
                    height={300}
                    alt=''
                    className='rounded-lg size-96 object-scale-down border-4'
                />
                <h1 className='text-4xl'>{product.name}</h1>
                <p className='text-2xl'>${product.price.toFixed(2)}</p>
                <p className='text-xl'>{product.description}</p>
                <button
                    className='mt-4 bg-blue-500 text-white px-4 py-1 rounded-lg w-full text-2xl'
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
