import CheckoutSuccess from '@/app/ui/cart/checkout/success/success';
import Navbar from '@/app/ui/navbar';

// export the checkout success page to display the order confirmation and details
export default function CheckoutSuccessPage({ params }: { params: { id: string } }) {
    return (
        <main>
            <Navbar />
            <div className='my-24 px-4 w-1/3 mx-auto'>
                {/* render the checkout success component */}
                <CheckoutSuccess id={params.id} />
            </div>
        </main>
    );
}
