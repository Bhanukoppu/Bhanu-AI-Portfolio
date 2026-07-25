"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { googleCloud } from "@/data/portfolio";

export default function GoogleCloud() {
  return (
    <section id="google-cloud" className="py-24 sm:py-32 bg-panel/30 border-y border-line">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <SectionTitle eyebrow={googleCloud.eyebrow} heading={googleCloud.heading} />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mt-10 rounded-xl border border-gold/30 bg-gradient-to-br from-gold/10 via-panel to-panel overflow-hidden"
          >
            <div className="p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8">
              <div className="h-20 w-20 shrink-0 rounded-full border border-gold/40 bg-gold/10 flex items-center justify-center">
                <Award size={36} className="text-gold" />
              </div>

              <div className="text-center sm:text-left">
                <p className="font-mono text-xs text-gold uppercase tracking-wide">
                  {googleCloud.league}
                </p>
                <p className="mt-1 font-display text-3xl text-ivory">
                  {googleCloud.points.toLocaleString()} points
                </p>
                <p className="mt-3 text-sm text-mist max-w-lg">{googleCloud.note}</p>
              </div>
            </div>

            <div className="border-t border-gold/20 px-8 sm:px-10 py-8 grid sm:grid-cols-2 gap-3">
              {googleCloud.badges.map((badge, i) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="flex items-center gap-2.5 text-sm text-ivory"
                >
                  <CheckCircle2 size={15} className="text-teal shrink-0" />
                  {badge}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}
