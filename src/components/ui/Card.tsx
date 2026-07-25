import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-[1.5rem] border border-line bg-panel/75 p-6 backdrop-blur-xl shadow-[0_20px_70px_-40px_rgba(0,0,0,0.8)] ${
        hover
          ? "transition duration-300 hover:border-gold/40 hover:shadow-[0_30px_90px_-40px_rgba(79,209,197,0.25)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

/** Small mono-font status pill, e.g. "✓ verified" or "in progress" */
export function StatusPill({
  status,
}: {
  status: "verified" | "unverified" | "in-progress" | "planned" | "shipped";
}) {
  const map: Record<string, string> = {
    verified: "text-teal border-teal/40 bg-teal/5",
    shipped: "text-teal border-teal/40 bg-teal/5",
    unverified: "text-mist border-line bg-white/[0.02]",
    "in-progress": "text-gold border-gold/40 bg-gold/5",
    planned: "text-mist border-line bg-white/[0.02]",
  };

  const label: Record<string, string> = {
    verified: "✓ verified",
    shipped: "✓ shipped",
    unverified: "· unverified",
    "in-progress": "◐ in progress",
    planned: "○ planned",
  };

  return (
    <span
      className={`font-mono text-[11px] px-2 py-1 rounded-full border ${map[status]}`}
    >
      {label[status]}
    </span>
  );
}
