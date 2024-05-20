import { SpotLight, useTexture } from '@react-three/drei';

export default function Logo(props: JSX.IntrinsicElements['group']) {
    const map = useTexture('/TG.png');

    return (
        <group {...props}>
            <mesh>
                <planeGeometry />
                <meshStandardMaterial
                    roughness={1}
                    map={map}
                    transparent
                    emissiveIntensity={0.9}
                    emissive={'white'}
                />
            </mesh>
        </group>
    );
}
