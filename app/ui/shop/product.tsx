'use client';

import { useProductBySlug } from '@/app/data/useProducts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { useCartStore } from '@/app/store/useCartStore';
import { useState } from 'react';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { CartButton, ReturnButton } from '../cart/button';

// load the font for styling
const inter = Inter({ subsets: ['latin'], weight: '400' });

// define the product component
export default function Product({ slug }: { slug: string }) {
    // get the product by the slug and save it to a variable
    const { product, isLoading } = useProductBySlug(slug);

    // set the display info state to 0
    // this will be used to display the added to cart message
    // and count the number of times the product is added to the cart
    const [displayInfo, setDisplayInfo] = useState(0);

    // define a function to add the product to the cart
    const addToCart = useCartStore(state => () => {
        // update the cart state with the product
        state.addToCart(product);

        // increment the display info state
        setDisplayInfo(displayInfo + 1);
    });

    // if the product is loading, display a loading message
    if (isLoading) {
        return 'Loading...';
    }

    // if the product is not found, display a not found message
    if (!product) {
        return notFound();
    }

    // render the product component
    return (
        <div className={clsx(inter.className, 'mt-24 px-60')}>
            {/* display the product image, name, price, description, and add to cart button */}
            <div className='flex flex-col items-center mx-auto'>
                {/* product image */}
                <Image
                    src={`/${product.image}`}
                    width={300}
                    height={300}
                    alt=''
                    className='rounded-lg size-96 object-scale-down border-4'
                />

                {/* product name, price, and description */}
                <h1 className='text-2xl font-bold'>{product.name}</h1>
                <p className='text-2xl'>${product.price.toFixed(2)}</p>
                <p className='text-lg w-1/2'>{product.description}</p>

                {/* add to cart button */}
                <button
                    className='mt-4 bg-blue-500 text-white px-4 py-1 rounded-lg w-1/4 text-xl'
                    onClick={addToCart}
                >
                    Add to Cart
                </button>
            </div>

            {/* added to cart message */}
            {/* this is hidden by default, and will be displayed when the display info state is greater than 0 */}
            <div className='text-center mt-4' hidden={displayInfo == 0}>
                {/* display the added to cart message, and the number of items added to the cart */}
                <p className='text-lg'>
                    Added to cart! {displayInfo > 1 ? `(${displayInfo})` : ''}
                </p>

                {/* buttons to look for more items or view the cart */}
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
