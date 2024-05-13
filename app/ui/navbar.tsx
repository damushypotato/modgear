import Image from 'next/image';
import Link from 'next/link';
import NavLinks from '@/app/ui/navlinks';

export default function Navbar() {
    return (
        <nav className='flex justify-around items-center fixed w-full top-0 shadow-2xl bg-black z-50'>
            <Link className='branding flex items-center py-4' href='/'>
                <Image src='/logo.png' alt='logo' width={64} height={64} />
                <h1 className='title font-semibold text-4xl text-white'>TopGear</h1>
            </Link>
            <div className='flex items-center'>
                <NavLinks />
            </div>
        </nav>
    );
}
