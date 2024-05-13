import { fetchProductBySlug } from '@/app/lib/data';
import Navbar from '@/app/ui/navbar';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const product = await fetchProductBySlug(params.slug);

    if (!product) {
        return {
            title: 'Product not found',
            description: 'The product you are looking for does not exist.',
        };
    }

    return {
        title: `${product.name} - TopGear`,
        description: product.description,
    };
}

export default async function Product({ params }: Props) {
    const product = await fetchProductBySlug(params.slug);

    if (!product) {
        return notFound();
    }

    return (
        <main>
            <Navbar />
            <div className='flex justify-center items-center mt-40 px-60'>
                <div className='flex flex-col items-center max-w-96 max-h-96'>
                    <Image
                        src={`/${product.image}`}
                        width={300}
                        height={300}
                        alt=''
                        className='rounded-lg size-96 object-scale-down border-4'
                    />
                    <h1 className='text-4xl'>{product.name}</h1>
                    <p className='text-2xl'>${product.price.toFixed(2)}</p>
                    <p className='text-xl'>{product.description}</p>
                </div>
            </div>
        </main>
    );
}
