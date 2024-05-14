import Navbar from '../ui/navbar';
import Store from '../ui/shop/store';

export const metadata = {
    title: 'TopGear Mod Shop',
    description: 'Shop for the best car mods at TopGear!',
};

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
