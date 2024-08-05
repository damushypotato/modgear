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

// load the font for styling
const inter = Inter({ subsets: ['latin'], weight: '400' });

// define the cart component
export default function Cart() {
    // get the cart from the store and save it to a variable
    const cart = useFromStore(useCartStore, state => state.cart);

    // get a reference to the removeFromCart function
    // to call when an item is to be removed from the cart
    const removeFromCart = useCartStore(state => state.removeFromCart);

    // get a reference to the setQuantity function
    // to call when the quantity of an item is to be updated
    const setQuantity = useCartStore(state => state.setQuantity);

    // map the cart items to display items
    // and calculate the total price of the items
    const items: CartDisplayItem[] = cart.map(item => ({
        ...item,
        total: item.product.price * item.quantity,
    }));

    // calculate the total price of all the items in the cart
    const total = items.reduce((acc, item) => acc + item.total, 0);

    // if the cart is empty, display a message
    if (items.length === 0) {
        return (
            <div className='flex flex-col items-center justify-center h-96'>
                <h1 className='text-6xl my-8'>Your cart is empty...</h1>
                <ReturnButton href='/shop'>Continue Shopping</ReturnButton>
            </div>
        );
    }

    // function to download the quote as a text file
    const downloadQuote = () => {
        // add the items and the price to the quote
        const quote = items.map(item => `${item.product.name} x${item.quantity} $${item.total}\n`);

        // add the total price to the quote at the end
        quote.push(`\nTotal $${total.toFixed(2)}`);

        // create a binary large object (blob) from the quote
        const blob = new Blob(quote, { type: 'text/plain' });

        // create a URL for the blob and create an anchor element to download
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;

        // set the file name
        a.download = 'quote.txt';

        // click the anchor element to download the file
        a.click();
    };

    // render the cart
    return (
        <div className={clsx(styles['cart'], inter.className, 'm-auto w-full')}>
            {/* render the shopping cart header */}
            <div className='flex items-center m-auto justify-center'>
                <ShoppingCartIcon className='w-12 h-12' />
                <h1 className='text-4xl font-bold text-left ml-4 h-12'>Shopping Cart</h1>
            </div>

            <hr className='my-5' />

            {/* render the continue shopping and download quote buttons */}
            <div className={clsx(inter.className, 'flex justify-between mb-4')}>
                <ReturnButton href='/shop'>Continue Shopping</ReturnButton>

                <button
                    className='flex items-center outline outline-2 p-2 rounded-sm'
                    onClick={downloadQuote}
                >
                    <DocumentCurrencyDollarIcon className='w-6 h-6' />
                    <p className='text-l font-semibold'>Download Quote</p>
                </button>
            </div>

            {/* render the cart items and checkout button */}
            <div className='w-full'>
                {/* render the cart items from the items variable */}
                <CartItems
                    items={items}
                    removeFromCart={removeFromCart}
                    setQuantity={setQuantity}
                />

                {/* render the total price */}
                <div className='flex justify-end mt-10'>
                    <p className='text-2xl font-bold'>Total</p>
                    <input
                        disabled
                        className='text-2xl font-bold w-1/6 outline outline-blue-500 outline-2 rounded-sm ml-4 mr-8 text-center'
                        value={`$${total.toFixed(2)}`}
                    />
                </div>

                {/* render the checkout button */}
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
