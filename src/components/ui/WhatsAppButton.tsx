import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

type WhatsAppButtonProps = {
  label?: string;
  className?: string;
};

export function WhatsAppButton({
  label = "WhatsApp Us",
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} on WhatsApp`}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--velloria-espresso)] px-6 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--velloria-deep)] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--velloria-mocha)] focus-visible:ring-offset-2 ${className}`}
    >
      <MessageCircle size={17} strokeWidth={1.8} />
      {label}
    </a>
  );
}
