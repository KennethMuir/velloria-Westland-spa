import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="velloria-eyebrow">{eyebrow}</p>}

      <h2 className="velloria-display mt-3 text-4xl font-medium leading-[0.98] tracking-tight text-[var(--velloria-deep)] sm:text-5xl md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-[var(--velloria-espresso)]/65 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
