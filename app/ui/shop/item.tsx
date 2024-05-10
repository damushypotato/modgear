import { Product } from '@/app/lib/definitions';
import Image from 'next/image';

export default function Item({ product }: { product: Product }) {
    return (
        <div className='m-6 p-6 bg-gray-200 border-gray-600 border-2 text-black rounded-lg w-80 h-80 flex flex-col items-center overflow-hidden justify-center'>
            <Image
                src={`/${product.image}`}
                className='bg-white rounded-lg w-full h-4/6 object-scale-down'
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
        </div>
    );
}
