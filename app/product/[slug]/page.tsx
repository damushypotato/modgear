import { useProductBySlug } from '@/app/lib/data';
import Product from '@/app/ui/shop/product';
import { Metadata } from 'next';

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { product, isLoading } = useProductBySlug(params.slug);

    if (isLoading) {
        return {
            title: 'Loading...',
            description: 'Loading...',
        };
    }

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

export default function ProductPage({ params }: Props) {
    return <Product slug={params.slug} />;
}
