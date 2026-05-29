import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  title: "Chandramauli Govind — Senior Data Product Manager",
  description:
    "Senior BI & Data Product leader with 15.5+ years building analytics platforms at scale. Currently at A.P. Moller – Maersk, Copenhagen.",
  openGraph: {
    title: "Chandramauli Govind",
    description: "Senior Data Product Manager · BI & Analytics Leader · Maersk, Copenhagen",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#F9F9F7] text-[#111] antialiased">{children}</body>
    </html>
  );
}
