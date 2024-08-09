'use client';

import { useProducts } from '@/app/data/useProducts';
import Item from './item';
import SearchBar from './search';
import { useEffect, useState } from 'react';
import { Product_Category, Sort_Options } from '@/app/types/definitions';
import Fuse from 'fuse.js';

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
        const filtered = products.filter(product => categories.includes(product.category));
        if (sort === 'asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sort === 'desc') {
            filtered.sort((a, b) => b.price - a.price);
        }

        if (search === '') {
            setItems(filtered.map(product => <Item key={product.id} product={product} />));
            return;
        }

        const fuse = new Fuse(filtered, {
            keys: ['name', 'description', 'category'],
            includeScore: true,
        });

        const results = fuse
            .search(search)
            .filter(result => (result.score ? result.score < 0.5 : true));

        if (results.length === 0) {
            setItems([
                <h1 key='no-results' className='text-3xl mt-8 text-center'>
                    No results found
                </h1>,
            ]);
            return;
        }
        setItems(results.map(result => <Item key={result.item.id} product={result.item} />));
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
