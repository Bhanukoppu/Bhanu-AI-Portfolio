"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, FolderGit2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import Button from "@/components/ui/Button";
import dynamic from "next/dynamic";

const TechCharacterScene = dynamic(() => import("@/components/three/TechCharacter"), { ssr: false });

const validationRows = [
  { key: "name", value: profile.shortName },
  { key: "role", value: profile.roles[0] },
  { key: "skills[12]", value: "verified" },
  { key: "projects[6]", value: "verified" },
  { key: "certificates[7]", value: "verified" },
  { key: "status", value: "ready to ship", pending: true },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.35, delayChildren: 0.6 },
  },
};

const row = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function Hero() {
  const [remotePath, setRemotePath] = useState<string | null>(null);
  const [remoteExists, setRemoteExists] = useState<boolean>(false);

  useEffect(() => {
    async function loadRemote() {
      try {
        const res = await fetch("/api/face-intro");
        const data = await res.json();
        if (data?.exists && typeof data.path === "string") {
          setRemoteExists(true);
          setRemotePath(data.path);
        } else {
          setRemoteExists(false);
          setRemotePath(null);
        }
      } catch {
        setRemoteExists(false);
        setRemotePath(null);
      }
    }

    loadRemote();
    const handler = () => loadRemote();
    window.addEventListener("face-intro-updated", handler);
    return () => window.removeEventListener("face-intro-updated", handler);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 hero-ambient pointer-events-none" />
      <div className="absolute inset-0 grid-fade pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: introduction */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-teal"
          >
            👋 welcome/profile.load()
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-5xl sm:text-6xl font-medium text-ivory text-balance"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl sm:text-2xl text-mist"
          >
            {profile.roles.join(" · ")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-mist max-w-lg leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href={profile.resumeFile} download icon={<Download size={16} />}>
              Download Resume
            </Button>
            <Button href="#projects" variant="ghost" icon={<FolderGit2 size={16} />}>
              View Projects
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {['3D UX', 'AI-Ready', 'Cloud Native'].map((tag) => (
              <div
                key={tag}
                className="rounded-3xl border border-teal/20 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.24em] text-mist shadow-[0_14px_40px_-28px_rgba(79,209,197,0.9)] backdrop-blur-sm"
              >
                {tag}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: signature element — tech character + live validation panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden rounded-[1.5rem] border border-line bg-panel/70 backdrop-blur-sm"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 -top-10 h-40 w-40 rounded-full bg-teal/10 blur-3xl animate-float" />
            <div className="absolute left-6 bottom-10 h-24 w-24 rounded-full border border-teal/20" />
          </div>
          <div className="relative p-4">
            {remoteExists && remotePath ? (
              <div className="relative overflow-hidden rounded-xl bg-black">
                <video
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                  src={remotePath}
                  autoPlay
                  loop
                  playsInline
                  controls
                />
                <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs text-teal">
                  Live face intro
                </div>
              </div>
            ) : (
              <TechCharacterScene />
            )}
          </div>

          <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="ml-2 font-mono text-xs text-mist">validator — profile.json</span>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="p-6 font-mono text-sm space-y-3"
          >
            {validationRows.map((r) => (
              <motion.div
                key={r.key}
                variants={row}
                className="flex items-center justify-between gap-4"
              >
                <span className="text-mist">
                  {r.pending ? (
                    <span className="text-gold">◐</span>
                  ) : (
                    <span className="text-teal">✓</span>
                  )}{" "}
                  {r.key}
                </span>
                <span className={r.pending ? "text-gold" : "text-ivory"}>
                  {r.value}
                  {r.pending && <span className="animate-blink">▍</span>}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mist hover:text-gold transition-colors"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
