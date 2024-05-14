'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './model';
import { Suspense } from 'react';
import { Html, useProgress } from '@react-three/drei';

export function Loader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <h1 className='text-2xl'>{Math.round(progress)}% Loaded...</h1>
        </Html>
    );
}

export default function TunerApp() {
    return (
        <Canvas>
            <Suspense fallback={<Loader />}>
                <ambientLight intensity={0.3} />
                <directionalLight color='white' position={[0, 0, 5]} />
                <directionalLight color='white' position={[0, 5, 0]} />
                <directionalLight color='white' position={[5, 0, 0]} />

                <Model />

                <OrbitControls />
            </Suspense>
        </Canvas>
    );
}
