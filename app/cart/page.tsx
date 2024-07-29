import { Metadata } from 'next';
import Navbar from '../ui/navbar';
import Cart from '@/app/ui/cart/cart';

export const metadata: Metadata = {
    title: 'Cart - TopGear',
    description: 'Checkout your shopping cart',
};

export default function CartPage() {
    return (
        <main>
            <Navbar />
            <div className='my-24 px-4'>
                <Cart />
            </div>
        </main>
    );
}
