'use client';

import { useProducts } from '@/app/data/useProducts';
import Item from './item';

// define the store component
export default function Store() {
    // get the products list from the api
    const { products, isLoading } = useProducts();

    // render the store component
    return (
        <div className='flex justify-center flex-wrap'>
            {isLoading
                ? // if the products are loading, display a loading message
                  'Loading...'
                : // otherwise, display the products by mapping over the products list
                  // and rendering the item component for each product
                  products.map(product => <Item key={product.id} product={product} />)}
        </div>
    );
}
