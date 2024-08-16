import { ColourSelection } from '@/app/types/definitions';
import { ContactShadows } from '@react-three/drei';

export default function EnvironmentGeneral({ colour }: { colour: ColourSelection }) {
    return (
        <>
            {/* This code generates the floor and backdrop for the car scene */}
            <mesh
                scale={4}
                position={[3, -1.161, -1.5]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
            >
                {/* Draw a square */}
                <ringGeometry args={[0.9, 1, 4, 1]} />
                <meshStandardMaterial color={colour.colour} roughness={0.75} />
            </mesh>
            <mesh scale={4} position={[-3, -1.161, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
                {/* Make a triangle */}
                <ringGeometry args={[0.9, 1, 3, 1]} />
                <meshStandardMaterial color={colour.colour} roughness={0.75} />
            </mesh>
            {/* Ceiling light */}
            <hemisphereLight intensity={0.5} />
            {/* Allow for the car to cast a shadow on the floor */}
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
