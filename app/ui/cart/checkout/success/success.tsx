'use client';

import useFromStore from '@/app/store/useFromStore';
import OrderSummary from '../summary';
import { useCartStore } from '@/app/store/useCartStore';
import { ReturnButton } from '../../button';
import { Inter, Teko } from 'next/font/google';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'], weight: '400' });
const teko = Teko({ subsets: ['latin'], weight: '400' });

interface Props {
    id: string;
}

export default function CheckoutSuccess({ id }: Props) {
    const storeOrders = useFromStore(useCartStore, state => state.orders);

    const order = storeOrders.find(order => order.id === id);

    if (!order) {
        return (
            <div className='flex flex-col items-center justify-center h-96'>
                <h1 className='text-6xl my-8'>Order not found...</h1>
                <ReturnButton href='/shop'>Continue Shopping</ReturnButton>
            </div>
        );
    }

    const items = order.items.map(item => ({
        product: item.product,
        quantity: item.quantity,
        total: item.product.price * item.quantity,
    }));

    return (
        <div className={inter.className}>
            <div className='text-center'>
                <h1 className={clsx(teko.className, 'text-6xl')}>Order Successful!</h1>
                <p className='text-xl'>Thank you for your purchase!</p>
            </div>

            <hr className='my-5' />

            <div>
                <h2 className='text-lg font-bold mb-4'>Order Details</h2>

                <p className='font-bold italic'>Personal Details</p>
                <p>{order.details.fullName}</p>
                <br />
                <p className='font-bold italic'>Contact Information</p>
                <p>{order.details.email}</p>
                <p>{order.details.phone}</p>
                <br />
                <p className='font-bold italic'>Shipping Address</p>
                <p>{order.details.address}</p>
                <p>{order.details.postcode}</p>
                <br />
                <p className='font-bold'>Order ID: {order.id}</p>
            </div>

            <OrderSummary cart={items} />
        </div>
    );
}
