import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock,
  MessageCircle,
} from "lucide-react";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getPackageBySlug, packages } from "@/data/packages";
import { getTreatmentBySlug } from "@/data/treatments";

type PackagePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return packages.map((spaPackage) => ({
    slug: spaPackage.slug,
  }));
}

export async function generateMetadata({
  params,
}: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const spaPackage = getPackageBySlug(slug);

  if (!spaPackage) {
    return {
      title: "Package",
    };
  }

  return {
    title: spaPackage.title,
    description: spaPackage.shortDescription,
  };
}

export default async function PackageDetailPage({
  params,
}: PackagePageProps) {
  const { slug } = await params;
  const spaPackage = getPackageBySlug(slug);

  if (!spaPackage) {
    notFound();
  }

  const includedTreatments = spaPackage.treatmentSlugs
    .map((treatmentSlug) => getTreatmentBySlug(treatmentSlug))
    .filter((treatment): treatment is NonNullable<typeof treatment> =>
      Boolean(treatment),
    );

  const relatedPackages = packages
    .filter((item) => item.slug !== spaPackage.slug)
    .filter((item) => item.category === spaPackage.category)
    .slice(0, 2);

  const fallbackPackages =
    relatedPackages.length > 0
      ? relatedPackages
      : packages
          .filter((item) => item.slug !== spaPackage.slug)
          .slice(0, 2);

  return (
    <>
      <Header />

      <main className="bg-[#f8f5ef]">
        <section className="relative overflow-hidden bg-[#201914] pt-32 sm:pt-36">
          <div className="velloria-container pb-10 sm:pb-14">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#d9c9b5] transition-colors hover:text-white"
            >
              <ArrowLeft size={16} strokeWidth={1.7} />
              Back to packages
            </Link>
          </div>

          <div className="relative aspect-[4/3] w-full sm:aspect-[16/8] lg:aspect-[16/7]">
            <Image
              src={spaPackage.image}
              alt={spaPackage.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#201914]/90 via-[#201914]/25 to-transparent" />

            <div className="velloria-container absolute inset-x-0 bottom-0 pb-10 sm:pb-14 lg:pb-16">
              <div className="max-w-5xl">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#e6d8c9]">
                  <span>{spaPackage.number}</span>
                  <span className="h-1 w-1 rounded-full bg-[#d9c9b5]" />
                  <span>{spaPackage.category}</span>
                </div>

                <h1 className="velloria-display text-5xl leading-[0.95] text-[#fffdf9] sm:text-6xl lg:text-8xl">
                  {spaPackage.title}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="velloria-section">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
              <div>
                <p className="velloria-eyebrow mb-5">The experience</p>

                <p className="velloria-display max-w-3xl text-3xl leading-[1.08] text-[#33271f] sm:text-4xl">
                  {spaPackage.shortDescription}
                </p>

                <div className="mt-8 max-w-2xl text-sm leading-8 text-[#6d5d50] sm:text-base">
                  <p>{spaPackage.description}</p>
                </div>

                <div className="mt-10 border-t border-[#33271f]/10 pt-8">
                  <h2 className="velloria-display text-2xl text-[#33271f]">
                    Your package includes
                  </h2>

                  <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                    {spaPackage.inclusions.map((inclusion) => (
                      <li
                        key={inclusion}
                        className="flex items-start gap-3 text-sm leading-6 text-[#6d5d50]"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#efe8dc] text-[#33271f]">
                          <Check size={13} strokeWidth={2} />
                        </span>

                        <span>{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 border-t border-[#33271f]/10 pt-8">
                  <div className="mb-6 flex items-end justify-between gap-6">
                    <div>
                      <p className="velloria-eyebrow mb-3">
                        Included treatments
                      </p>

                      <h2 className="velloria-display text-3xl text-[#33271f] sm:text-4xl">
                        The rituals within
                      </h2>
                    </div>

                    <Link
                      href="/treatments"
                      className="hidden items-center gap-2 text-sm font-semibold text-[#33271f] transition-colors hover:text-[#9a8068] sm:inline-flex"
                    >
                      All treatments
                      <ArrowUpRight size={16} strokeWidth={1.7} />
                    </Link>
                  </div>

                  <div className="grid gap-5">
                    {includedTreatments.map((treatment) => (
                      <Link
                        key={treatment.slug}
                        href={`/treatments/${treatment.slug}`}
                        className="group grid overflow-hidden rounded-[1.5rem] bg-[#efe8dc] sm:grid-cols-[12rem_1fr]"
                      >
                        <div className="relative aspect-[4/3] sm:aspect-auto">
                          <Image
                            src={treatment.image}
                            alt={treatment.title}
                            fill
                            sizes="(min-width: 640px) 12rem, 100vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>

                        <div className="flex flex-col justify-center p-6 sm:p-7">
                          <p className="velloria-eyebrow mb-2">
                            {treatment.category}
                          </p>

                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="velloria-display text-2xl text-[#33271f]">
                              {treatment.title}
                            </h3>

                            <span className="flex items-center gap-1.5 text-xs text-[#77675a]">
                              <Clock size={13} strokeWidth={1.6} />
                              {treatment.durations[0]?.label}
                            </span>
                          </div>

                          <p className="mt-3 text-sm leading-6 text-[#6d5d50]">
                            {treatment.shortDescription}
                          </p>

                          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#33271f]">
                            Explore treatment
                            <ArrowUpRight
                              size={16}
                              strokeWidth={1.7}
                              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="lg:pt-1">
                <div className="rounded-[1.5rem] bg-[#efe8dc] p-6 sm:p-8 lg:sticky lg:top-28">
                  <p className="velloria-eyebrow mb-5">Package details</p>

                  <div className="rounded-2xl bg-[#fffdf9] px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Clock
                        size={18}
                        strokeWidth={1.6}
                        className="text-[#9a8068]"
                      />

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#77675a]">
                          Experience time
                        </p>

                        <p className="mt-1 text-sm font-medium text-[#33271f]">
                          {spaPackage.duration}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 rounded-2xl bg-[#fffdf9] px-5 py-4">
                    <div className="flex items-center gap-3">
                      <MessageCircle
                        size={18}
                        strokeWidth={1.6}
                        className="text-[#9a8068]"
                      />

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#77675a]">
                          Pricing
                        </p>

                        <p className="mt-1 text-sm font-medium text-[#33271f]">
                          On request
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 space-y-3">
                    <Button href={`/book?type=package&slug=${spaPackage.slug}`}>Book This Package</Button>
                    <WhatsAppButton label="Ask About This Package" />
                  </div>

                  <p className="mt-5 text-center text-xs leading-5 text-[#77675a]">
                    Speak with us about availability, timing and the best way
                    to shape your visit.
                  </p>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        <section className="bg-[#efe8dc] py-20 sm:py-24">
          <Container>
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="velloria-eyebrow mb-4">Continue exploring</p>

                <h2 className="velloria-display text-4xl text-[#33271f] sm:text-5xl">
                  You may also enjoy
                </h2>
              </div>

              <Link
                href="/packages"
                className="hidden items-center gap-2 text-sm font-semibold text-[#33271f] transition-colors hover:text-[#9a8068] sm:inline-flex"
              >
                All packages
                <ArrowUpRight size={16} strokeWidth={1.7} />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {fallbackPackages.map((item) => (
                <Link
                  key={item.slug}
                  href={`/packages/${item.slug}`}
                  className="group grid overflow-hidden rounded-[1.5rem] bg-[#fffdf9] sm:grid-cols-2"
                >
                  <div className="relative aspect-[4/3] sm:aspect-auto">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 25vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col justify-between p-6 sm:p-7">
                    <div>
                      <p className="velloria-eyebrow mb-3">
                        {item.category}
                      </p>

                      <h3 className="velloria-display text-2xl text-[#33271f]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#6d5d50]">
                        {item.shortDescription}
                      </p>
                    </div>

                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#33271f]">
                      Explore package
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
