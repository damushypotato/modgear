import { getProduct } from '@/app/api/lib/products';
import Navbar from '@/app/ui/navbar';
import Product from '@/app/ui/shop/product';
import { Metadata } from 'next';

type Props = {
    params: {
        slug: string;
    };
};

// function to generate metadata for the product page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // get the product metadata by its slug
    const metadata = await getProduct(params.slug);

    // if no metadata is found, return a default metadata
    if (!metadata) {
        return {
            title: 'Product not found',
            description: 'The product you are looking for does not exist.',
        };
    }

    // return the product metadata
    return {
        title: `${metadata.name} - TopGear`,
        description: metadata.description,
    };
}

// export the product page to display the product details
export default function ProductPage({ params }: Props) {
    return (
        <main>
            <Navbar />
            {/* render the product component by the url request */}
            <Product slug={params.slug} />
        </main>
    );
}
