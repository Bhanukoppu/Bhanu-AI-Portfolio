"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import TiltCard from "@/components/ui/TiltCard";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0c1220] border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <SectionTitle
            eyebrow="record 10 / 10 · contact · verified"
            heading="Contact"
            description="Open to AI/ML, data analytics, and software engineering roles."
          />

          <div className="mt-12 grid lg:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit}
            className="space-y-6 rounded-[1.5rem] border border-teal/10 bg-gradient-to-br from-[#0c1120]/80 to-[#111628]/80 p-8 shadow-[0_30px_90px_-50px_rgba(79,209,197,0.4)] backdrop-blur-xl"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-mist mb-2">
                  name
                </label>
                <input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-line bg-panel/70 px-4 py-3 text-sm text-ivory placeholder:text-mist/50 focus:border-teal/50 focus:ring-2 focus:ring-teal/10 outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-mist mb-2">
                  email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-line bg-panel/70 px-4 py-3 text-sm text-ivory placeholder:text-mist/50 focus:border-teal/50 focus:ring-2 focus:ring-teal/10 outline-none transition"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-mist mb-2">
                message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-2xl border border-line bg-panel/70 px-4 py-3 text-sm text-ivory placeholder:text-mist/50 focus:border-teal/50 focus:ring-2 focus:ring-teal/10 outline-none resize-none transition"
                placeholder="Let's talk about..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-gold via-gold to-teal px-6 py-3 text-sm font-semibold text-ink shadow-[0_18px_50px_-30px_rgba(79,209,197,0.9)] transition hover:brightness-110"
            >
              Send message <Send size={16} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <TiltCard maxTilt={6} scale={1.02} className="rounded-[1.5rem]" glareRounded="rounded-[1.5rem]">
              <div className="relative rounded-[1.5rem] border border-teal/10 bg-gradient-to-br from-[#0d1321]/80 to-[#0e1524]/80 p-8 shadow-[0_25px_80px_-40px_rgba(79,209,197,0.35)] backdrop-blur-xl overflow-hidden">
                <div className="absolute -right-8 top-8 h-28 w-28 rounded-full bg-teal/10 blur-3xl" />
                <div className="relative flex flex-col gap-6">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 text-mist hover:text-gold transition-colors"
                  >
                    <Mail size={18} /> {profile.email}
                  </a>
                  {profile.socials.github && (
                    <a
                      href={profile.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-mist hover:text-gold transition-colors"
                    >
                      <Github size={18} /> GitHub
                    </a>
                  )}
                  {profile.socials.linkedin && (
                    <a
                      href={profile.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-mist hover:text-gold transition-colors"
                    >
                      <Linkedin size={18} /> LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          </motion.div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
