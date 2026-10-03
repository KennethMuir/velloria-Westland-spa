import { pagePhotography } from "@/data/photography";

export const homeImages = {
  hero: pagePhotography.home.hero.src,
  massage: pagePhotography.home.massage.src,
  facial: pagePhotography.home.facial.src,
  body: pagePhotography.home.body.src,
  package: pagePhotography.home.package.src,
  interior: pagePhotography.home.interior.src,
  detail: pagePhotography.home.detail.src,
  galleryReception: pagePhotography.home.homeGallery.reception.src,
  galleryWellness: pagePhotography.home.homeGallery.wellness.src,
  galleryPortrait: pagePhotography.home.homeGallery.portrait.src,
  galleryQuiet: pagePhotography.home.homeGallery.quiet.src,
} as const;

export const treatmentPreview = [
  {
    number: "01",
    category: "Massage",
    title: "Restorative Massage",
    description:
      "Unhurried bodywork designed to release tension, soften the senses and leave you feeling grounded.",
    duration: "60 · 90 min",
    image: homeImages.massage,
  },
  {
    number: "02",
    category: "Facial",
    title: "Velloria Glow",
    description:
      "A refined facial ritual combining cleansing, nourishment and gentle touch for beautifully refreshed skin.",
    duration: "60 min",
    image: homeImages.facial,
  },
  {
    number: "03",
    category: "Body Ritual",
    title: "Silk & Stone",
    description:
      "An indulgent full-body ritual bringing together exfoliation, massage and deeply nourishing care.",
    duration: "90 min",
    image: homeImages.body,
  },
] as const;

export const experienceCards = [
  {
    number: "01",
    title: "Restore",
    description:
      "Thoughtful treatments designed to help the body release, settle and breathe again.",
  },
  {
    number: "02",
    title: "Renew",
    description:
      "Beauty and body rituals created around how you want to feel when you leave.",
  },
  {
    number: "03",
    title: "Return",
    description:
      "A quieter mind, a softer body and a renewed connection with yourself.",
  },
] as const;

export const packagePreview = {
  eyebrow: "Signature Escape",
  title: "An afternoon made entirely for you.",
  description:
    "Step away from the pace of Nairobi and settle into a considered sequence of treatments, refreshments and restorative stillness.",
  image: homeImages.package,
  inclusions: [
    "Welcome ritual",
    "Full-body massage",
    "Signature facial",
    "Restorative tea",
  ],
} as const;

export const testimonials = [
  {
    quote:
      "The atmosphere immediately made me slow down. Every detail felt intentional, warm and beautifully considered.",
    name: "Amina",
    detail: "Velloria guest",
  },
  {
    quote:
      "It feels like a little escape in the middle of Westlands. The treatment was exceptional and the whole experience was effortless.",
    name: "Njeri",
    detail: "Velloria guest",
  },
  {
    quote:
      "From the welcome to the final cup of tea, everything felt calm and personal. I left feeling completely renewed.",
    name: "Wanjiku",
    detail: "Velloria guest",
  },
] as const;

export const galleryItems = [
  {
    label: "The reception",
    image: homeImages.galleryReception,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    label: "Wellness ritual",
    image: homeImages.galleryWellness,
    className: "md:row-span-2",
  },
  {
    label: "Quiet portrait",
    image: homeImages.galleryPortrait,
    className: "",
  },
  {
    label: "A moment to breathe",
    image: homeImages.galleryQuiet,
    className: "",
  },
] as const;

