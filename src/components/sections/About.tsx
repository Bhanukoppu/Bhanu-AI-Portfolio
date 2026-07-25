"use client";

import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { about, profile } from "@/data/portfolio";

export default function About() {

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
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                className="absolute inset-0 object-cover"
              />
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
