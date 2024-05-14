import { Color, DoubleSide } from 'three';

export function BodyMaterial({ color = 'hotpink' }: { color?: Color | string }) {
    return (
        <meshStandardMaterial
            color={color}
            roughness={0.1}
            metalness={0.9}
            side={DoubleSide}
            shadowSide={DoubleSide}
        />
    );
}

export function InteriorMaterial({ color = 'red' }: { color?: Color | string }) {
    return (
        <meshStandardMaterial
            color={color}
            roughness={0.8}
            metalness={0}
            side={DoubleSide}
            shadowSide={DoubleSide}
        />
    );
}

export function CarbonMaterial() {
    return (
        <meshStandardMaterial
            color='black'
            roughness={1}
            metalness={0}
            side={DoubleSide}
            shadowSide={DoubleSide}
        />
    );
}
