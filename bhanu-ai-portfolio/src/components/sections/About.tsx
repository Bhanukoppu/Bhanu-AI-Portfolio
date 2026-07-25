"use client";

import Image from "next/image";
import { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { about, profile } from "@/data/portfolio";

export default function About() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreviewUrl(URL.createObjectURL(file));
  }

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <SectionTitle eyebrow={about.eyebrow} heading={about.heading} />

          <div className="mt-12 grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-5 text-mist leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="space-y-6">
            <div className="relative aspect-square w-full max-w-xs mx-auto lg:mx-0 rounded-xl overflow-hidden border border-line bg-panel">
              {/* Upload your photo locally to preview it, or add it permanently at public/profile.jpg */}
              {previewUrl ? (
                <Image
                  src={previewUrl}
                  alt="Profile preview"
                  fill
                  className="absolute inset-0 object-cover"
                />
              ) : (
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  className="absolute inset-0 object-cover"
                />
              )}
            </div>

            <div className="space-y-3 text-xs text-mist">
              <label className="block text-mist">Preview your portrait</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="text-sm text-mist" />
              <p className="text-[11px] text-mist">
                For a permanent profile photo, place your image at <span className="font-mono">public/profile.jpg</span> and update the `photo` field in <span className="font-mono">src/data/portfolio.ts</span>.
              </p>
            </div>

            <Card hover={false} className="!p-4">
              <dl className="grid grid-cols-2 gap-4">
                {about.quickFacts.map((f) => (
                  <div key={f.label}>
                    <dt className="font-mono text-[11px] text-mist uppercase tracking-wide">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-sm text-ivory">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </div>
        </div>
        </SectionReveal>
      </div>
    </section>
  );
}
