import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aerosissor | Long-Form Gaming Video Editor",
  description: "Clean, story-driven edits focused on pacing, immersion, and viewer retention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen bg-[#0a0a0a] text-white selection:bg-brand selection:text-white flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
