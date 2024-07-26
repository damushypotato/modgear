import products from '@/public/data/products.json';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    if (searchParams.has('slug')) {
        const slug = searchParams.get('slug');
        const product = products.find(product => product.slug === slug);

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
    } else {
        return new Response(JSON.stringify(products), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
