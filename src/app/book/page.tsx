import type { Metadata } from "next";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingForm } from "@/components/booking/BookingForm";
import { getBookingSelection } from "@/data/booking";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Book Your Visit",
  description:
    "Make a booking enquiry with Velloria Westland Spa in Westlands, Nairobi.",
};

type BookingPageProps = {
  searchParams: Promise<{
    type?: string;
    slug?: string;
  }>;
};

export default async function BookingPage({
  searchParams,
}: BookingPageProps) {
  const params = await searchParams;
  const selection = getBookingSelection(params.type, params.slug);

  return (
    <>
      <Header />

      <main className="bg-[#f8f5ef]">
        <section className="relative overflow-hidden bg-[#201914] pt-32 text-white sm:pt-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(154,128,104,0.22),transparent_38%)]" />

          <div className="velloria-container relative pb-16 sm:pb-20 lg:pb-24">
            <Link
              href={selection ? (selection.type === "treatment" ? "/treatments" : "/packages") : "/"}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#d9c9b5] transition-colors hover:text-white"
            >
              <ArrowLeft size={16} strokeWidth={1.7} />
              {selection
                ? selection.type === "treatment"
                  ? "Back to treatments"
                  : "Back to packages"
                : "Back to home"}
            </Link>

            <div className="mt-12 max-w-4xl">
              <p className="velloria-eyebrow text-white/50">
                {selection ? "Your chosen experience" : "Book your visit"}
              </p>

              <h1 className="velloria-display mt-5 text-6xl leading-[0.9] sm:text-7xl lg:text-[6.5rem]">
                {selection
                  ? `A slower moment begins with ${selection.title}.`
                  : "Make space for yourself."}
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                {selection
                  ? `Tell us when you would like to experience this ${selection.category.toLowerCase()} offering, and we will confirm availability with you.`
                  : "Share your preferred experience and timing with us. Your enquiry will continue directly through WhatsApp, where our team can confirm availability and guide you from there."}
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.14em] text-white/45">
              <span>Stima Lane</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>Westlands, Nairobi</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="velloria-section">
          <div className="velloria-container">
            <BookingForm initialSelection={selection} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
