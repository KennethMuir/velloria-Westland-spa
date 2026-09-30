import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
};

const buttonClasses =
  "velloria-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#33271f] px-6 text-sm font-semibold tracking-wide text-[#ffffff] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#201914] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a8068] focus-visible:ring-offset-2";

export function Button({ children, href, onClick }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
