import { spaPhotography } from "@/data/photography";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { teamMembers } from "@/data/team";

const teamImages = spaPhotography.team;

export function TeamCatalogue() {
  return (
    <section id="featured-team" className="velloria-section bg-[#f8f5ef]">
      <div className="velloria-container">
        <div className="max-w-3xl">
          <p className="velloria-eyebrow text-[#9a8068]">
            Meet the team
          </p>

          <h2 className="velloria-display mt-5 text-5xl leading-[0.92] text-[#33271f] sm:text-6xl lg:text-7xl">
            Skilled hands. A quieter pace.
          </h2>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#77675a] sm:text-base sm:leading-8">
            Meet the therapists behind the Velloria experience, each bringing
            their own focus and rhythm to every session.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-[1.75rem] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={teamImages[index].src}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#201914]/75 via-[#201914]/20 to-transparent p-5 pt-20">
                  <div className="flex items-end justify-between gap-4 text-white">
                    <div>
                      <p className="velloria-display text-3xl leading-none">
                        {member.name}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/70">
                        {member.experience}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:bg-white group-hover:text-[#33271f]">
                      <ArrowUpRight size={17} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-[#33271f]">
                  {member.role}
                </p>

                <p className="mt-3 text-sm leading-6 text-[#77675a]">
                  {member.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {member.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full border border-[#33271f]/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.08em] text-[#9a8068]"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}





