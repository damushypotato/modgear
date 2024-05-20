import { Bloom, EffectComposer, FXAA } from '@react-three/postprocessing';

export default function Postprocessing(props: JSX.IntrinsicElements['effectComposer']) {
    return (
        <EffectComposer {...props}>
            <Bloom luminanceThreshold={0.2} mipmapBlur luminanceSmoothing={0} intensity={1} />
            {/* <FXAA /> */}
        </EffectComposer>
    );
}
