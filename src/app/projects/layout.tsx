import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


 const metadata: Metadata = {
  title: "Featured Projects| Full-Stack Web Developer & AI Enthusiast",
  description:
    "These are my featured projects — a testament to my skills as a Full-Stack Web Developer and AI enthusiast. Explore innovative applications like Bagpack Trips, Stegano, and the AI Interview Assistant that showcase my expertise in Next.js, TypeScript, MongoDB, and AI integration.",
  keywords: [
    "Developer Portfolio",
    "Full Stack projects",
    "Next.js projects",
    "TypeScript projects",
    "AI Developer projects",
    "React projects",
    "Web Developer Portfolio",
    "MERN Stack",
    "Software Engineer",
  ],
  authors: [{ name: "Sanket Mane", url: "https://sanketmane.vercel.app" }],
  creator: "Sanket Mane",
  publisher: "Sanket Mane",
  metadataBase: new URL("https://sanketmane.vercel.app"), 
  alternates: {
    canonical: "https://sanketmane.vercel.app",
  },
  openGraph: {
    title: "Featured Projects| Full-Stack Web Developer & AI Enthusiast",
    description:
      "These are my featured projects — a testament to my skills as a Full-Stack Web Developer and AI enthusiast. Explore innovative applications like Bagpack Trips, Stegano, and the AI Interview Assistant that showcase my expertise in Next.js, TypeScript, MongoDB, and AI integration.",
    url: "https://sanketmane.vercel.app",
    siteName: "Sanket Mane Portfolio",
    images: [
      {
        url: "https://sanketmane.vercel.app/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Sanket Mane Portfolio - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other: {
    "google-site-verification": "Wq1s61-3u7ZcEq0h4NnlrCvGqlt4yXWWs7IVsQKajSg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black dark  m-0 p-0`} > 
        {children}
      </body>
    </html>
  );
}
