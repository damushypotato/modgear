import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';

interface Props {
    quantity: number;
    setQuantity: (quantity: number) => void;
}

export default function QuantitySelector({ quantity, setQuantity }: Props) {
    const isSingleItem = quantity === 1;

    return (
        <div className='p-2 flex items-center justify-between'>
            <button
                disabled={isSingleItem}
                onClick={() => setQuantity(quantity - 1)}
                className='p-2 bg-gray-200 text-black rounded-md'
            >
                <MinusIcon className='w-4 h-4' />
            </button>
            <p className=''>{quantity}</p>
            <button
                onClick={() => setQuantity(quantity + 1)}
                className='p-2 bg-gray-200 text-black rounded-md'
            >
                <PlusIcon className='w-4 h-4' />
            </button>
        </div>
    );
}
