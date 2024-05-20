import { ColourSelection } from '@/app/lib/definitions';
import { useState } from 'react';

export default function ColourPicker(
    props: JSX.IntrinsicElements['div'] & { handleColourChange: (colour: ColourSelection) => void }
) {
    const [colour, setColour] = useState({ colour: 'white' } as ColourSelection);

    function handleInput(e: any) {
        let v = e.target.value;
        if (e.target.name === 'roughness' || e.target.name === 'metalness') {
            v /= 1000;
        }
        const x = { ...colour, [e.target.name]: v };
        setColour(x);

        props.handleColourChange(x);
    }

    return (
        <div>
            <h1>Colour Picker</h1>
            <form onInput={handleInput}>
                <input type='color' name='colour' />
                <input type='range' name='roughness' min={0} max={1000} />
                <input type='range' name='metalness' min={0} max={1000} />
            </form>
        </div>
    );
}
