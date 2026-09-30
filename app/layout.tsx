import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { site, fmt, minPrice } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "لافيستا سيتي العاصمة الإدارية | فلل وتاون هاوس جاهزة للسكن بمقدم 10%",
  description: `لافيستا سيتي العاصمة الإدارية R4 من لافيستا للتطوير العقاري. تاون هاوس وتوين هاوس وفلل مستقلة جاهزة للسكن ومتشطبة بالكامل تبدأ من ${fmt(
    minPrice
  )} جنيه، مقدم 10% وتقسيط 8 سنين وخصم كاش 22.5%.`,
  keywords: [
    "لافيستا سيتي",
    "La Vista City",
    "لافيستا العاصمة الإدارية",
    "كمبوند لافيستا سيتي",
    "فلل العاصمة الإدارية",
    "تاون هاوس العاصمة الإدارية",
    "لافيستا للتطوير العقاري",
    "فلل جاهزة للسكن",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: site.url,
    siteName: site.project,
    title: "لافيستا سيتي العاصمة الإدارية — جاهز للسكن",
    description:
      "تاون هاوس وتوين هاوس وفلل مستقلة متشطبة بالكامل. مقدم 10% وتقسيط 8 سنين.",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "لافيستا سيتي العاصمة الإدارية",
    description: "فلل وتاون هاوس جاهزة للسكن. مقدم 10% وتقسيط 8 سنين.",
    images: ["/images/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#063d4c",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      name: site.agency,
      url: site.url,
      telephone: site.phoneIntl,
      email: site.email,
      areaServed: "New Administrative Capital, Egypt",
      address: {
        "@type": "PostalAddress",
        addressLocality: "العاصمة الإدارية الجديدة",
        addressRegion: "القاهرة",
        addressCountry: "EG",
      },
    },
    {
      "@type": "Place",
      name: "La Vista City — New Capital",
      description:
        "كمبوند فلل من لافيستا للتطوير العقاري على حوالي 910 فدان في الحي السكني R4 بالعاصمة الإدارية الجديدة.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "الحي السكني R4، العاصمة الإدارية الجديدة",
        addressRegion: "القاهرة",
        addressCountry: "EG",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;600;700;800&family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=Archivo:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}

        {/* Google Ads — ضع الـ tag ID في lib/site.ts قبل النشر */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gtag}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.gtag}');`}
        </Script>
      </body>
    </html>
  );
}
