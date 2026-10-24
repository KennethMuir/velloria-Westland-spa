import { siteConfig } from "@/data/site";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    name: siteConfig.name,
    description:
      "Velloria Westland Spa in Westlands, Nairobi offers restorative massage, deep tissue massage, facials and spa treatments.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Stima Lane",
      addressLocality: "Westlands",
      addressRegion: "Nairobi",
      addressCountry: "KE",
    },
    telephone: siteConfig.whatsapp,
    areaServed: [
      {
        "@type": "Place",
        name: "Westlands",
      },
      {
        "@type": "City",
        name: "Nairobi",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

