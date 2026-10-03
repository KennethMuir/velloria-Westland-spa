import { pagePhotography } from "@/data/photography";

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
    image: pagePhotography.gallery[0].src,
    featured: true,
  },
  {
    id: "gallery-02",
    title: "Restorative stillness",
    category: "Wellness",
    description:
      "Soft textures and warm tones create space for a slower rhythm.",
    image: pagePhotography.gallery[1].src,
  },
  {
    id: "gallery-03",
    title: "The treatment ritual",
    category: "Treatments",
    description:
      "A glimpse into the tactile world of massage and restorative care.",
    image: pagePhotography.gallery[2].src,
  },
  {
    id: "gallery-04",
    title: "Skin in focus",
    category: "Beauty",
    description:
      "A considered moment inspired by Velloria's facial rituals.",
    image: pagePhotography.gallery[3].src,
  },
  {
    id: "gallery-05",
    title: "Warm touch",
    category: "Rituals",
    description:
      "Natural textures and gentle warmth evoke the slower side of wellness.",
    image: pagePhotography.gallery[4].src,
  },
  {
    id: "gallery-06",
    title: "A softer pace",
    category: "The Space",
    description:
      "An atmosphere designed to help the outside world feel a little further away.",
    image: pagePhotography.gallery[5].src,
  },
  {
    id: "gallery-07",
    title: "Restore and renew",
    category: "Wellness",
    description:
      "A visual expression of the restorative philosophy behind the Velloria experience.",
    image: pagePhotography.gallery[6].src,
  },
  {
    id: "gallery-08",
    title: "The details matter",
    category: "Rituals",
    description:
      "Small sensory details become part of a more intentional visit.",
    image: pagePhotography.gallery[7].src,
  },
  {
    id: "gallery-09",
    title: "A quiet glow",
    category: "Beauty",
    description:
      "A serene visual inspired by the feeling of emerging refreshed.",
    image: pagePhotography.gallery[8].src,
  },
  {
    id: "gallery-10",
    title: "Come back to yourself",
    category: "The Space",
    description:
      "A final invitation to slow down, settle in and make the moment yours.",
    image: pagePhotography.gallery[9].src,
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



