'use client';

import useFromStore from '@/app/store/useFromStore';
import OrderSummary from '../summary';
import { useCartStore } from '@/app/store/useCartStore';
import { ReturnButton } from '../../button';
import { Inter, Teko } from 'next/font/google';
import clsx from 'clsx';

// load the fonts for styling
const inter = Inter({ subsets: ['latin'], weight: '400' });
const teko = Teko({ subsets: ['latin'], weight: '400' });

// define the props for the checkout success component
interface Props {
    id: string;
}

// define the checkout success component
export default function CheckoutSuccess({ id }: Props) {
    // get the orders from the store and save it to a variable
    const storeOrders = useFromStore(useCartStore, state => state.orders);

    // find the order with the given id
    const order = storeOrders.find(order => order.id === id);

    // if the order is not found, display a message
    if (!order) {
        return (
            <div className='flex flex-col items-center justify-center h-96'>
                <h1 className='text-6xl my-8'>Order not found...</h1>
                <ReturnButton href='/shop'>Continue Shopping</ReturnButton>
            </div>
        );
    }

    // map the order items to display items and calculate the total for each item
    const items = order.items.map(item => ({
        product: item.product,
        quantity: item.quantity,
        total: item.product.price * item.quantity,
    }));

    // render the checkout success component
    return (
        <div className={inter.className}>
            {/* display the order success message */}
            <div className='text-center'>
                <h1 className={clsx(teko.className, 'text-6xl')}>Order Successful!</h1>
                <p className='text-xl'>Thank you for your purchase!</p>
            </div>

            <hr className='my-5' />

            {/* display the order details */}
            <div>
                <h2 className='text-lg font-bold mb-4'>Order Details</h2>

                {/* display the order name, email, phone, address, postcode, and id */}
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

            {/* display the summary of order items by passing the order items variable*/}
            <OrderSummary cart={items} />
        </div>
    );
}
