type SectionTitleProps = {
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
};

/**
 * Every section is framed as a record in a validated dataset:
 * `record 03/08 · projects · verified` — a nod to Bhanu's own
 * dataset-validation project rather than a generic 01/02/03 marker.
 */
export default function SectionTitle({
  eyebrow,
  heading,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <p className="font-mono text-xs text-teal/80 tracking-[0.26em] uppercase">
          {eyebrow}
        </p>
        <span className="mt-3 sm:mt-0 h-px flex-1 bg-gradient-to-r from-gold/40 via-teal/30 to-gold/40"></span>
      </div>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium text-ivory leading-tight">
        {heading}
      </h2>
      {description && (
        <p
          className={`mt-4 text-mist max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
