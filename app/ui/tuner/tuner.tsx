'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Color } from 'three';

export default function TunerApp() {
    return (
        <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight color='red' position={[0, 0, 5]} />
            <directionalLight color='green' position={[0, 5, 0]} />
            <directionalLight color='blue' position={[5, 0, 0]} />
            <mesh>
                <octahedronGeometry args={[2, 100]} />
                <meshStandardMaterial />
            </mesh>
            <OrbitControls />
        </Canvas>
    );
}
