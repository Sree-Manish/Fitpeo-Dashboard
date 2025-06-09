import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center, OrthographicCamera } from '@react-three/drei';

function Model({ url }) {
  const gltf = useGLTF(url);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      // modelRef.current.rotation.z += 0.01;
    }
  });

  return <Center><primitive object={gltf.scene} ref={modelRef} scale={[0.09,0.09,0.09]} /></Center>;
}

export default function AnatomyModel() {
  return (
    <div className='model' style={{ width: '100%', height: '100%', filter: "contrast(1.5)" }}>
      <Canvas>
        <OrthographicCamera 
          positon={[ 0, 0, 10]} 
          near={0.1}
          far={1000}
          zoom={20} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model url="/anatomy/source/anatomy.glb" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minAzimuthAngle={-Infinity} // no restriction
          maxAzimuthAngle={Infinity}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2} // locks tilt, allows only z-axis rotation
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/anatomy/source/anatomy.glb');
