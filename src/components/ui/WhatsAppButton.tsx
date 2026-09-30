import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

type WhatsAppButtonProps = {
  label?: string;
};

const buttonClasses =
  "velloria-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#33271f] px-6 text-sm font-semibold tracking-wide text-[#ffffff] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#201914] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a8068] focus-visible:ring-offset-2";

export function WhatsAppButton({
  label = "WhatsApp Us",
}: WhatsAppButtonProps) {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} on WhatsApp`}
      className={buttonClasses}
    >
      <MessageCircle
        size={17}
        strokeWidth={1.8}
        className="text-[#ffffff]"
      />
      <span className="text-[#ffffff]">{label}</span>
    </a>
  );
}
