'use client';

import clsx from 'clsx';
import { CartButton, CheckoutButton, ReturnButton } from '../button';
import styles from '@/styles/size.module.css';
import { Inter } from 'next/font/google';
import { CreditCardIcon } from '@heroicons/react/24/solid';
import CheckoutForm from './form';
import useFromStore from '@/app/store/useFromStore';
import { useCartStore } from '@/app/store/useCartStore';
import { CartDisplayItem } from '@/app/types/definitions';

// load the font for styling
const inter = Inter({ subsets: ['latin'], weight: '400' });

// define the checkout component
export default function Checkout() {
    // get the cart from the store and save it to a variable
    const cart = useFromStore(useCartStore, state => state.cart);

    // map the cart items to display items
    const items: CartDisplayItem[] = cart.map(item => ({
        ...item,
        total: item.product.price * item.quantity,
    }));

    // if the cart is empty, display a message
    if (items.length === 0) {
        return (
            <div className='flex flex-col items-center justify-center h-96'>
                <h1 className='text-6xl my-8'>Your cart is empty...</h1>
                <ReturnButton href='/shop'>Continue Shopping</ReturnButton>
            </div>
        );
    }

    // render the checkout form
    return (
        <div className={clsx(styles['checkout'], inter.className, 'm-auto w-full')}>
            {/* render the checkout header */}
            <div className='flex items-center m-auto justify-center'>
                <CreditCardIcon className='w-12 h-12' />
                <h1 className='text-4xl font-bold text-left ml-4 h-12'>Checkout</h1>
            </div>

            <hr className='my-5' />

            {/* render the cart edit buttons */}
            <div className='flex justify-center mb-4'>
                <CartButton href='/cart' className='mx-4'>
                    Edit Your Cart
                </CartButton>
                <CheckoutButton href='/shop' className='mx-4'>
                    Add More Items
                </CheckoutButton>
            </div>

            {/* render the checkout form and pass the cart items variable */}
            <div>
                <CheckoutForm cart={items} />
            </div>
        </div>
    );
}
