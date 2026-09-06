import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const handwriting = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "FizzyIcons — A modern icon library for builders",
  description: "Clean, consistent and flexible icons for Web, React, React Native and beyond. Open source, customizable, and high quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${handwriting.variable}`}>
      <body className="bg-brand-bg text-brand-dark font-sans antialiased selection:bg-brand-yellow selection:text-black min-h-screen">
        {children}
      </body>
    </html>
  );
}

