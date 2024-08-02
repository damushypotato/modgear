import { CartDisplayItem, Product } from '@/app/types/definitions';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import QuantitySelector from './quantitySelector';
import { TrashIcon } from '@heroicons/react/24/solid';

interface Props {
    items: CartDisplayItem[];
    setQuantity: (product: Product, quantity: number) => void;
    removeFromCart: (product: Product) => void;
}

// Component to display the items in the cart
export default function CartItems({ items, setQuantity, removeFromCart }: Props) {
    // return the cart items in a table
    return (
        <table className='w-full'>
            {/* header of the table with titles */}
            <thead className='bg-gray-300'>
                <tr>
                    <th className='text-left px-2' colSpan={2}>
                        Item
                    </th>
                    <th className='text-center w-1/6'>Quantity</th>
                    <th className='text-right w-1/6'>Price</th>
                    <th className='w-1/12'></th>
                </tr>
            </thead>

            {/* body of the table with the items */}
            <tbody>
                {/* loop through the items in the cart and add them to the table */}
                {items.map(item => (
                    <Fragment key={item.product.id}>
                        <tr key={item.product.id}>
                            {/* image of the product */}
                            <td className='text-left w-36 h-36'>
                                <Link href={`/product/${item.product.slug}`}>
                                    <Image
                                        src={`/${item.product.image}`}
                                        alt={item.product.name}
                                        width={100}
                                        height={100}
                                        className={clsx(
                                            'rounded-lg object-scale-down p-2 w-full h-full'
                                        )}
                                    />
                                </Link>
                            </td>

                            {/* name and category of the product */}
                            <td className='text-left'>
                                <Link href={`/product/${item.product.slug}`}>
                                    <h1 className='text-2xl'>{item.product.name}</h1>
                                </Link>
                                <p className='text-gray-500'>{item.product.category}</p>
                            </td>

                            {/* quantity selector */}
                            <td className='text-center'>
                                <QuantitySelector
                                    quantity={item.quantity}
                                    setQuantity={(quantity: number) =>
                                        setQuantity(item.product, quantity)
                                    }
                                />
                            </td>

                            {/* price of the product */}
                            <td className='text-right'>
                                {item.quantity !== 1 ? (
                                    <p className='text-sm'>
                                        {item.quantity} X ${item.product.price.toFixed(2)}
                                    </p>
                                ) : (
                                    <></>
                                )}

                                <p className='text-xl font-extrabold'>${item.total.toFixed(2)}</p>
                            </td>

                            {/* delete button */}
                            <td className='text-center'>
                                <button onClick={() => removeFromCart(item.product)} className=''>
                                    <TrashIcon className='w-6 h-6 text-red-600' />
                                </button>
                            </td>
                        </tr>

                        {/* divider between items */}
                        <tr key={`${item.product.id}-divider`}>
                            <td colSpan={5}>
                                <hr className='my-2' />
                            </td>
                        </tr>
                    </Fragment>
                ))}
            </tbody>
        </table>
    );
}
