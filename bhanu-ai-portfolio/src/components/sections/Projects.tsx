"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Card, { StatusPill } from "@/components/ui/Card";
import TiltCard from "@/components/ui/TiltCard";
import { projects } from "@/data/portfolio";

const statusMap = {
  shipped: "shipped",
  "in-progress": "in-progress",
  planned: "planned",
} as const;

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#0b111d]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <SectionTitle
            eyebrow="record 05 / 10 · projects · verified"
            heading="Projects"
            description="Shipped work first, then what's actively being built next."
          />

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
            >
              <TiltCard maxTilt={10} scale={1.03} className="h-full" glareRounded="rounded-[1.5rem]">
                <Card className="h-full flex flex-col !p-0 overflow-hidden border border-teal/10 bg-gradient-to-br from-[#0d1421] via-[#101824] to-[#111721]">
                  {project.image && (
                    <div className="relative aspect-video w-full overflow-hidden bg-ink/60">
                      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-teal/60 via-gold/40 to-teal/60 opacity-80" />
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-500 ease-out hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="font-mono text-xs text-teal/80 uppercase tracking-[0.3em]">
                          {project.id}
                        </p>
                        <h3 className="mt-3 font-display text-2xl text-ivory">
                          {project.title}
                        </h3>
                      </div>
                      <StatusPill status={statusMap[project.status]} />
                    </div>

                    <p className="mt-5 text-sm leading-7 text-mist flex-1">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-line bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-mist"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {(project.github || project.demo) && (
                      <div className="mt-6 flex flex-wrap gap-3 pt-5 border-t border-line">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-mist hover:text-gold transition-colors"
                          >
                            <Github size={15} /> Code
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-mist hover:text-gold transition-colors"
                          >
                            <ExternalLink size={15} /> Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
