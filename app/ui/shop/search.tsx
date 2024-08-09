import {
    Product_Categories,
    Product_Categories_Search,
    Product_Category,
    Product_Category_Search,
    Sort_Options,
    Sort_Options_List,
} from '@/app/types/definitions';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { useState } from 'react';

// load the font for styling
const inter = Inter({ subsets: ['latin'], weight: '400' });

// define the props interface
interface Props {
    handleSearch: (search: string, categories: Product_Category[], sort: Sort_Options) => void;
}

// define the search bar component
export default function SearchBar({ handleSearch }: Props) {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState<Product_Category_Search>('All');
    const [sort, setSort] = useState<Sort_Options>('');

    function searchChange(s: string) {
        setSearch(s);
        const cat = categoriesFiltered(category);
        handleSearch(s, cat, sort);
    }
    function categoryChange(c: Product_Category_Search) {
        setCategory(c);
        const cat = categoriesFiltered(c);
        handleSearch(search, cat, sort);
    }
    function sortChange(s: Sort_Options) {
        setSort(s);
        const cat = categoriesFiltered(category);
        handleSearch(search, cat, s);
    }

    const categoriesFiltered = (cat: Product_Category_Search) =>
        cat == 'All' ? [...Product_Categories] : [cat];

    return (
        <div className={clsx(inter.className, 'flex justify-center mt-4')}>
            <input
                type='text'
                className='border rounded-md w-1/2 p-2 mx-1'
                placeholder='Search for products...'
                onChange={e => searchChange(e.target.value)}
            />
            <select
                className='border w-1/6 mx-1 rounded-md'
                onChange={e => categoryChange(e.target.value as Product_Category_Search)}
            >
                {Product_Categories_Search.map(cat => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <select
                className='border w-1/6 mx-1 rounded-md'
                onChange={e => sortChange(e.target.value as Sort_Options)}
            >
                {Sort_Options_List.map(opt => (
                    <option key={opt} value={opt}>
                        {opt == ''
                            ? 'Default'
                            : opt == 'asc'
                            ? 'Price: Low to High'
                            : 'Price: High to Low'}
                    </option>
                ))}
            </select>
        </div>
    );
}
