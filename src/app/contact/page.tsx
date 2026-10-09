import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactEnquiryForm } from "@/components/contact/ContactEnquiryForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInformation } from "@/components/contact/ContactInformation";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { contactPage } from "@/data/contact";
import { homeImages } from "@/data/home";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Velloria Westland Spa in Westlands, Nairobi",
  description:
    "Find Velloria Westland Spa on Stima Lane in Westlands, Nairobi. Contact us about massage, facials, spa treatments, packages and wellness experiences.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <ContactHero />

        <ContactInformation />

        <section id="send-enquiry" className="velloria-section bg-[var(--velloria-cream)]">
          <div className="velloria-container">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20">
              <div className="lg:sticky lg:top-32">
                <p className="velloria-eyebrow text-[var(--velloria-mocha)]">
                  {contactPage.enquiry.eyebrow}
                </p>

                <h2 className="velloria-display mt-5 max-w-xl text-5xl leading-[0.92] text-[var(--velloria-espresso)] sm:text-6xl">
                  {contactPage.enquiry.title}
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-[#77675a] sm:text-base sm:leading-8">
                  {contactPage.enquiry.description}
                </p>

                <div className="mt-8 overflow-hidden rounded-[1.75rem]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={homeImages.detail}
                      alt="Velloria treatment atmosphere"
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <ContactEnquiryForm />
            </div>
          </div>
        </section>

        <section className="velloria-section bg-[var(--velloria-deep)] text-white">
          <div className="velloria-container">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="velloria-eyebrow text-[var(--velloria-sand)]">
                  {contactPage.closing.eyebrow}
                </p>

                <h2 className="velloria-display mt-5 max-w-4xl text-5xl leading-[0.92] sm:text-6xl lg:text-7xl">
                  {contactPage.closing.title}
                </h2>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  {contactPage.closing.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:pb-1">
                <Button href="/book">
                  Book Your Visit
                  <ArrowUpRight size={16} strokeWidth={1.7} />
                </Button>

                <WhatsAppButton label="WhatsApp Velloria" />
              </div>
            </div>

            <div className="mt-14 border-t border-white/10 pt-7">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
              >
                <span>{siteConfig.address}</span>
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


