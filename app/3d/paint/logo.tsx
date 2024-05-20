import { useTexture } from '@react-three/drei';

export default function Logo(props: JSX.IntrinsicElements['group'] & { colour?: string }) {
    const map = useTexture('/TG.png');

    const newProps = { ...props };
    delete newProps.colour;

    return (
        <group {...newProps}>
            <mesh>
                <planeGeometry />
                <meshStandardMaterial
                    roughness={1}
                    map={map}
                    transparent
                    emissiveIntensity={0.9}
                    emissive={props.colour || 'white'}
                />
            </mesh>
        </group>
    );
}
