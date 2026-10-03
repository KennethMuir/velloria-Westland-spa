import { spaPhotography } from "@/data/photography";

export type TreatmentDuration = {
  label: string;
  minutes: number;
  price: string;
};

export type Treatment = {
  slug: string;
  number: string;
  category: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  durations: TreatmentDuration[];
  benefits: string[];
  featured: boolean;
};

export const treatmentCategories = [
  "All",
  "Massage",
  "Facials",
  "Body Rituals",
  "Wellness",
  "Beauty",
] as const;

export const treatments: Treatment[] = [
  {
    slug: "restorative-massage",
    number: "01",
    category: "Massage",
    title: "Restorative Massage",
    shortDescription:
      "Unhurried bodywork designed to release tension, soften the senses and leave you feeling grounded.",
    description:
      "A deeply calming massage experience created for moments when your body needs space to release. Long, flowing movements and considered pressure encourage relaxation while helping tired muscles feel lighter and more at ease.",
    image: "https://images.pexels.com/photos/19695972/pexels-photo-19695972.jpeg",
    durations: [
      { label: "60 min", minutes: 60, price: "On request" },
      { label: "90 min", minutes: 90, price: "On request" },
    ],
    benefits: [
      "Encourages deep relaxation",
      "Helps ease everyday muscular tension",
      "Creates a calmer sense of wellbeing",
    ],
    featured: true,
  },
  {
    slug: "deep-tissue-massage",
    number: "02",
    category: "Massage",
    title: "Deep Tissue Massage",
    shortDescription:
      "Focused bodywork using deliberate pressure to address areas of persistent muscular tension.",
    description:
      "A more focused massage for guests seeking targeted attention on areas that carry stress and muscular tightness. Your therapist adjusts pressure and technique around your comfort throughout the treatment.",
    image: spaPhotography.deepTissue.src,
    durations: [
      { label: "60 min", minutes: 60, price: "On request" },
      { label: "90 min", minutes: 90, price: "On request" },
    ],
    benefits: [
      "Targets areas of muscular tension",
      "Supports post-workday relaxation",
      "Personalised pressure and technique",
    ],
    featured: false,
  },
  {
    slug: "velloria-glow-facial",
    number: "03",
    category: "Facials",
    title: "Velloria Glow",
    shortDescription:
      "A refined facial ritual combining cleansing, nourishment and gentle touch for beautifully refreshed skin.",
    description:
      "A restorative facial experience centred around clean, comfortable and luminous-looking skin. The ritual combines thoughtful preparation with nourishing care and soothing touch for a fresh, renewed finish.",
    image: spaPhotography.facial.src,
    durations: [
      { label: "60 min", minutes: 60, price: "On request" },
    ],
    benefits: [
      "Cleanses and refreshes the skin",
      "Supports a nourished appearance",
      "Leaves the complexion looking refreshed",
    ],
    featured: true,
  },
  {
    slug: "renewal-facial",
    number: "04",
    category: "Facials",
    title: "Renewal Facial",
    shortDescription:
      "A considered facial treatment created to refresh tired-looking skin and restore a sense of radiance.",
    description:
      "A gentle renewal ritual for skin that needs a little more attention. The treatment focuses on cleansing, hydration and restorative care while keeping the experience calm and unhurried.",
    image: spaPhotography.facialClose.src,
    durations: [
      { label: "60 min", minutes: 60, price: "On request" },
      { label: "90 min", minutes: 90, price: "On request" },
    ],
    benefits: [
      "Refreshes tired-looking skin",
      "Supports hydration",
      "Encourages a rested appearance",
    ],
    featured: false,
  },
  {
    slug: "silk-and-stone",
    number: "05",
    category: "Body Rituals",
    title: "Silk & Stone",
    shortDescription:
      "An indulgent full-body ritual bringing together exfoliation, massage and deeply nourishing care.",
    description:
      "A complete body ritual designed as an invitation to slow down. Exfoliation prepares the skin, flowing massage encourages relaxation and nourishing care leaves the body feeling soft, cared for and renewed.",
    image: "https://images.unsplash.com/photo-1701917084224-cb59235d1d69?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    durations: [
      { label: "90 min", minutes: 90, price: "On request" },
    ],
    benefits: [
      "Gently exfoliates the skin",
      "Combines body care with massage",
      "Leaves skin feeling soft and nourished",
    ],
    featured: true,
  },
  {
    slug: "body-polish-ritual",
    number: "06",
    category: "Body Rituals",
    title: "Body Polish Ritual",
    shortDescription:
      "A renewing exfoliation ritual created to leave the skin smooth, supple and beautifully refreshed.",
    description:
      "A focused body ritual centred on gentle exfoliation and nourishing aftercare. It is designed for guests looking for a fresh, polished feeling without the longer sequence of a full body ritual.",
    image: spaPhotography.wellness.src,
    durations: [
      { label: "60 min", minutes: 60, price: "On request" },
    ],
    benefits: [
      "Gently buffs away surface buildup",
      "Supports smoother-feeling skin",
      "Finishes with nourishing body care",
    ],
    featured: false,
  },
  {
    slug: "mindful-wellness-ritual",
    number: "07",
    category: "Wellness",
    title: "Mindful Wellness Ritual",
    shortDescription:
      "A slower experience combining calming touch and restorative moments for body and mind.",
    description:
      "A deliberately unhurried wellness experience for days when you need to step away from the noise. The ritual brings together calming bodywork and quiet restorative moments in a sequence designed around relaxation.",
    image: spaPhotography.relaxation.src,
    durations: [
      { label: "90 min", minutes: 90, price: "On request" },
    ],
    benefits: [
      "Encourages a slower pace",
      "Supports relaxation and restoration",
      "Creates space to disconnect from daily demands",
    ],
    featured: false,
  },
  {
    slug: "hands-and-feet-ritual",
    number: "08",
    category: "Beauty",
    title: "Hands & Feet Ritual",
    shortDescription:
      "A soothing beauty ritual giving hands and feet thoughtful care, hydration and gentle attention.",
    description:
      "A simple, restorative beauty ritual focused on two areas that often carry the day's fatigue. Gentle care, hydration and massage create a polished yet deeply relaxing finishing experience.",
    image: spaPhotography.details.src,
    durations: [
      { label: "45 min", minutes: 45, price: "On request" },
      { label: "60 min", minutes: 60, price: "On request" },
    ],
    benefits: [
      "Provides focused care for hands and feet",
      "Supports soft, hydrated skin",
      "Adds a relaxing finishing ritual",
    ],
    featured: false,
  },
];

export const featuredTreatments = treatments.filter(
  (treatment) => treatment.featured,
);

export function getTreatmentBySlug(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}





