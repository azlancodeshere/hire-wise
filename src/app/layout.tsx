import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0b2545",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://surhires.vercel.app"),
  title: {
    default: "Surhires — Hire faster, find work that fits",
    template: "%s · Surhires",
  },
  description:
    "Surhires connects employers with vetted candidates and helps job seekers find roles that match their skills. Post a job or browse open positions today.",
  openGraph: {
    type: "website",
    siteName: "Surhires",
    title: "Surhires — Hire faster, find work that fits",
    description:
      "Surhires connects employers with vetted candidates and helps job seekers find roles that match their skills.",
    url: "https://surhires.vercel.app",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Surhires — Hire faster, find work that fits",
    description:
      "Connect with vetted candidates or find a role that matches your skills.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      style={{ colorScheme: "light" }}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-warm-50 text-navy-950">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-3 focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
