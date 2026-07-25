import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-mist">
          © {year} {profile.name} · built with Next.js
        </p>

        <div className="flex items-center gap-5">
          {profile.socials.github && (
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-mist hover:text-gold transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {profile.socials.linkedin && (
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-mist hover:text-gold transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-mist hover:text-gold transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
