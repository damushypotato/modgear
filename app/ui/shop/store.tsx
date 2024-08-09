'use client';

import { useProducts } from '@/app/data/useProducts';
import Item from './item';
import SearchBar from './search';
import { useEffect, useState } from 'react';
import { Product_Category, Sort_Options } from '@/app/types/definitions';

// define the store component
export default function Store() {
    // get the products list from the api
    const { products, isLoading } = useProducts();
    const [items, setItems] = useState<JSX.Element[]>();

    // map over the products list and render the item component for each product
    useEffect(() => {
        if (products) {
            setItems(products.map(product => <Item key={product.id} product={product} />));
        }
    }, [products]);

    if (isLoading) {
        return (
            <div className='flex h-full justify-center items-center'>
                <h1 className='text-xl text-center'>Loading...</h1>
            </div>
        );
    }

    function filterItems(search: string, categories: Product_Category[], sort: Sort_Options) {
        const filtered = products.filter(product => {
            const searchMatch = product.name.toLowerCase().includes(search.toLowerCase());
            const categoryMatch = categories.includes(product.category);
            return searchMatch && categoryMatch;
        });

        if (sort === 'asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sort === 'desc') {
            filtered.sort((a, b) => b.price - a.price);
        }

        setItems(filtered.map(product => <Item key={product.id} product={product} />));
    }

    // render the store component
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl'>ModGear Shop</h1>
            </div>
            <div>
                <hr />
                <div>
                    <SearchBar handleSearch={filterItems} />
                </div>
                <div className='flex justify-center flex-wrap'>{items}</div>
            </div>
        </div>
    );
}
