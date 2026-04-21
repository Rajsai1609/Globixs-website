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
  metadataBase: new URL("https://theteammc.com"),
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: "/logo.png",
  },
  title: {
    default: "MCTechnology LLC | AI Automation Agency · IT Staffing & Consultancy",
    template: "%s | MCTechnology LLC",
  },
  description:
    "MCTechnology LLC builds multi-agent AI systems and AI-augmented IT staffing workflows for faster operations and growth.",
  keywords: [
    "IT staffing Seattle",
    "AI automation agency Seattle",
    "H1B OPT job placement Seattle",
    "AI job search tool",
    "IT consulting Seattle WA",
  ],
  openGraph: {
    title: "MCTechnology LLC",
    description:
      "AI automation agency and IT staffing consultancy based in Seattle, WA.",
    url: "https://theteammc.com",
    siteName: "MCTechnology LLC",
    locale: "en_US",
    type: "website",
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
