"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { StatusPill } from "@/components/ui/Card";
import { learning } from "@/data/portfolio";

export default function Learning() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <SectionTitle
              eyebrow={learning.eyebrow}
              heading={learning.heading}
              description={learning.note}
            />
            <StatusPill status="unverified" />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
          {learning.items.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="font-mono text-sm px-4 py-2 rounded-full border border-dashed border-line text-mist"
            >
              {item}
            </motion.span>
          ))}
        </div>
        </SectionReveal>
      </div>
    </section>
  );
}
