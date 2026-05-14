import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GTMScript from "@/components/GTMScript";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nahradaosb.cz"),
  title: {
    default: "Náhrada OSB desek | JSD P5 a HSD P7 konstrukční desky",
    template: "%s | nahradaosb.cz",
  },
  description:
    "Hledáte náhradu za OSB desky? Konstrukční desky JSD P5 a HSD P7 pro stavebnictví, podlahy, dřevostavby a obaly. Výrobce DDL Lukavec, distributor Kili s.r.o.",
  keywords: [
    "náhrada OSB desek",
    "JSD P5",
    "HSD P7",
    "konstrukční desky",
    "dřevotřísková deska stavba",
    "alternativa OSB",
    "desky pro dřevostavby",
    "podlahové desky",
    "DTD konstrukční deska",
    "DDL Lukavec",
  ],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://nahradaosb.cz",
    siteName: "nahradaosb.cz",
    title: "Náhrada OSB desek | JSD P5 a HSD P7",
    description:
      "Konstrukční desky JSD P5 a HSD P7 – moderní alternativa k OSB pro stavebnictví, podlahy a technické aplikace.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://nahradaosb.cz" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <GTMScript gtmId="GTM-NB5GQFH4" />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NB5GQFH4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
