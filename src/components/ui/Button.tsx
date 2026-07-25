import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  children: ReactNode;
  icon?: ReactNode;
  download?: boolean;
  target?: string;
  rel?: string;
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  icon,
  download,
  target,
  rel,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-gold via-gold to-teal text-ink hover:from-gold/90 hover:to-teal/90 shadow-[0_18px_60px_-30px_rgba(79,209,197,0.8)]"
      : "border border-line bg-white/5 text-ivory hover:border-teal/60 hover:bg-teal/10 hover:text-teal shadow-[0_10px_40px_-30px_rgba(79,209,197,0.35)]";

  const className = `${base} ${styles}`;

  if (href) {
    return (
      <a
        href={href}
        className={className}
        download={download}
        target={target}
        rel={rel}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className} type="button">
      {children}
      {icon}
    </button>
  );
}
