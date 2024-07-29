import { ColourSelection } from '@/app/types/definitions';
import { useState } from 'react';

export default function ColourPicker({
    handleColourChange,
    screenshot,
    ...props
}: {
    handleColourChange: (colour: ColourSelection) => void;
    screenshot: () => void;
} & React.HTMLAttributes<HTMLDivElement>) {
    const [colour, setColour] = useState({ colour: 'white' } as ColourSelection);

    function handleInput(e: any) {
        let v = e.target.value;
        if (e.target.name === 'roughness' || e.target.name === 'metalness') {
            v /= 1000;
        }
        const x = { ...colour, [e.target.name]: v };
        setColour(x);

        handleColourChange(x);
    }

    return (
        <div {...props} className='select-none'>
            <h1>Colour Picker</h1>
            <form onInput={handleInput}>
                <input type='color' name='colour' />
                <input type='range' name='roughness' min={0} max={1000} />
                <input type='range' name='metalness' min={0} max={1000} />
            </form>
            <button onClick={screenshot}>Screenshot</button>
        </div>
    );
}
