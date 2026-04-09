import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://globixs.com"),
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: "/logo.png",
  },
  title: {
    default: "Globixs Technology Solutions | IT Staffing · Product Development · Academy",
    template: "%s | Globixs Technology Solutions",
  },
  description:
    "Globixs delivers enterprise IT staffing, vertical product development, and academy-led talent acceleration.",
  openGraph: {
    title: "Globixs Technology Solutions",
    description:
      "IT staffing, product development, and academy-led workforce acceleration for enterprise growth.",
    url: "https://globixs.com",
    siteName: "Globixs Technology Solutions",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
