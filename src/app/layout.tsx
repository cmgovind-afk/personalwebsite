import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Ticker from "@/components/Ticker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chandramauli Govind",
  description:
    "I build data products that people actually use. 16 years turning complex analytics into decisions — at Maersk, Allscripts, BT, and beyond.",
  openGraph: {
    title: "Chandramauli Govind",
    description:
      "BI & analytics leader at Maersk. $59M revenue engine. 10K+ users. 16 years making data work for people.",
    type: "website",
  },
  twitter: {
    title: "Chandramauli Govind",
    description:
      "BI & analytics leader at Maersk. $59M revenue engine. 10K+ users. 16 years making data work for people.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#F9F9F7] text-[#111] antialiased">
        <Ticker />
        {/* pt-9 = 36px to clear the ticker height */}
        <div className="pt-9">{children}</div>
      </body>
    </html>
  );
}
