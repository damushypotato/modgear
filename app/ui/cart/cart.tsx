'use client';

import { useCartStore } from '@/app/store/useCartStore';
import { CartDisplayItem } from '@/app/types/definitions';
import {
    DocumentCurrencyDollarIcon,
    ShoppingBagIcon,
    ShoppingCartIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import styles from '@/styles/size.module.css';
import { ReturnButton } from './button';
import useFromStore from '@/app/store/useFromStore';
import CartItems from './cartItems';

const inter = Inter({ subsets: ['latin'], weight: '400' });

export default function Cart() {
    const cart = useFromStore(useCartStore, state => state.cart);

    const removeFromCart = useCartStore(state => state.removeFromCart);

    const setQuantity = useCartStore(state => state.setQuantity);

    const items: CartDisplayItem[] = cart.map(item => ({
        ...item,
        total: item.product.price * item.quantity,
    }));

    const total = items.reduce((acc, item) => acc + item.total, 0);

    if (items.length === 0) {
        return (
            <div className='flex flex-col items-center justify-center h-96'>
                <h1 className='text-6xl my-8'>Your cart is empty...</h1>
                <ReturnButton href='/shop'>Continue Shopping</ReturnButton>
            </div>
        );
    }

    return (
        <div className={clsx(styles['cart'], inter.className, 'm-auto w-full')}>
            <div className='flex items-center m-auto justify-center'>
                <ShoppingCartIcon className='w-12 h-12' />
                <h1 className='text-4xl font-bold text-left ml-4 h-12'>Shopping Cart</h1>
            </div>

            <hr className='my-5' />

            <div className={clsx(inter.className, 'flex justify-between mb-4')}>
                <ReturnButton href='/shop'>Continue Shopping</ReturnButton>

                <button className='flex items-center outline outline-2 p-2 rounded-sm'>
                    <DocumentCurrencyDollarIcon className='w-6 h-6' />
                    <p className='text-l font-semibold'>Download Quote</p>
                </button>
            </div>

            <div className='w-full'>
                <CartItems
                    items={items}
                    removeFromCart={removeFromCart}
                    setQuantity={setQuantity}
                />

                <div className='flex justify-end mt-10'>
                    <p className='text-2xl font-bold'>Total</p>
                    <input
                        disabled
                        className='text-2xl font-bold w-1/6 outline outline-blue-500 outline-2 rounded-sm ml-4 mr-8 text-center'
                        value={`$${total.toFixed(2)}`}
                    />
                </div>

                <div className='flex justify-end mt-5'>
                    <Link
                        href='/cart/checkout'
                        className='p-2 bg-blue-500 text-white text-xl rounded-md w-1/4 mr-8 flex justify-center'
                    >
                        <ShoppingBagIcon className='w-6 h-6 mr-2' />
                        <p>Checkout</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
