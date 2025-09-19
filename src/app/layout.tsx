import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Xeven Solutions",
  description: "Deliver a single-page SaaS marketing site with a futuristic blue theme and clear CTAs.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}