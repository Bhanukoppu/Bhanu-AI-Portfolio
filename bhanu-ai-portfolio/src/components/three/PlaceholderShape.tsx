"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** A quiet placeholder shape so the section still looks intentional
 *  before you've added a real character.glb. */
export default function PlaceholderShape() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.35;
      mesh.current.rotation.x += delta * 0.12;
    }
  });

  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[1, 0.32, 128, 16]} />
      <meshStandardMaterial
        color="#D9A94E"
        wireframe
        emissive="#4FD1C5"
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}
