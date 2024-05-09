'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Kode_Mono } from 'next/font/google';

const kode = Kode_Mono({ subsets: ['latin'] });

const links = [
    {
        name: 'Shop',
        href: '/shop',
    },
    {
        name: 'Tuner',
        href: '/tuner',
    },
    {
        name: 'Paint',
        href: '/paint',
    },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <div className='flex items-center'>
            {links.map(link => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        'px-4 text-2xl transition-color hover:text-blue-500',
                        kode.className,
                        pathname === link.href ? 'text-blue-500' : 'text-white'
                    )}
                >
                    {link.name}
                </Link>
            ))}
        </div>
    );
}
