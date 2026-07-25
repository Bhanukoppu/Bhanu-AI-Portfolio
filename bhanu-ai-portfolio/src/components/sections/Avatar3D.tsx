"use client";

import dynamic from "next/dynamic";
import SectionTitle from "@/components/ui/SectionTitle";
import ModelErrorBoundary from "@/components/three/ModelErrorBoundary";

const CharacterScene = dynamic(() => import("@/components/three/CharacterScene"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] sm:h-[520px] w-full rounded-xl border border-line bg-panel/40 flex items-center justify-center">
      <p className="font-mono text-xs text-mist">loading 3D scene…</p>
    </div>
  ),
});

function CharacterSceneFallback() {
  return (
    <div className="h-[420px] sm:h-[520px] w-full rounded-xl border border-line bg-panel/40 flex items-center justify-center">
      <p className="font-mono text-xs text-mist">3D preview unavailable. Add /public/models/character.glb to restore it.</p>
    </div>
  );
}

export default function Avatar3D() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="record 01 / 10 · avatar · interactive"
          heading="A version of me, in 3D"
          description="Drag to look around. Swap in your own character.glb any time — see README."
        />
        <div className="mt-10">
          <ModelErrorBoundary fallback={<CharacterSceneFallback />}>
            <CharacterScene />
          </ModelErrorBoundary>
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-mist">3D preview uses <span className="font-mono">/public/models/character.glb</span>. Add the file to that folder to restore the full model.</p>
        </div>
      </div>
    </section>
  );
}
