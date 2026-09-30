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
