import { ColourSelection } from '@/app/types/definitions';
import { useState } from 'react';

// define the props for the colour picker component
type Props = {
    // function to handle the colour change of the material
    handleColourChange: (colour: ColourSelection) => void;

    // function to take a screenshot of the canvas
    screenshot: () => void;

    // additional props
} & React.HTMLAttributes<HTMLDivElement>;

// define the colour picker component
export default function ColourPicker({ handleColourChange, screenshot, ...props }: Props) {
    // set the initial colour state to white
    const [colour, setColour] = useState({ colour: 'white' } as ColourSelection);

    // handle the input event when the colour picker is changed
    function handleInput(e: any) {
        // get the value of the colour picker
        let v = e.target.value;

        // if the colour picker is the roughness or metalness slider
        if (e.target.name === 'roughness' || e.target.name === 'metalness') {
            // divide the value by 1000 to get a value between 0 and 1
            v /= 1000;
        }

        // set the colour state to the new colour
        const x = { ...colour, [e.target.name]: v };
        setColour(x);

        // handle the colour change with the new colour
        // this will update the material with the new colour
        // higher up in the component tree
        handleColourChange(x);
    }

    // render the colour picker
    return (
        <div {...props} className='select-none'>
            {/* title */}
            <h1>Colour Picker</h1>

            {/* colour picker sliders */}
            <form onInput={handleInput}>
                <input type='color' name='colour' />
                <input type='range' name='roughness' min={0} max={1000} />
                <input type='range' name='metalness' min={0} max={1000} />
            </form>

            {/* screenshot button */}
            <button onClick={screenshot}>Screenshot</button>
        </div>
    );
}
