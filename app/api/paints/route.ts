import { getPaint, getPaints } from '../lib/paints';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        const paints = await getPaints();

        return new Response(JSON.stringify(paints), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    const paint = await getPaint(id);

    if (!paint) {
        return new Response('Paint not found', {
            status: 404,
        });
    }

    return new Response(JSON.stringify(paint), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
