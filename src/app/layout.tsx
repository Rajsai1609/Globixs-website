import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site-config";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Globixs Technology Solutions | AI Automation · Digital Marketing · Technology Consulting",
    template: "%s | Globixs Technology Solutions",
  },
  description:
    "Globixs Technology Solutions — AI automation, digital marketing and technology consulting. Seattle-based, working nationwide.",
  keywords: [
    "AI automation services",
    "AI receptionist",
    "business process automation",
    "digital marketing Seattle",
    "technology consulting Seattle",
    "POS integration",
    "business intelligence dashboards",
    "IT staffing Seattle",
    "job marketing service",
  ],
  authors: [{ name: "Globixs Technology Solutions" }],
  creator: "Globixs Technology Solutions",
  publisher: "Globixs Technology Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Globixs Technology Solutions",
    title:
      "Globixs Technology Solutions | AI Automation · Digital Marketing · Technology Consulting",
    description:
      "Globixs Technology Solutions — AI automation, digital marketing and technology consulting. Seattle-based, working nationwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Globixs Technology Solutions — AI Automation, Digital Marketing, Technology Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Globixs Technology Solutions | AI Automation · Digital Marketing · Technology Consulting",
    description:
      "Globixs Technology Solutions — AI automation, digital marketing and technology consulting. Seattle-based, working nationwide.",
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
