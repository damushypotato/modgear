import { extend, useThree } from '@react-three/fiber';
import { Bloom, EffectComposer, FXAA } from '@react-three/postprocessing';
import { forwardRef } from 'react';
import { FXAAShader, RenderPass, ShaderPass } from 'three/examples/jsm/Addons.js';

extend({ ShaderPass, RenderPass });

type Props = JSX.IntrinsicElements['effectComposer'];

//add msaa
const Postprocessing = forwardRef<typeof EffectComposer, Props>(function Process(props, ref) {
    const { camera, scene } = useThree();

    return (
        <EffectComposer {...props} ref={ref}>
            <Bloom luminanceThreshold={0.2} mipmapBlur luminanceSmoothing={0} intensity={1} />
            <renderPass attach='passes-0' camera={camera} scene={scene} />
            <shaderPass args={[FXAAShader]} renderToScreen attach='passes-1' />
        </EffectComposer>
    );
});

export default Postprocessing;
