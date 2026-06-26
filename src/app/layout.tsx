import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { Navbar } from "@/components/Navbar";
import { RouteFade } from "@/components/RouteFade";
import { JSONLD, SITE_DESC, SITE_NAME } from "@/lib/metadata";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESC,
  authors: [{ name: "Avi Sanan" }],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESC,
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
        />
      </head>
      <body className="bg-[#060B13] text-[#FDFCFB]">
        <Navbar />
        <main className="pt-20 pb-16 lg:pb-0 min-h-dvh bg-[#060B13]">
          <RouteFade>{children}</RouteFade>
        </main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
