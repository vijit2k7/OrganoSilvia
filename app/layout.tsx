import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://organosilvia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "OrganoSilvia | Organic, Natural, Chemical-Free Skincare",
  description:
    "Discover OrganoSilvia organic, natural, chemical-free skincare, including SPF 50++ sunscreen, organic face wash, Shata Dhauta Ghrita face cream, serum, moisturizers, face oil, and day and night creams.",
  keywords: [
    "organic skincare",
    "chemical free skincare",
    "natural skincare",
    "sunscreen for Indian skin",
    "spf 50++ sunscreen",
    "organic sunscreen",
    "organic face wash",
    "shata dhauta ghrita face cream",
    "ayurveda skincare",
    "daily face wash",
    "skincare routine",
    "lightweight sunscreen",
    "OrganoSilvia",
    "natural skincare India",
  ],
  openGraph: {
    title: "OrganoSilvia | Organic, Natural, Chemical-Free Skincare",
    description:
      "Premium organic skincare with SPF 50++ sunscreen, organic face wash, Shata Dhauta Ghrita face cream, and a broader natural skincare range crafted for Indian skin.",
    url: siteUrl,
    siteName: "OrganoSilvia",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "OrganoSilvia premium natural skincare",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrganoSilvia | Organic, Natural, Chemical-Free Skincare",
    description:
      "Organic SPF 50++ sunscreen, organic face wash, Shata Dhauta Ghrita cream, and a broader natural skincare range for Indian skin.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
