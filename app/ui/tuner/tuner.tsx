'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './model';
import { Suspense } from 'react';
import { Html, useProgress } from '@react-three/drei';
import { Color, PCFShadowMap } from 'three';

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
                <ambientLight intensity={1} castShadow />
                <directionalLight
                    color='white'
                    position={[500, 500, 500]}
                    intensity={10}
                    castShadow
                />
                {/* <directionalLight color='white' position={[-5, 0, -5]} intensity={0.8} /> */}
                {/* <directionalLight color='white' position={[0, 5, 0]} intensity={0.8} /> */}

                <Model color={new Color('red')} />

                <OrbitControls />
            </Suspense>
        </Canvas>
    );
}
