'use client';

import { useProductBySlug } from '@/app/data/useProducts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { useCartStore } from '@/app/store/useCartStore';
import { useState } from 'react';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { CartButton, ReturnButton } from '../cart/button';

const inter = Inter({ subsets: ['latin'], weight: '400' });

export default function Product({ slug }: { slug: string }) {
    const { product, isLoading } = useProductBySlug(slug);

    const [displayInfo, setDisplayInfo] = useState(0);

    const addToCart = useCartStore(state => () => {
        state.addToCart(product);

        setDisplayInfo(displayInfo + 1);
    });

    if (isLoading) {
        return 'Loading...';
    }

    if (!product) {
        return notFound();
    }

    return (
        <div className={clsx(inter.className, 'mt-24 px-60')}>
            <div className='flex flex-col items-center mx-auto'>
                <Image
                    src={`/${product.image}`}
                    width={300}
                    height={300}
                    alt=''
                    className='rounded-lg size-96 object-scale-down border-4'
                />
                <h1 className='text-2xl font-bold'>{product.name}</h1>
                <p className='text-2xl'>${product.price.toFixed(2)}</p>
                <p className='text-lg w-1/2'>{product.description}</p>
                <button
                    className='mt-4 bg-blue-500 text-white px-4 py-1 rounded-lg w-1/4 text-xl'
                    onClick={addToCart}
                >
                    Add to Cart
                </button>
            </div>
            <div className='text-center mt-4' hidden={displayInfo == 0}>
                <p className='text-lg'>
                    Added to cart! {displayInfo > 1 ? `(${displayInfo})` : ''}
                </p>
                <div className='flex justify-center mt-4'>
                    <ReturnButton href='/shop' className='mx-4'>
                        Look for more items
                    </ReturnButton>
                    <CartButton href='/cart' className='mx-4'>
                        View Cart
                    </CartButton>
                </div>
            </div>
        </div>
    );
}
