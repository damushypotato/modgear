import { Metadata } from 'next';
import Navbar from '../ui/navbar';
import Cart from '@/app/ui/cart/cart';

export const metadata: Metadata = {
    title: 'Cart - ModGear',
    description: 'Checkout your shopping cart',
};

// return the cart page
export default function CartPage() {
    return (
        <main>
            <Navbar />
            <div className='my-24 px-4'>
                {/* embed the cart items */}
                <Cart />
            </div>
        </main>
    );
}
