export type SpaPackage = {
  slug: string;
  number: string;
  category: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  duration: string;
  treatmentSlugs: string[];
  inclusions: string[];
  featured: boolean;
};

export const packageCategories = [
  "All",
  "Signature Escapes",
  "Wellness Journeys",
  "Beauty Rituals",
] as const;

export const packages: SpaPackage[] = [
  {
    slug: "signature-escape",
    number: "01",
    category: "Signature Escapes",
    title: "Signature Escape",
    shortDescription:
      "An unhurried afternoon pairing restorative bodywork, facial care and quiet moments of refreshment.",
    description:
      "Step away from the pace of Nairobi and settle into a considered sequence created to help you slow down. Signature bodywork and facial care are paired with restorative pauses and a welcoming ritual for an experience that feels complete from beginning to end.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1500&q=85",
    duration: "Approx. 3 hours",
    treatmentSlugs: ["restorative-massage", "velloria-glow-facial"],
    inclusions: [
      "Welcome ritual",
      "Restorative Massage",
      "Velloria Glow facial",
      "Restorative tea",
    ],
    featured: true,
  },
  {
    slug: "deep-reset",
    number: "02",
    category: "Wellness Journeys",
    title: "Deep Reset",
    shortDescription:
      "A grounding combination of focused massage and nourishing body care for days when you need to truly reset.",
    description:
      "Created for guests carrying the weight of a demanding week, Deep Reset brings together focused bodywork and a renewing body ritual. The sequence is designed to create a slower rhythm while giving the body thoughtful, unhurried attention.",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1500&q=85",
    duration: "Approx. 2.5 hours",
    treatmentSlugs: ["deep-tissue-massage", "silk-and-stone"],
    inclusions: [
      "Welcome ritual",
      "Deep Tissue Massage",
      "Silk & Stone body ritual",
      "Restorative tea",
    ],
    featured: true,
  },
  {
    slug: "glow-and-restore",
    number: "03",
    category: "Beauty Rituals",
    title: "Glow & Restore",
    shortDescription:
      "A graceful beauty-focused escape combining facial renewal, restorative massage and considered finishing care.",
    description:
      "A balanced ritual for guests who want to leave feeling refreshed from head to toe. Facial care and restorative bodywork come together with a quiet finishing ritual, creating an experience centred around nourishment, softness and renewal.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1500&q=85",
    duration: "Approx. 2.5 hours",
    treatmentSlugs: ["velloria-glow-facial", "restorative-massage"],
    inclusions: [
      "Welcome ritual",
      "Velloria Glow facial",
      "Restorative Massage",
      "Hands & Feet finishing ritual",
    ],
    featured: true,
  },
  {
    slug: "velloria-day-retreat",
    number: "04",
    category: "Wellness Journeys",
    title: "The Velloria Day Retreat",
    shortDescription:
      "A fuller day of restoration bringing together bodywork, facial care, body ritual and peaceful restorative pauses.",
    description:
      "The Velloria Day Retreat is an extended invitation to disconnect from the day's demands. A carefully paced sequence of treatments gives you time for bodywork, facial care and nourishing body rituals, with quiet space between experiences so the day never feels rushed.",
    image:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1500&q=85",
    duration: "Approx. 4.5 hours",
    treatmentSlugs: [
      "restorative-massage",
      "velloria-glow-facial",
      "silk-and-stone",
      "hands-and-feet-ritual",
    ],
    inclusions: [
      "Welcome ritual",
      "Restorative Massage",
      "Velloria Glow facial",
      "Silk & Stone body ritual",
      "Hands & Feet finishing ritual",
      "Restorative tea",
    ],
    featured: true,
  },
];

export const featuredPackages = packages.filter(
  (spaPackage) => spaPackage.featured,
);

export function getPackageBySlug(slug: string) {
  return packages.find((spaPackage) => spaPackage.slug === slug);
}
