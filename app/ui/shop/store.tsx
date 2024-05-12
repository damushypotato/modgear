import { fetchProducts } from '@/app/lib/data';
import Item from './item';

export default async function Store() {
    const products = (await fetchProducts()).map(p => <Item key={p.id} product={p} />);

    return <div className='flex justify-center flex-wrap'>{products}</div>;
}
