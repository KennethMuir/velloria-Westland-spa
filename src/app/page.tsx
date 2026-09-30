import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="relative flex min-h-screen items-end overflow-hidden bg-[var(--velloria-deep)] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(217,201,181,0.18),transparent_35%),linear-gradient(120deg,#201914_0%,#33271f_52%,#5b4939_100%)]" />

          <div className="absolute right-[8%] top-[24%] hidden h-72 w-72 rounded-full border border-white/10 md:block" />
          <div className="absolute right-[12%] top-[29%] hidden h-56 w-56 rounded-full border border-white/10 md:block" />

          <Container className="relative z-10 pb-20 pt-40 md:pb-24">
            <div className="max-w-4xl">
              <p className="velloria-eyebrow text-white/60">
                Westlands · Nairobi
              </p>

              <h1 className="velloria-display mt-5 max-w-4xl text-6xl font-medium leading-[0.88] tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]">
                Come back
                <br />
                <span className="italic text-[var(--velloria-sand)]">
                  to yourself.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                A considered space for restorative treatments, quiet
                indulgence and the simple luxury of slowing down.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/book" variant="light">
                  Book an Appointment
                  <ArrowUpRight size={16} />
                </Button>

                <WhatsAppButton
                  label="WhatsApp Velloria"
                  className="border border-white/20 bg-transparent text-white hover:bg-white/10"
                />
              </div>
            </div>

            <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/45">
              <ArrowDown size={15} />
              Discover Velloria
            </div>
          </Container>
        </section>

        <section className="velloria-section bg-[var(--velloria-ivory)]">
          <Container>
            <SectionHeading
              eyebrow="The Velloria Experience"
              title={
                <>
                  Space to breathe.
                  <br />
                  Time to restore.
                </>
              }
              description="We're creating a modern wellness destination where thoughtful treatments, beautiful surroundings and unhurried service come together."
            />

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                ["01", "Restore", "Treatments designed to help you slow down and reconnect."],
                ["02", "Renew", "Beauty and body rituals created around how you want to feel."],
                ["03", "Return", "Leave with a little more ease than you arrived with."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="min-h-64 rounded-[2rem] border border-[var(--velloria-border)] bg-white/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <span className="text-xs font-semibold tracking-[0.16em] text-[var(--velloria-mocha)]">
                    {number}
                  </span>

                  <h3 className="velloria-display mt-16 text-3xl text-[var(--velloria-deep)]">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--velloria-espresso)]/60">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
