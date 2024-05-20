import { ContactShadows } from '@react-three/drei';

export default function EnvironmentGeneral() {
    return (
        <>
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
        </>
    );
}
