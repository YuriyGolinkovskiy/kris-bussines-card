import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Кристина Лютик — кинолог с душой",
  description: "Профессиональный кинолог. Воспитание собак, коррекция поведения, онлайн-консультации.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${playfair.variable} ${inter.variable} font-body antialiased bg-background text-text-primary`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}