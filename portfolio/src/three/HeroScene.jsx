import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, Lightformer } from '@react-three/drei';

function Sculpture({ dark, reduceMotion }) {
  const group = useRef();
  const wire = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;
    const speed = reduceMotion ? 0.05 : 0.2;
    group.current.rotation.y += delta * speed;
    // ease toward the pointer for a subtle interactive feel
    const tx = reduceMotion ? 0 : state.pointer.y * 0.35;
    const tz = reduceMotion ? 0 : state.pointer.x * 0.35;
    group.current.rotation.x += (tx - group.current.rotation.x) * 0.04;
    group.current.rotation.z += (tz - group.current.rotation.z) * 0.04;
    if (wire.current && !reduceMotion) wire.current.rotation.y -= delta * 0.12;
  });

  return (
    <Float speed={reduceMotion ? 0 : 1.4} rotationIntensity={0.3} floatIntensity={0.9}>
      <group ref={group}>
        <mesh>
          <icosahedronGeometry args={[1.25, 12]} />
          <MeshDistortMaterial
            color={dark ? '#c9d2ff' : '#1d2433'}
            metalness={1}
            roughness={0.16}
            distort={reduceMotion ? 0 : 0.28}
            speed={1.2}
            envMapIntensity={1.1}
          />
        </mesh>
        <mesh ref={wire} scale={1.55}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color={dark ? '#8aa4ff' : '#2f4bff'} wireframe transparent opacity={0.35} />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroScene({ dark = true, reduceMotion = false }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} />
      <Sculpture dark={dark} reduceMotion={reduceMotion} />
      {/* Procedural studio lighting: no external HDR file is downloaded */}
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={3} position={[0, 5, -4]} scale={[10, 3, 1]} />
        <Lightformer form="rect" intensity={2} position={[-5, 1, 2]} scale={[3, 6, 1]} color="#8aa4ff" />
        <Lightformer form="rect" intensity={2} position={[5, -1, 2]} scale={[3, 6, 1]} color="#c4b5fd" />
        <Lightformer form="ring" intensity={2} position={[0, 0, 6]} scale={4} />
      </Environment>
    </Canvas>
  );
}
