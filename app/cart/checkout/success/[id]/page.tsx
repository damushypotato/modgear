import CheckoutSuccess from '@/app/ui/cart/checkout/success/success';
import Navbar from '@/app/ui/navbar';

export default function CheckoutSuccessPage({ params }: { params: { id: string } }) {
    return (
        <main>
            <Navbar />
            <div className='my-24 px-4 w-1/3 mx-auto'>
                <CheckoutSuccess id={params.id} />
            </div>
        </main>
    );
}
