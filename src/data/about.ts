export type AboutPillar = {
  number: string;
  title: string;
  description: string;
};

export const aboutPage = {
  eyebrow: "The Velloria story",
  title: "A quieter way to return to yourself.",
  introduction:
    "Velloria Westland Spa is imagined as a sanctuary from the pace of everyday life — a place where thoughtful treatments, warm hospitality and restorative stillness come together.",
  philosophy: {
    eyebrow: "Our philosophy",
    title: "Wellness should feel unhurried.",
    paragraphs: [
      "We believe the most restorative experiences begin when there is room to slow down. Velloria is designed around that simple idea: give yourself permission to pause, breathe and be cared for.",
      "From the treatment itself to the moments before and after it, every part of the experience is intended to feel considered. Nothing needs to be rushed. Nothing needs to compete for your attention.",
    ],
  },
  approach: {
    eyebrow: "The Velloria approach",
    title: "Thoughtful care, beautifully uncomplicated.",
    description:
      "Our experience brings together restorative rituals, considered surroundings and a personal approach to care, creating space for each guest to settle into their own rhythm.",
  },
  pillars: [
    {
      number: "01",
      title: "Restore",
      description:
        "Create space for the body to release tension and rediscover ease.",
    },
    {
      number: "02",
      title: "Reconnect",
      description:
        "Step away from the noise and return your attention to yourself.",
    },
    {
      number: "03",
      title: "Renew",
      description:
        "Leave feeling refreshed, grounded and ready to carry that feeling beyond the spa.",
    },
  ] satisfies AboutPillar[],
  closing: {
    eyebrow: "Your time at Velloria",
    title: "Come as you are. Leave a little lighter.",
    description:
      "Whether you have an afternoon to yourself or are marking a special occasion, Velloria is a place to pause and make the moment yours.",
  },
} as const;
