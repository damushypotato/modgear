'use client';

import { ContactShadows, Environment, Lightformer, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './model';
import { Suspense, useEffect, useState } from 'react';
import { Html, useProgress } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Logo from './logo';

export function Loader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <h1 className='text-2xl'>{Math.round(progress)}% Loaded...</h1>
        </Html>
    );
}

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
            <Suspense fallback={<Loader />}>
                <Model position={[0, -1.16, 0]} scale={1.8} rotation={[0, Math.PI / 1.5, 0]} />

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
                <mesh
                    scale={4}
                    position={[-3, -1.161, -1]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
                >
                    <ringGeometry args={[0.9, 1, 3, 1]} />
                    <meshStandardMaterial color='white' roughness={0.75} />
                </mesh>
                <Logo
                    scale={5}
                    position={[0, -1.161, 4]}
                    rotation={[-Math.PI / 2, 0, 2.05 * Math.PI]}
                />

                <Environment resolution={512}>
                    {/* Ceiling */}
                    <Lightformer
                        intensity={2}
                        rotation-x={Math.PI / 2}
                        position={[0, 4, -9]}
                        scale={[10, 1, 1]}
                    />
                    <Lightformer
                        intensity={2}
                        rotation-x={Math.PI / 2}
                        position={[0, 4, -6]}
                        scale={[10, 1, 1]}
                    />
                    <Lightformer
                        intensity={2}
                        rotation-x={Math.PI / 2}
                        position={[0, 4, -3]}
                        scale={[10, 1, 1]}
                    />
                    <Lightformer
                        intensity={2}
                        rotation-x={Math.PI / 2}
                        position={[0, 4, 0]}
                        scale={[10, 1, 1]}
                    />
                    <Lightformer
                        intensity={2}
                        rotation-x={Math.PI / 2}
                        position={[0, 4, 3]}
                        scale={[10, 1, 1]}
                    />
                    <Lightformer
                        intensity={2}
                        rotation-x={Math.PI / 2}
                        position={[0, 4, 6]}
                        scale={[10, 1, 1]}
                    />
                    <Lightformer
                        intensity={2}
                        rotation-x={Math.PI / 2}
                        position={[0, 4, 9]}
                        scale={[10, 1, 1]}
                    />
                    {/* Sides */}
                    <Lightformer
                        intensity={2}
                        rotation-y={Math.PI / 2}
                        position={[-50, 2, 0]}
                        scale={[100, 2, 1]}
                    />
                    <Lightformer
                        intensity={2}
                        rotation-y={-Math.PI / 2}
                        position={[50, 2, 0]}
                        scale={[100, 2, 1]}
                    />
                    {/* Key */}
                    <Lightformer
                        form='ring'
                        color='red'
                        intensity={10}
                        scale={2}
                        position={[10, 5, 10]}
                        onUpdate={self => self.lookAt(0, 0, 0)}
                    />
                </Environment>
                <EffectComposer>
                    <Bloom
                        luminanceThreshold={0.2}
                        mipmapBlur
                        luminanceSmoothing={0}
                        intensity={1}
                    />
                </EffectComposer>
                <OrbitControls maxPolarAngle={Math.PI / 2} enablePan={false} autoRotate={rotate} />
            </Suspense>
        </Canvas>
    );
}
