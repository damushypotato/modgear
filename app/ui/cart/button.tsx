import { ArrowUturnLeftIcon, ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import Link from 'next/link';

// load the font for styling
const inter = Inter({ subsets: ['latin'], weight: '400' });

// define the props for the generic button component
interface Props {
    className?: string;
    children?: React.ReactNode;
    href: string;
    icon: React.ReactNode;
}

// define the props for the styled buttons
interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    href: string;
}

// define the generic button component

export function Button({ className, children, href, icon }: Props) {
    return (
        // wrap the button in a link component
        // the link component will navigate to the href
        // when the button is clicked
        <Link
            href={href}
            className={clsx(
                className,
                inter.className,
                'flex items-center outline outline-2 p-2 rounded-sm'
            )}
        >
            {/* render the icon */}
            {icon}
            {/* render the button text */}
            <p className='text-left font-semibold'>{children}</p>
        </Link>
    );
}

// define the styled buttons
export function ReturnButton({ className, children, href }: ButtonProps) {
    return (
        // render the button with the arrow icon
        <Button className={className} href={href} icon={<ArrowUturnLeftIcon className='w-6 h-6' />}>
            {children}
        </Button>
    );
}

export function CheckoutButton({ className, children, href }: ButtonProps) {
    return (
        // render the button with the shopping bag icon
        <Button className={className} href={href} icon={<ShoppingBagIcon className='w-6 h-6' />}>
            {children}
        </Button>
    );
}

export function CartButton({ className, children, href }: ButtonProps) {
    return (
        // render the button with the shopping cart icon
        <Button className={className} href={href} icon={<ShoppingCartIcon className='w-6 h-6' />}>
            {children}
        </Button>
    );
}
