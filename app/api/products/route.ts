import { getProduct, getProducts } from '@/app/api/lib/products';

// function to handle GET requests to the /api/products route
// to get all products or a single product by its slug
export async function GET(request: Request) {
    // get the search parameters from the request URL
    const { searchParams } = new URL(request.url);

    // get the slug from the search parameters
    const slug = searchParams.get('slug');

    // if no slug is provided, return all products instead
    if (!slug) {
        const allProducts = await getProducts();

        // return all products as a JSON response
        return new Response(JSON.stringify(allProducts), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    // get the product by its slug
    const product = await getProduct(slug);

    // if no product is found, return a 404 response
    if (!product) {
        return new Response('Product not found', {
            status: 404,
        });
    }

    // return the product as a JSON response if it exists
    return new Response(JSON.stringify(product), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
