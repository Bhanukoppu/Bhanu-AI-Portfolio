"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileBadge } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { certificates, googleCloud } from "@/data/portfolio";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 sm:py-32 bg-[#09101d] border-y border-line">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <SectionTitle
            eyebrow="record 09 / 10 · certificates · verified"
            heading="Certificates"
            description="Every certificate earned so far — no extra clicks required to browse what’s completed."
          />

          {googleCloud.profileImage && (
            <div className="mt-6">
              <Card className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center border-teal/10 bg-gradient-to-br from-[#0b101f] via-[#0f1524] to-[#111827]">
                <div className="relative h-20 w-20 overflow-hidden rounded-3xl border border-line">
                  <Image src={googleCloud.profileImage} alt="Google Cloud profile" fill className="object-cover" />
                </div>
                <div className="flex-1 space-y-2">
                  <p className="font-mono text-xs text-teal uppercase tracking-[0.3em]">
                    {googleCloud.league}
                  </p>
                  <p className="text-lg font-semibold text-ivory">{googleCloud.points.toLocaleString()} points</p>
                  <p className="text-sm text-mist leading-relaxed">{googleCloud.note}</p>
                </div>
                {googleCloud.badgeImages && googleCloud.badgeImages.length > 0 && (
                  <div className="flex gap-3">
                    {googleCloud.badgeImages.map((b, idx) => (
                      <div key={idx} className="relative h-10 w-10 overflow-hidden">
                        <Image src={b} alt={`badge-${idx}`} fill className="object-contain" />
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          )}

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => {
            const cardContent = (
              <Card className="h-full border-teal/10 bg-gradient-to-br from-[#0b101f] via-[#0f1524] to-[#111827]">
                <div className="p-6 flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-teal/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-teal">
                      {cert.category}
                    </span>
                    <span className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.28em] ${cert.file ? 'bg-gold/10 text-gold' : 'bg-white/5 text-mist'}`}>
                      {cert.file ? "PDF ready" : "Pending upload"}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-display text-ivory leading-tight">{cert.title}</h3>
                    <p className="text-sm text-mist">{cert.issuer}</p>
                  </div>

                  <div className="mt-auto flex items-center gap-2 text-sm text-mist">
                    <FileBadge size={16} className="text-teal/60" />
                    {cert.file ? (
                      <span>{cert.file.split("/").pop()} available in public assets</span>
                    ) : (
                      <span>Upload this certificate file to /public/certificates</span>
                    )}
                  </div>
                </div>
              </Card>
            );

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              >
                {cert.file ? (
                  <a href={cert.file} target="_blank" rel="noreferrer" className="block h-full">
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </div>
        </SectionReveal>
      </div>
    </section>
  );
}
