'use client';

import clsx from 'clsx';
import { CartButton, CheckoutButton } from '../button';
import styles from '@/styles/size.module.css';
import { Input } from '@headlessui/react';
import { Inter } from 'next/font/google';
import { CreditCardIcon } from '@heroicons/react/24/solid';

const inter = Inter({ subsets: ['latin'], weight: '400' });

export default function Checkout() {
    return (
        <div className={clsx(styles['checkout'], inter.className, 'm-auto w-full')}>
            <div className='flex items-center m-auto justify-center'>
                <CreditCardIcon className='w-12 h-12' />
                <h1 className='text-4xl font-bold text-left ml-4 h-12'>Checkout</h1>
            </div>

            <hr className='my-5' />

            <div className='flex justify-center mb-4'>
                <CartButton href='/cart' className='mx-4'>
                    Edit Your Cart
                </CartButton>
                <CheckoutButton href='/shop' className='mx-4'>
                    Add More Items
                </CheckoutButton>
            </div>

            <div className='mt-8'>
                <div className='flex justify-between'>
                    <Input
                        type='text'
                        name='first_name'
                        placeholder='First Name'
                        className='border'
                    />

                    <Input
                        type='text'
                        name='last_name'
                        placeholder='Last Name'
                        className='border'
                    />
                </div>
            </div>
        </div>
    );
}
