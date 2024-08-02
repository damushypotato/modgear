import { Metadata } from 'next';
import Navbar from '@/app/ui/navbar';
import Checkout from '@/app/ui/cart/checkout/checkout';

export const metadata: Metadata = {
    title: 'Checkout - TopGear',
    description: 'Checkout your shopping cart',
};

// render the checkout page
export default function CartPage() {
    return (
        <main>
            <Navbar />
            <div className='my-24 px-4'>
                {/* render the checkout component */}
                <Checkout />
            </div>
        </main>
    );
}
