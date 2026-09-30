import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE, FAQ } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "لافيستا سيتي العاصمة الإدارية | فلل وتاون هاوس جاهزة للسكن بمقدم 10%",
  description:
    "لافيستا سيتي العاصمة الإدارية R4: تاون هاوس وتوين هاوس وفلل مستقلة جاهزة للسكن ومتشطبة بالكامل، بمقدم يبدأ من 10% وتقسيط على 8 سنين وخصم كاش 22.5%.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "لافيستا سيتي العاصمة الإدارية — وحدات جاهزة للسكن",
    description: "تاون هاوس من 30 مليون، مقدم 10% وتقسيط 8 سنين. متشطب بالكامل.",
    images: ["/og.jpg"],
    locale: "ar_EG",
    type: "website",
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#15302a", width: "device-width", initialScale: 1 };

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%2315302a%22/><text x=%2250%22 y=%2268%22 font-size=%2252%22 text-anchor=%22middle%22 fill=%22%23d8c29c%22 font-family=%22serif%22>LV</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap"
        />
        {/* Google Ads — gtag */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gtagId}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${SITE.gtagId}');`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
