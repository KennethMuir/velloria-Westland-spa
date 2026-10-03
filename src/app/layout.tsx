import type { Metadata } from "next";
import "./globals.css";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

export const metadata: Metadata = {
  title: {
    default: "Velloria Westland Spa | Spa & Massage in Westlands, Nairobi",
    template: "%s | Velloria Westland Spa",
  },
  description:
    "Velloria Westland Spa in Westlands, Nairobi offers restorative massage, deep tissue massage, facials, body rituals, beauty treatments and personalised wellness experiences.",
  keywords: [
    "Velloria Westland Spa",
    "spa in Westlands",
    "spa in Nairobi",
    "spa Kenya",
    "spas in Nairobi",
    "Westlands spa",
    "massage Westlands",
    "massage Nairobi",
    "massage Kenya",
    "massage places in Nairobi",
    "massage places in Kenya",
    "deep tissue massage Nairobi",
    "restorative massage Nairobi",
    "full body massage Nairobi",
    "facial Nairobi",
    "facial treatments Nairobi",
    "body treatments Nairobi",
    "wellness spa Nairobi",
    "day spa Nairobi",
    "luxury spa Nairobi",
    "spa packages Nairobi",
    "spa for tourists in Nairobi",
    "wellness experience Nairobi",
  ],
  authors: [{ name: "Velloria Westland Spa" }],
  creator: "Velloria Westland Spa",
  publisher: "Velloria Westland Spa",
  formatDetection: {
    telephone: true,
    address: false,
    email: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Velloria Westland Spa",
    title: "Velloria Westland Spa | Spa & Massage in Westlands, Nairobi",
    description:
      "A refined spa and wellness destination in Westlands, Nairobi offering restorative massage, deep tissue massage, facials, body rituals and beauty treatments.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velloria Westland Spa | Spa & Massage in Westlands, Nairobi",
    description:
      "Spa, massage, facials, body rituals and wellness experiences at Velloria Westland Spa in Westlands, Nairobi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
