"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html, OrbitControls } from "@react-three/drei";
import Character from "./Character";

export default function CharacterScene() {
  return (
    <div className="relative h-[420px] sm:h-[520px] w-full rounded-xl border border-line bg-panel/10 overflow-hidden">
      <Canvas camera={{ position: [0, 1.4, 3.4], fov: 32 }}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 4]} intensity={1.1} castShadow />
        <Suspense
          fallback={
            <Html center>
              <div className="font-mono text-xs text-mist">loading anime character…</div>
            </Html>
          }
        >
          <Character />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={Math.PI / 2.4}
        />
      </Canvas>
      <p className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[11px] text-mist/70 pointer-events-none">
        drag to look around
      </p>
    </div>
  );
}
