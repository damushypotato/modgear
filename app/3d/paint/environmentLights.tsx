import { Environment, Lightformer } from '@react-three/drei';

export default function EnvironmentLights(props: JSX.IntrinsicElements['group']) {
    return (
        <Environment resolution={512} {...props}>
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
    );
}
