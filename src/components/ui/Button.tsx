import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "light";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--velloria-espresso)] text-[var(--velloria-white)] hover:bg-[var(--velloria-deep)]",
  secondary:
    "border border-[var(--velloria-border)] bg-transparent text-[var(--velloria-espresso)] hover:bg-[var(--velloria-cream)]",
  light:
    "bg-[var(--velloria-white)] text-[var(--velloria-espresso)] hover:bg-[var(--velloria-cream)]",
};

const baseClasses =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--velloria-mocha)] focus-visible:ring-offset-2";

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
