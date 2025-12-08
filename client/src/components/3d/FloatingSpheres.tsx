import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

interface FloatingSphereProps {
  position: [number, number, number];
  color: string;
  speed: number;
  size: number;
}

function FloatingSphere({ position, color, speed, size }: FloatingSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
      <meshBasicMaterial color={color} wireframe transparent opacity={0.2} />
    </Sphere>
  );
}

function Blob({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.scale.y = 1 + Math.cos(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.8, 32, 32]} position={position}>
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.15}
        roughness={0.5}
        metalness={0.5}
      />
    </Sphere>
  );
}

export default function FloatingSpheres() {
  const spheres: FloatingSphereProps[] = [
    { position: [-3, 2, -2], color: "#00ffff", speed: 0.8, size: 0.5 },
    { position: [3, -1, -3], color: "#ff00ff", speed: 0.6, size: 0.7 },
    { position: [-2, -2, -1], color: "#8000ff", speed: 1, size: 0.4 },
    { position: [2, 1, -2], color: "#00ff80", speed: 0.7, size: 0.6 },
    { position: [0, -3, -4], color: "#00ffff", speed: 0.9, size: 0.5 },
  ];

  const blobs = [
    { position: [-4, 0, -5] as [number, number, number], color: "#00ffff" },
    { position: [4, 2, -6] as [number, number, number], color: "#ff00ff" },
    { position: [0, -2, -4] as [number, number, number], color: "#8000ff" },
  ];

  return (
    <div className="absolute inset-0 z-0" data-testid="floating-spheres">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff00ff" />
        
        {spheres.map((sphere, i) => (
          <FloatingSphere key={i} {...sphere} />
        ))}
        
        {blobs.map((blob, i) => (
          <Blob key={`blob-${i}`} {...blob} />
        ))}
      </Canvas>
    </div>
  );
}
