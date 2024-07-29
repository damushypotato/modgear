import { getProduct } from '@/app/api/lib/products';
import Navbar from '@/app/ui/navbar';
import Product from '@/app/ui/shop/product';
import { Metadata } from 'next';

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const metadata = await getProduct(params.slug);

    if (!metadata) {
        return {
            title: 'Product not found',
            description: 'The product you are looking for does not exist.',
        };
    }

    return {
        title: `${metadata.name} - TopGear`,
        description: metadata.description,
    };
}

export default function ProductPage({ params }: Props) {
    return (
        <main>
            <Navbar />
            <Product slug={params.slug} />
        </main>
    );
}
