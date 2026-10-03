export type TeamMember = {
  name: string;
  role: string;
  experience: string;
  description: string;
  specialties: string[];
};

export const teamMembers = [
  {
    name: "Amara",
    role: "Lead Deep Tissue & Hot Stone",
    experience: "8 years",
    description:
      "Amara trained in Mombasa and Dubai. Guests book her for stubborn shoulder and lower-back tension with basalt hot stone work.",
    specialties: ["Deep Tissue", "Hot Stone", "Sports"],
  },
  {
    name: "Sarah",
    role: "Aromatherapy & Swedish",
    experience: "6 years",
    description:
      "Sarah blends her own oils and is known for a slow Swedish and full body pace that unwinds travel fatigue and late nights.",
    specialties: ["Swedish", "Aromatherapy", "Couples"],
  },
  {
    name: "Zuri",
    role: "Tantra & Full Body",
    experience: "7 years",
    description:
      "Zuri brings an intuitive approach to tantra and full body sessions, guiding guests into deep rest with precise pressure.",
    specialties: ["Tantra", "Full Body", "Relaxation"],
  },
  {
    name: "Nia",
    role: "Couples & Four Hands",
    experience: "5 years",
    description:
      "Nia coordinates mirrored four-hands and couples sessions with quiet precision for two guests in one suite.",
    specialties: ["Couples", "Four Hands", "Swedish"],
  },
  {
    name: "Aaliyah",
    role: "Hot Stone & Back Care",
    experience: "6 years",
    description:
      "Aaliyah is the go-to therapist for corporate back and neck work and heated stone therapy after long flights.",
    specialties: ["Hot Stone", "Back & Neck", "Deep Tissue"],
  },
  {
    name: "Imani",
    role: "Body to Body & Relaxation",
    experience: "5 years",
    description:
      "Imani specialises in warm oil body-to-body and full-body relaxation with a confident, unhurried touch.",
    specialties: ["Body to Body", "Full Body", "Relaxation"],
  },
  {
    name: "Kitty Hunters",
    role: "Full Body & Relaxation",
    experience: "5 years",
    description:
      "Kitty brings a calm, attentive rhythm to full-body sessions designed around deep relaxation and unhurried restoration.",
    specialties: ["Full Body", "Relaxation", "Wellness"],
  },
  {
    name: "Kendra",
    role: "Swedish & Couples",
    experience: "7 years",
    description:
      "Kendra leads evening couples bookings and classic Swedish flow from arrival to the final stretch.",
    specialties: ["Swedish", "Couples", "Aromatherapy"],
  },
  {
    name: "Maya",
    role: "Deep Tissue & Recovery",
    experience: "6 years",
    description:
      "Maya focuses on firm deep tissue and post-travel recovery for guests who want real pressure without a rushed session.",
    specialties: ["Deep Tissue", "Sports", "Back & Neck"],
  },
  {
    name: "Tasha",
    role: "Aromatherapy & Full Body",
    experience: "5 years",
    description:
      "Tasha pairs warm citrus and lavender blends with long full-body strokes and gentle stretching.",
    specialties: ["Aromatherapy", "Full Body", "Relaxation"],
  },
  {
    name: "Lulu",
    role: "Hot Stone & Couples",
    experience: "7 years",
    description:
      "Lulu hosts evening hot stone and couples suites with heated basalt work and a calm, attentive pace.",
    specialties: ["Hot Stone", "Couples", "Swedish"],
  },
  {
    name: "Sahara",
    role: "Aromatherapy & Wellness",
    experience: "6 years",
    description:
      "Sahara brings a gentle wellness-focused approach, pairing aromatic rituals with flowing treatments and restorative relaxation.",
    specialties: ["Aromatherapy", "Wellness", "Relaxation"],
  },
] satisfies TeamMember[];
