'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Kode_Mono, Inter } from 'next/font/google';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useCartStore } from '../store/useCartStore';
import useFromStore from '../store/useFromStore';

// load the fonts for styling
const kode = Kode_Mono({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'], weight: '800' });

// define the navigation link interface
interface Navlink {
    name: string;
    href: string;
}

// define the navigation links
const links: Navlink[] = [
    // link to the cart
    {
        name: '$cart',
        href: '/cart',
    },

    // link to the shop
    {
        name: 'Shop',
        href: '/shop',
    },

    // link to the paint page
    {
        name: 'Paint',
        href: '/paint',
    },
];

// define the navlinks component
export default function NavLinks() {
    // get the current url pathname
    // this is used to determine the active link
    const pathname = usePathname();

    // get the total number of items in the cart
    const cartItems = useFromStore(useCartStore, state => state.totalItems);

    // render the navigation links
    return (
        <div className='flex items-center'>
            {/* map through the links and render them */}
            {links.map(link => {
                return (
                    // wrap the link in a link component
                    <Link
                        // set the key to the link name
                        // this is needed for react to keep track of the links
                        key={link.name}
                        // set the href to the link href
                        href={link.href}
                        // styling
                        className={clsx(
                            'px-4 text-xl transition-color hover:text-blue-500',
                            kode.className,
                            pathname === link.href ? 'text-blue-500' : 'text-white'
                        )}
                    >
                        {/* render the link name */}
                        {/* if the link name is $cart, render the cart link */}
                        {link.name === '$cart' ? (
                            <div className='flex'>
                                <ShoppingCartIcon className='w-6 h-6' />
                                {/* if the cart is empty, render nothing in the item count */}
                                {cartItems === 0 ? (
                                    <></>
                                ) : (
                                    // otherwise render the item count
                                    <p className={clsx(inter.className, 'text-xs text-red-500')}>
                                        {cartItems}
                                    </p>
                                )}
                            </div>
                        ) : (
                            // otherwise render the link name
                            link.name
                        )}
                    </Link>
                );
            })}
        </div>
    );
}
