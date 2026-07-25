"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <SectionTitle
            eyebrow="record 03 / 10 · education · verified"
            heading="Education"
          />

          <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="flex items-start gap-4 h-full">
                <GraduationCap size={20} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-mono text-[11px] text-mist">{item.year}</p>
                  <h3 className="mt-1 text-sm font-medium text-ivory leading-snug">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-xs text-mist">{item.school}</p>
                  <p className="mt-2 font-mono text-xs text-teal">{item.score}</p>
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
