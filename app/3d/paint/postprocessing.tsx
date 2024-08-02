import { extend, useThree } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { forwardRef } from 'react';
import { FXAAShader, RenderPass, ShaderPass } from 'three/examples/jsm/Addons.js';

extend({ ShaderPass, RenderPass });

type Props = JSX.IntrinsicElements['effectComposer'];

const Postprocessing = forwardRef<typeof EffectComposer, Props>(function Process(props, ref) {
    // get the camera and scene from the three fiber context
    const { camera, scene } = useThree();

    // create a render pass to render the scene
    return (
        <EffectComposer {...props} ref={ref}>
            {/* Add a bloom effect to the scene */}
            <Bloom luminanceThreshold={0.2} mipmapBlur luminanceSmoothing={0} intensity={1} />

            {/* Add a render pass to render the scene */}
            <renderPass attach='passes-0' camera={camera} scene={scene} />

            {/* Add an FXAA shader pass to the scene */}
            <shaderPass args={[FXAAShader]} renderToScreen attach='passes-1' />
        </EffectComposer>
    );
});

export default Postprocessing;
