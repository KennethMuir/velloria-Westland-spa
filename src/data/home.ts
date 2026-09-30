export const homeImages = {
  hero:
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85",
  massage:
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85",
  facial:
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
  body:
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=85",
  package:
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  interior:
    "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1400&q=85",
  detail:
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=85",
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
    image: homeImages.interior,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    label: "Treatment room",
    image: homeImages.massage,
    className: "md:row-span-2",
  },
  {
    label: "Wellness ritual",
    image: homeImages.detail,
    className: "",
  },
  {
    label: "Quiet details",
    image: homeImages.facial,
    className: "",
  },
] as const;
