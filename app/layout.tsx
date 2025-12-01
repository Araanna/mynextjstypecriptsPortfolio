import "./globals.css";

import type { Metadata } from "next";
import { Toaster } from "../components/ui/toaster";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://mela-portfolio.vercel.app/"),
  title: {
    default: "Melanie Abalde | Portfolio",
    template: "%s | Melanie Abalde",
  },
  description: "Melanie Abalde's portfolio showcasing web development projects, skills, and experience. Created with Next.js and TypeScript.",
  keywords: [
    "Melanie Abalde",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Melanie Abalde" }],
  creator: "Melanie Abalde",
  publisher: "Melanie Abalde",
  openGraph: {
    title: "Melanie Abalde | Portfolio",
    description: "Melanie Abalde's portfolio showcasing web development projects, skills, and experience.",
    url: "https://mela-portfolio.vercel.app/",
    siteName: "Melanie Abalde Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Melanie Abalde Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melanie Abalde | Portfolio",
    description: "Melanie Abalde's portfolio showcasing web development projects, skills, and experience.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "lH5ShPgtO-FM8XjVNuDCwHBW7It3RnECxJK6o4jpJc0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Melanie Abalde",
    url: "https://mela-portfolio.vercel.app/",
    sameAs: [
      "https://github.com/melanieabalde",
      "https://www.linkedin.com/in/melanieabalde/", 
    ],
    jobTitle: "Web Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  return (
    <html lang="en" data-theme="accent" className="scroll-smooth">
      <head>
        {/* Favicon is handled automatically by Next.js App Router if placed in app/ or public/ */}
      </head>
      <body className="m-0">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
