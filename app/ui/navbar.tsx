import Image from 'next/image';
import Link from 'next/link';
import NavLinks from '@/app/ui/navlinks';
import clsx from 'clsx';

// define the navbar component
export default function Navbar({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
    const className = props.className;
    delete props.className;

    return (
        // render the navbar with the branding and navigation links
        <nav
            {...props}
            className={clsx(
                className,
                'flex justify-around items-center fixed w-full top-0 shadow-2xl bg-black z-50'
            )}
        >
            {/* branding */}
            <Link className='branding flex items-center py-1' href='/'>
                <Image src='/logo.png' alt='logo' width={48} height={48} />
                <h1 className='title font-semibold text-3xl text-white'>ModGear</h1>
            </Link>

            {/* navigation links */}
            <div className='flex items-center'>
                <NavLinks />
            </div>
        </nav>
    );
}
