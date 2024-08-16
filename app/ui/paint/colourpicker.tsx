import { ColourSelection } from '@/app/types/definitions';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import { usePaints } from '@/app/data/usePaints';

const inter = Inter({ subsets: ['latin'], weight: '400' });

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
    const { paints, isLoading } = usePaints();

    // set the initial colour state to white
    const [colour, setColour] = useState({ colour: 'white' } as ColourSelection);

    if (isLoading) {
        return <></>;
    }

    // handle the input event when the colour picker is changed
    function handleInput(paint: ColourSelection) {
        setColour(paint);

        // handle the colour change with the new colour
        // this will update the material with the new colour
        // higher up in the component tree
        handleColourChange(paint);
    }

    // render the colour picker
    return (
        <div
            {...props}
            className={clsx(inter.className, 'select-none bg-white p-8 rounded-xl text-center')}
        >
            {/* title */}
            <h1>Pick a paint colour</h1>

            <div className='flex justify-center flex-wrap'>
                {paints.map(paint => (
                    <div
                        key={paint.id}
                        onClick={() => handleInput(paint)}
                        className='m-6 p-6 bg-gray-200 border-gray-600 border-2 text-black rounded-lg flex flex-col items-center overflow-hidden justify-center'
                    >
                        {paint.name}
                    </div>
                ))}
            </div>
            {/* screenshot button */}
            {/* <button onClick={screenshot}>Screenshot</button> */}
        </div>
    );
}
