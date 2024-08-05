import { Product } from '@/app/types/definitions';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/size.module.css';
import clsx from 'clsx';
import { Teko } from 'next/font/google';

// load the fonts for styling
const teko = Teko({ subsets: ['latin'], weight: '400' });

// define the item component
export default function Item({ product }: { product: Product }) {
    return (
        // Wrap the item in a link to the product page
        // so the user can click on the item to view more details
        // and be redirected to the product page
        <Link
            // set the href to the product page with the product slug
            href={`/product/${product.slug}`}
            // styling
            className={clsx(
                'm-6 p-6 bg-gray-200 border-gray-600 border-2 text-black rounded-lg flex flex-col items-center overflow-hidden justify-center',
                styles.item,
                teko.className
            )}
        >
            {/* display the product image */}
            <Image
                src={`/${product.image}`}
                className={clsx('rounded-lg object-scale-down', styles['item-image'])}
                width={200}
                height={200}
                alt=''
            />

            {/* display the product name, price, and category */}
            <div className='w-full px-2 flex flex-col items-start mt-4'>
                {/* product name */}
                <h1 className={clsx('text-2xl')}>{product.name}</h1>

                <div className='flex justify-between w-full items-end'>
                    {/* product price */}
                    <p className='text-2xl text-red-500'>${product.price.toFixed(2)}</p>

                    {/* product category */}
                    <p className='text-gray-500'>{product.category}</p>
                </div>
            </div>
        </Link>
    );
}
