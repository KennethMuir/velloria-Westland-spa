export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const galleryItems = [
  {
    id: "gallery-01",
    title: "A moment to exhale",
    category: "The Space",
    description:
      "A quiet visual introduction to the considered atmosphere of Velloria.",
    image:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1400&q=85",
    featured: true,
  },
  {
    id: "gallery-02",
    title: "Restorative stillness",
    category: "Wellness",
    description:
      "Soft textures and warm tones create space for a slower rhythm.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "gallery-03",
    title: "The treatment ritual",
    category: "Treatments",
    description:
      "A glimpse into the tactile world of massage and restorative care.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "gallery-04",
    title: "Skin in focus",
    category: "Beauty",
    description:
      "A considered moment inspired by Velloria's facial rituals.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "gallery-05",
    title: "Warm touch",
    category: "Rituals",
    description:
      "Natural textures and gentle warmth evoke the slower side of wellness.",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "gallery-06",
    title: "A softer pace",
    category: "The Space",
    description:
      "An atmosphere designed to help the outside world feel a little further away.",
    image:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "gallery-07",
    title: "Restore and renew",
    category: "Wellness",
    description:
      "A visual expression of the restorative philosophy behind the Velloria experience.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "gallery-08",
    title: "The details matter",
    category: "Rituals",
    description:
      "Small sensory details become part of a more intentional visit.",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "gallery-09",
    title: "A quiet glow",
    category: "Beauty",
    description:
      "A serene visual inspired by the feeling of emerging refreshed.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "gallery-10",
    title: "Come back to yourself",
    category: "The Space",
    description:
      "A final invitation to slow down, settle in and make the moment yours.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85",
    featured: true,
  },
] satisfies GalleryItem[];

export const galleryCategories = [
  "All",
  "The Space",
  "Treatments",
  "Wellness",
  "Beauty",
  "Rituals",
] as const;
