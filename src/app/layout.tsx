import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#060708",
};

export const metadata: Metadata = {
  title: "HUMAN TALES FILMS // Cinematic Production Studio",
  description:
    "HUMAN TALES FILMS is an independent cinematic production company specializing in commercials, brand narrative manifestos, and high-fidelity visuals.",
  keywords: [
    "cinematography",
    "film production",
    "commercials",
    "director roster",
    "VFX",
    "brand films",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
