'use client';

import { OrbitControls, Html } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import F40 from './F40';
import Logo from './logo';
import EnvironmentLights from './environmentLights';
import Postprocessing from './postprocessing';
import { ColourSelection } from '@/app/lib/definitions';
import EnvironmentGeneral from './environmentGeneral';
import ColourPicker from '../../ui/paint/colourpicker';

function Scene() {
    const { gl } = useThree();
    const composer = useRef<any>();
    const [autorotate, setAutorotate] = useState(true);
    const [colour, setColour] = useState({ colour: 'white' } as ColourSelection);
    const [rotate, setRotate] = useState(true);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === ' ') setAutorotate(prev => !prev);
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [setAutorotate]);

    function onHoverEnter() {
        setRotate(false);
    }

    function onHoverLeave() {
        setRotate(true);
    }

    async function screenshot() {
        const dataUrl = gl.domElement.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'screenshot.png';
        a.click();
    }

    return (
        <>
            <color attach='background' args={['rgb(1, 10, 24)']} />
            <F40
                position={[0, -1.16, 0]}
                scale={1.8}
                rotation={[0, Math.PI / 1.5, 0]}
                colour={colour}
            />
            <Logo
                scale={5}
                position={[0, -1.161, 4]}
                rotation={[-Math.PI / 2, 0, 2.05 * Math.PI]}
                colour={colour.colour}
            />
            <EnvironmentGeneral />
            <EnvironmentLights />
            <Postprocessing ref={composer} />
            <OrbitControls
                maxPolarAngle={Math.PI / 2}
                enablePan={false}
                autoRotate={autorotate}
                enableRotate={rotate}
            />
            <Html>
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

export default function PaintApp() {
    return (
        <Canvas camera={{ position: [0, 0, 12], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
            <Scene />
        </Canvas>
    );
}
