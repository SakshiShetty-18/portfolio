import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Lightformer } from '@react-three/drei';

function Knot({ dark }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.x += delta * 0.25;
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[0.8, 0.26, 180, 24]} />
      <meshStandardMaterial color={dark ? '#c9d2ff' : '#2f4bff'} metalness={0.95} roughness={0.2} />
    </mesh>
  );
}

// Drag to rotate. Zoom is disabled so the page can still scroll over it.
export default function ProjectPreview3D({ dark = true }) {
  return (
    <Canvas camera={{ position: [0, 0, 3.6], fov: 45 }} dpr={[1, 1.5]} style={{ background: 'transparent' }}>
      <Knot dark={dark} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
      <Environment resolution={128} frames={1}>
        <Lightformer form="rect" intensity={3} position={[0, 5, -3]} scale={[10, 3, 1]} />
        <Lightformer form="rect" intensity={2} position={[-5, 1, 2]} scale={[3, 6, 1]} />
        <Lightformer form="rect" intensity={2} position={[5, -1, 2]} scale={[3, 6, 1]} />
      </Environment>
    </Canvas>
  );
}
