import Navbar from '../ui/navbar';
import Store from '../ui/shop/store';

export const metadata = {
    title: 'ModGear Mod Shop',
    description: 'Shop for the best car mods at ModGear!',
};

// export the shop page to display the store
export default function Shop() {
    return (
        <main>
            <Navbar />
            <div className='mt-24 px-60'>
                <Store />
            </div>
        </main>
    );
}
