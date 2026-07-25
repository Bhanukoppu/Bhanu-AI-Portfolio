"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-panel/20 border-y border-line">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <SectionTitle
            eyebrow="record 04 / 10 · skills · verified"
            heading="Skills"
            description="Grouped by where they show up in practice, not ranked by arbitrary progress bars."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: gi * 0.08 }}
            >
              <Card className="h-full border-teal/10 bg-gradient-to-br from-[#0b121f] via-[#0d1523] to-[#101826]">
                <div className="mb-6">
                  <p className="font-mono text-xs text-teal/70 uppercase tracking-[0.3em]">
                    {group.group}
                  </p>
                  <div className="mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-gold to-teal" />
                </div>
                <div className="grid gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="rounded-2xl border border-line bg-ink/50 px-4 py-3 text-sm text-ivory transition duration-300 hover:border-gold/40 hover:bg-white/5"
                    >
                      {skill}
                    </div>
                  ))}
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
