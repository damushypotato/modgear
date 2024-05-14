import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props: any) {
    const { nodes, materials }: any = useGLTF('/gt40.glb');
    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Body_Body_0.geometry}
                    material={materials.Body}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Glass_Glass_0.geometry}
                    material={materials.Glass}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Deatils_Details_0.geometry}
                    material={materials.Details}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Caliper_Caliper_0.geometry}
                    material={materials.Caliper}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Wheel_wheels_0.geometry}
                    material={materials.wheels}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
            </group>
        </group>
    );
}

useGLTF.preload('/gt40.glb');
