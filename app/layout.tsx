import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/common/Footer";
import DevNavbar from "./components/common/DevNavbar";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-plex-sans-thai",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rinkai Studio – Empowering your business with Rinkai",
  description:
    "Rinkai Studio is dedicated to providing innovative solutions for your business needs.",
  openGraph: {
    title: "Rinkai Studio – Empowering your business with Rinkai",
    description:
      "Rinkai Studio is dedicated to providing innovative solutions for your business needs.",
    images: [
      {
        url: "https://rinkai.co/og-img.webp",
        width: 1200,
        height: 630,
        alt: "Rinkai Studio",
      },
    ],
    url: "https://rinkai.co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rinkai Studio – Empowering your business with Rinkai",
    description:
      "Rinkai Studio is dedicated to providing innovative solutions for your business needs.",
    images: ["https://rinkai.co/og-img.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${ibmPlexSansThai.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <DevNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
