'use client';

import { OrbitControls, Html } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import F40 from './F40';
import Logo from './logo';
import EnvironmentLights from './environmentLights';
import Postprocessing from './postprocessing';
import { ColourSelection } from '@/app/types/definitions';
import EnvironmentGeneral from './environmentGeneral';
import ColourPicker from '../../ui/paint/colourpicker';

function Scene() {
    // initialize variables
    const { gl } = useThree();
    const composer = useRef<any>();
    const [autorotate, setAutorotate] = useState(true);
    const [colour, setColour] = useState({ colour: 'white' } as ColourSelection);
    const [rotate, setRotate] = useState(true);

    // add event listener to toggle autorotate on spacebar press
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === ' ') setAutorotate(prev => !prev);
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [setAutorotate]);

    // functions to handle hover events,
    // toggling the rotation of the car when the colour picker is hovered,
    // so that the car doesn't rotate when the user is trying to select a colour
    function onHoverEnter() {
        setRotate(false);
    }
    function onHoverLeave() {
        setRotate(true);
    }

    // function to take a screenshot of the car, and download it as a png
    async function screenshot() {
        const dataUrl = gl.domElement.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataUrl;
        // download the image as 'screenshot.png'
        a.download = 'screenshot.png';
        // click the link to download the image
        a.click();
    }

    return (
        <>
            {/* Set the backdrop colour */}
            <color attach='background' args={['rgb(1, 10, 24)']} />

            {/* Add the car model to the scene */}
            <F40
                position={[0, -1.16, 0]}
                scale={1.8}
                rotation={[0, Math.PI / 1.5, 0]}
                colour={colour}
            />

            {/* Add the logo to the scene */}
            <Logo
                scale={5}
                position={[0, -1.161, 4]}
                rotation={[-Math.PI / 2, 0, 2.05 * Math.PI]}
                colour={colour.colour}
            />

            {/* Add the environment to the scene */}
            <EnvironmentGeneral />

            {/* Add the lights to the scene */}
            <EnvironmentLights />

            {/* Add the postprocessing effects to the scene */}
            <Postprocessing ref={composer} />

            {/* Add the orbit controls to the scene */}
            <OrbitControls
                maxPolarAngle={Math.PI / 2}
                enablePan={false}
                autoRotate={autorotate}
                enableRotate={rotate}
            />

            {/* Add the colour picker to the scene */}
            <Html position={[5, 1.5, -2.75]} center>
                <ColourPicker
                    onMouseEnter={onHoverEnter}
                    onMouseLeave={onHoverLeave}
                    handleColourChange={setColour}
                    screenshot={screenshot}
                />
            </Html>
        </>
    );
}

// export the PaintApp component as a whole
export default function PaintApp() {
    return (
        <Canvas camera={{ position: [0, 0, 12], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
            <Scene />
        </Canvas>
    );
}
