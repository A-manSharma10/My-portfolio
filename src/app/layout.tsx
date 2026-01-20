import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aman Sharma | Full-Stack Developer",
  description: "Portfolio of Aman Sharma, a Full-stack developer specializing in MERN/Next.js and AI integration.",
  openGraph: {
    title: "Aman Sharma | Full-Stack Developer",
    description: "Building production-grade applications with modern web technologies and AI.",
    url: "https://amansharma.dev", // Placeholder URL
    siteName: "Aman Sharma Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Sharma | Full-Stack Developer",
    description: "Building production-grade applications with modern web technologies and AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
