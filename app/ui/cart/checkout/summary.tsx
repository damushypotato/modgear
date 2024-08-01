'use client';

import { useCartStore } from '@/app/store/useCartStore';
import useFromStore from '@/app/store/useFromStore';
import { CartDisplayItem } from '@/app/types/definitions';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: '400' });

interface Props {
    cart?: CartDisplayItem[];
}

export default function OrderSummary({ cart }: Props) {
    const storeCart = useFromStore(useCartStore, state => state.cart);

    cart ||= storeCart.map(item => ({
        ...item,
        total: item.product.price * item.quantity,
    }));

    return (
        <div className={inter.className}>
            <hr className='my-5' />

            <div className='mb-4'>
                <h2 className='text-lg mb-4 font-bold'>Order Summary</h2>

                <div>
                    {cart.map(item => (
                        <div key={item.product.id} className='flex justify-between'>
                            <p>
                                {item.product.name} x{item.quantity}
                            </p>
                            <p>${item.total}</p>
                        </div>
                    ))}
                </div>

                <div className='flex justify-end mt-4'>
                    <p className='mr-4'>
                        Total ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)
                    </p>
                    <p className='font-bold'>${cart.reduce((acc, item) => acc + item.total, 0)}</p>
                </div>
            </div>

            <hr className='my-5' />
        </div>
    );
}
