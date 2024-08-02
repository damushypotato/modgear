import { useTexture } from '@react-three/drei';

export default function Logo(props: JSX.IntrinsicElements['group'] & { colour?: string }) {
    // import the logo texture
    const map = useTexture('/TG.png');

    // remove the colour element from the props object to avoid passing it to the group element
    const newProps = { ...props };
    delete newProps.colour;

    return (
        <group {...newProps}>
            <mesh>
                <planeGeometry />
                <meshStandardMaterial
                    // pass the texture to the image map
                    roughness={1}
                    map={map}
                    transparent
                    emissiveIntensity={0.9}
                    // set the emissive colour to match the car colour
                    emissive={props.colour || 'white'}
                />
            </mesh>
        </group>
    );
}
