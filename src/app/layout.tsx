import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://globixstech.com"),
  title: {
    default: "Globixs Technology Solutions | IT Staffing, Job Marketing & AI Services",
    template: "%s | Globixs Technology Solutions",
  },
  description:
    "Seattle-based technology partner running three service lines: IT staffing for companies (contract and full-time engineers across cloud, data, AI/ML, cybersecurity, and software), full-time job marketing for candidates, and AI services for businesses — AI receptionists, chatbots, lead generation, automation, review management, websites, and dashboards.",
  keywords: [
    "IT staffing Seattle",
    "technology staffing Seattle",
    "contract to hire engineers",
    "job marketing service",
    "H1B OPT job placement Seattle",
    "AI receptionist",
    "AI services for business",
    "business website design Seattle",
  ],
  authors: [{ name: "Globixs Technology Solutions" }],
  creator: "Globixs Technology Solutions",
  publisher: "Globixs Technology Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://globixstech.com",
    siteName: "Globixs Technology Solutions",
    title: "Globixs Technology Solutions | IT Staffing, Job Marketing & AI Services",
    description:
      "Staffing, job marketing, and AI services — one technology partner. We place pre-vetted engineers in contract and full-time roles, market job seekers into their next position, and build AI-powered growth systems for businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Globixs Technology Solutions — IT Staffing, Job Marketing & AI Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Globixs Technology Solutions | IT Staffing, Job Marketing & AI Services",
    description:
      "Staffing, job marketing, and AI services — one technology partner. We place pre-vetted engineers in contract and full-time roles, market job seekers into their next position, and build AI-powered growth systems for businesses.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
