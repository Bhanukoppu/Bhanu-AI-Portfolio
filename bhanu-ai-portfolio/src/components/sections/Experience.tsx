"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#0c1220] border-y border-line">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <SectionTitle
            eyebrow="record 06 / 10 · experience · verified"
            heading="Experience"
            description="Internships and job simulations, in the order they happened."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <Card className="h-full border-teal/10 bg-gradient-to-br from-[#0b101f] via-[#101324] to-[#111726]">
                  <div className="space-y-5 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-gold">
                        {item.period}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.25em] text-mist">{item.id}</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-display text-ivory">{item.role}</h3>
                      <p className="text-sm text-teal">{item.org}</p>
                    </div>

                    <div className="space-y-3">
                      {item.points.map((point, pi) => (
                        <p key={pi} className="text-sm text-mist leading-relaxed">
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
