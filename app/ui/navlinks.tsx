'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Kode_Mono, Inter } from 'next/font/google';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useCartStore } from '../store/useCartStore';
import useFromStore from '../store/useFromStore';

const kode = Kode_Mono({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'], weight: '800' });

interface Navlink {
    name: string;
    href: string;
}

const links: Navlink[] = [
    {
        name: '$cart',
        href: '/cart',
    },
    {
        name: 'Shop',
        href: '/shop',
    },
    // {
    //     name: 'Tuner',
    //     href: '/enginetuner',
    // },
    {
        name: 'Paint',
        href: '/paint',
    },
];

export default function NavLinks() {
    const pathname = usePathname();

    const cartItems = useFromStore(useCartStore, state => state.totalItems);

    return (
        <div className='flex items-center'>
            {links.map(link => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'px-4 text-xl transition-color hover:text-blue-500',
                            kode.className,
                            pathname === link.href ? 'text-blue-500' : 'text-white'
                        )}
                    >
                        {link.name === '$cart' ? (
                            <div className='flex'>
                                <ShoppingCartIcon className='w-6 h-6' />
                                {cartItems === 0 ? (
                                    <></>
                                ) : (
                                    <p className={clsx(inter.className, 'text-xs text-red-500')}>
                                        {cartItems}
                                    </p>
                                )}
                            </div>
                        ) : (
                            link.name
                        )}
                    </Link>
                );
            })}
        </div>
    );
}
