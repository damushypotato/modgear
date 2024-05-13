import { Product } from '@/app/lib/definitions';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/size.module.css';
import clsx from 'clsx';

const gradientStyle: React.CSSProperties = {
    backgroundImage:
        'linear-gradient(45deg, rgba(33,0,37,1) 0%, rgba(0,0,122,1) 50%, rgba(84,49,125,1) 100%)',
};

export default function Item({ product }: { product: Product }) {
    return (
        <Link
            href={`/product/${encodeURI(product.name)}`}
            className={clsx(
                'm-6 p-6 bg-gray-200 border-gray-600 border-2 text-black rounded-lg flex flex-col items-center overflow-hidden justify-center',
                styles.item
            )}
        >
            <Image
                src={`/${product.image}`}
                className={clsx('rounded-lg object-scale-down', styles['item-image'])}
                width={200}
                height={200}
                alt=''
            />
            <div className='w-full px-2 flex flex-col items-start mt-4'>
                <h1 className='text-2xl'>{product.name}</h1>
                <div className='flex justify-between w-full items-end'>
                    <p className='text-2xl text-red-500'>${product.price.toFixed(2)}</p>
                    <p className='text-gray-500'>{product.category}</p>
                </div>
            </div>
        </Link>
    );
}
