import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[var(--velloria-deep)] text-white">
      <div className="velloria-container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="velloria-display text-4xl">
              Velloria
            </Link>

            <p className="velloria-display mt-4 max-w-sm text-2xl leading-snug text-white/75">
              A sanctuary for your senses, created for moments that belong
              entirely to you.
            </p>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/75 transition-colors hover:text-white"
            >
              <MessageCircle size={16} />
              {siteConfig.whatsapp}
            </a>
          </div>

          <div>
            <p className="velloria-eyebrow text-white/45">Explore</p>

            <div className="mt-5 flex flex-col gap-3">
              {siteConfig.navigation.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-white/65 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="velloria-eyebrow text-white/45">Discover</p>

            <div className="mt-5 flex flex-col gap-3">
              {siteConfig.navigation.slice(4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-white/65 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/book"
                className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white"
              >
                Book an appointment
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <div>
            <p className="velloria-eyebrow text-white/45">Find Us</p>

            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex max-w-xs items-start gap-2 text-sm leading-7 text-white/60 transition-colors hover:text-white"
            >
              <MapPin size={17} className="mt-1 shrink-0" />
              <span>{siteConfig.address}</span>
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Velloria Westland Spa.</p>
          <p>Wellness, beauty & restoration.</p>
        </div>
      </div>
    </footer>
  );
}
