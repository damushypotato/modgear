import { ArrowUturnLeftIcon, ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], weight: '400' });

interface Props {
    className?: string;
    children?: React.ReactNode;
    href: string;
    icon: React.ReactNode;
}

interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    href: string;
}

export function Button({ className, children, href, icon }: Props) {
    return (
        <Link
            href={href}
            className={clsx(
                className,
                inter.className,
                'flex items-center outline outline-2 p-2 rounded-sm'
            )}
        >
            {icon}
            <p className='text-left font-semibold'>{children}</p>
        </Link>
    );
}

export function ReturnButton({ className, children, href }: ButtonProps) {
    return (
        <Button className={className} href={href} icon={<ArrowUturnLeftIcon className='w-6 h-6' />}>
            {children}
        </Button>
    );
}

export function CheckoutButton({ className, children, href }: ButtonProps) {
    return (
        <Button className={className} href={href} icon={<ShoppingBagIcon className='w-6 h-6' />}>
            {children}
        </Button>
    );
}

export function CartButton({ className, children, href }: ButtonProps) {
    return (
        <Button className={className} href={href} icon={<ShoppingCartIcon className='w-6 h-6' />}>
            {children}
        </Button>
    );
}
