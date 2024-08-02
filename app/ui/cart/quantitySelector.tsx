import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';

interface Props {
    quantity: number;
    setQuantity: (quantity: number) => void;
}

// Component to select the quantity of a product in the cart
export default function QuantitySelector({ quantity, setQuantity }: Props) {
    // determine if the quantity is 1
    const isSingleItem = quantity === 1;

    // return the quantity selector element
    return (
        <div className='p-2 flex items-center justify-between'>
            {/* reducer button */}
            <button
                // disable the button if the quantity is 1 so that it cannot be reduced below 1
                disabled={isSingleItem}
                // decrease the quantity by 1 when the button is clicked
                onClick={() => setQuantity(quantity - 1)}
                className='p-2 bg-gray-200 text-black rounded-md'
            >
                {/* add a minus icon to make it clear that this button reduces the quantity */}
                <MinusIcon className='w-4 h-4' />
            </button>

            {/* display the quantity */}
            <p className=''>{quantity}</p>

            {/* increase button */}
            <button
                // increase the quantity by 1 when the button is clicked
                onClick={() => setQuantity(quantity + 1)}
                className='p-2 bg-gray-200 text-black rounded-md'
            >
                {/* add a plus icon to make it clear that this button increases the quantity */}
                <PlusIcon className='w-4 h-4' />
            </button>
        </div>
    );
}
