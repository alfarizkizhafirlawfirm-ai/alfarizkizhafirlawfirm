import type { Metadata } from "next";
import { Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://alfarizkizhafirlaw.netlify.app'),
  title: {
    default: "Al Farizki & Zhafir Law Firm — Firma Hukum di Malang",
    template: "%s | Al Farizki & Zhafir Law Firm"
  },
  description: "Firma Hukum Berbasis di Malang, Melayani Seluruh Indonesia, menyediakan layanan litigasi dan non-litigasi dengan pendekatan preventif, profesional, dan berintegritas.",
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName: 'Al Farizki & Zhafir Law Firm',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${workSans.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
