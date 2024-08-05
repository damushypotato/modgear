'use client';

import { useCartStore } from '@/app/store/useCartStore';
import useFromStore from '@/app/store/useFromStore';
import { CartDisplayItem } from '@/app/types/definitions';
import { Inter } from 'next/font/google';

// load the font for styling
const inter = Inter({ subsets: ['latin'], weight: '400' });

// define the order summary component
interface Props {
    cart?: CartDisplayItem[];
}

// define the order summary component
export default function OrderSummary({ cart }: Props) {
    // get the cart from the store and save it to a variable
    const storeCart = useFromStore(useCartStore, state => state.cart);

    // map the cart items to display items and calculate the total for each item
    // this is used when the cart is not passed as a prop
    cart ||= storeCart.map(item => ({
        ...item,
        total: item.product.price * item.quantity,
    }));

    // render the order summary
    return (
        <div className={inter.className}>
            <hr className='my-5' />

            {/* display the order summary */}
            <div className='mb-4'>
                {/* title */}
                <h2 className='text-lg mb-4 font-bold'>Order Summary</h2>

                {/* items */}
                <div>
                    {/* map the cart items to display the product name and total */}
                    {cart.map(item => (
                        <div key={item.product.id} className='flex justify-between'>
                            {/* display the product name and quantity */}
                            <p>
                                {item.product.name} x{item.quantity}
                            </p>

                            {/* display the total for the item */}
                            <p>${item.total}</p>
                        </div>
                    ))}
                </div>

                {/* total price */}
                <div className='flex justify-end mt-4'>
                    <p className='mr-4'>
                        {/* display the total number of items in the cart */}
                        Total ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)
                    </p>

                    {/* display the total price of the cart */}
                    <p className='font-bold'>${cart.reduce((acc, item) => acc + item.total, 0)}</p>
                </div>
            </div>

            <hr className='my-5' />
        </div>
    );
}
