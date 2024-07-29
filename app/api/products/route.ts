import { getProduct, getProducts } from '@/app/api/lib/products';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const slug = searchParams.get('slug');

    if (!slug) {
        const allProducts = await getProducts();

        return new Response(JSON.stringify(allProducts), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    const product = await getProduct(slug);

    if (!product) {
        return new Response('Product not found', {
            status: 404,
        });
    }

    return new Response(JSON.stringify(product), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
