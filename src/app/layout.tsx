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
    default: "Globixs Technology Solutions | AI-Powered IT Staffing & Consultancy",
    template: "%s | Globixs Technology Solutions",
  },
  description:
    "Globixs helps teams hire and deliver faster through AI-augmented staffing, consulting, and automation. Based in Seattle, WA. We also power MCT PathAI for student career automation.",
  keywords: [
    "IT staffing Seattle",
    "AI staffing agency",
    "IT consultancy",
    "F-1 OPT jobs",
    "H-1B staffing",
    "MCT PathAI",
    "Globixs Technology Solutions",
    "technology consulting Seattle",
  ],
  authors: [{ name: "Globixs Technology Solutions" }],
  creator: "Globixs Technology Solutions",
  publisher: "Globixs Technology Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://globixstech.com",
    siteName: "Globixs Technology Solutions",
    title: "Globixs Technology Solutions | AI-Powered IT Staffing & Consultancy",
    description: "AI-Powered IT Staffing & Consultancy for Faster Hiring. Seattle, WA.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Globixs Technology Solutions — AI-Powered IT Staffing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Globixs Technology Solutions",
    description: "AI-Powered IT Staffing & Consultancy for Faster Hiring.",
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
