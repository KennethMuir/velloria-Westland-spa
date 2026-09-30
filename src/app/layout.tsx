import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Velloria Westland Spa | Luxury Wellness in Nairobi",
    template: "%s | Velloria Westland Spa",
  },
  description:
    "Velloria Westland Spa is a refined wellness destination in Westlands, Nairobi, offering restorative massages, beauty treatments, spa rituals and personalized relaxation experiences.",
  keywords: [
    "Velloria Westland Spa",
    "spa in Westlands",
    "massage Westlands Nairobi",
    "luxury spa Nairobi",
    "wellness Nairobi",
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
    title: "Velloria Westland Spa | Luxury Wellness in Nairobi",
    description:
      "A refined wellness destination in Westlands, Nairobi, offering restorative treatments, spa rituals and personalized relaxation experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velloria Westland Spa | Luxury Wellness in Nairobi",
    description:
      "A refined wellness destination in Westlands, Nairobi, offering restorative treatments, spa rituals and personalized relaxation experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
