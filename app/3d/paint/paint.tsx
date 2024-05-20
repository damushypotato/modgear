'use client';

import { ContactShadows, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import F40 from './F40';
import Logo from './logo';
import Lights from './lights';
import Postprocessing from './postprocessing';

export default function PaintApp() {
    const [rotate, setRotate] = useState(true);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === ' ') setRotate(prev => !prev);
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [setRotate]);

    return (
        <Canvas camera={{ position: [0, 0, 12], fov: 25 }}>
            <color attach='background' args={['rgb(1, 10, 24)']} />
            <F40 position={[0, -1.16, 0]} scale={1.8} rotation={[0, Math.PI / 1.5, 0]} />

            <hemisphereLight intensity={0.5} />
            <ContactShadows
                resolution={1024}
                frames={1}
                position={[0, -1.16, 0]}
                scale={15}
                blur={1}
                opacity={1}
                far={20}
            />
            <mesh
                scale={4}
                position={[3, -1.161, -1.5]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
            >
                <ringGeometry args={[0.9, 1, 4, 1]} />
                <meshStandardMaterial color='white' roughness={0.75} />
            </mesh>
            <mesh scale={4} position={[-3, -1.161, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
                <ringGeometry args={[0.9, 1, 3, 1]} />
                <meshStandardMaterial color='white' roughness={0.75} />
            </mesh>
            <Logo
                scale={5}
                position={[0, -1.161, 4]}
                rotation={[-Math.PI / 2, 0, 2.05 * Math.PI]}
            />

            <Lights />
            <Postprocessing />
            <OrbitControls maxPolarAngle={Math.PI / 2} enablePan={false} autoRotate={rotate} />
        </Canvas>
    );
}
