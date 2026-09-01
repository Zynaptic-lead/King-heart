import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KING HEART — Graphics World | Graphic Designer & Visual Creative",
  description:
    "Official digital portfolio of King Heart Graphics World. Where creativity meets excellence in brand identity systems, 3D motion artwork, editorial publications, and visual architecture.",
  keywords: [
    "King Heart",
    "Graphics World",
    "Graphic Designer",
    "Visual Identity",
    "Brand Systems",
    "Art Direction",
    "3D Motion Graphics",
    "Editorial Design",
    "Portfolio",
  ],
  authors: [{ name: "King Heart Graphics World" }],
  openGraph: {
    title: "KING HEART — Graphics World | Graphic Designer & Visual Creative",
    description: "Where Creativity Meets Excellence. Bold visual identities and digital experiences.",
    url: "https://kingheartgraphics.com",
    siteName: "King Heart Graphics World",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KING HEART — Graphics World | Graphic Designer & Visual Creative",
    description: "Where Creativity Meets Excellence. Bold visual identities and digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="bg-background text-white antialiased selection:bg-brand-blue/30 selection:text-white overflow-x-hidden min-h-screen flex flex-col justify-between">
        <SmoothScrollProvider>
          <CustomCursor />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
