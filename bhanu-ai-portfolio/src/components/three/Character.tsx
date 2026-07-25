"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export default function Character(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.4) * 0.06 - 0.05;
  });

  return (
    <Float speed={1.3} rotationIntensity={0.12} floatIntensity={0.28}>
      <group ref={group} {...props} position={[0, -0.7, 0]}>
        {/* body */}
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.35, 0.45, 1.1, 32]} />
          <meshStandardMaterial color="#2563eb" roughness={0.35} metalness={0.1} />
        </mesh>

        {/* head */}
        <mesh position={[0, 1.1, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#f7d6d0" roughness={0.45} />
        </mesh>

        {/* hair */}
        <mesh position={[0, 1.28, 0]} rotation={[0.15, 0, 0]}> 
          <sphereGeometry args={[0.42, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.65]} />
          <meshStandardMaterial color="#0f172a" roughness={0.35} metalness={0.03} />
        </mesh>

        <mesh position={[0, 1.38, 0.08]}>
          <boxGeometry args={[0.8, 0.24, 0.55]} />
          <meshStandardMaterial color="#0f172a" roughness={0.35} metalness={0.03} />
        </mesh>

        {/* eye highlights */}
        <mesh position={[-0.15, 1.05, 0.35]}> 
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} />
        </mesh>
        <mesh position={[0.15, 1.05, 0.35]}> 
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} />
        </mesh>
        <mesh position={[-0.15, 1.08, 0.41]}> 
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        <mesh position={[0.15, 1.08, 0.41]}> 
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#111827" />
        </mesh>

        {/* blush */}
        <mesh position={[-0.22, 0.95, 0.36]}> 
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#fca5a5" transparent opacity={0.8} />
        </mesh>
        <mesh position={[0.22, 0.95, 0.36]}> 
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#fca5a5" transparent opacity={0.8} />
        </mesh>

        {/* collar */}
        <mesh position={[0, 0.45, 0.28]} rotation={[0.6, 0, 0]}> 
          <boxGeometry args={[0.72, 0.16, 0.45]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.4} />
        </mesh>
      </group>
    </Float>
  );
}
