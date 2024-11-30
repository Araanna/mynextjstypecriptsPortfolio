import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "𝓂ℯ𝓁𝒶.dev",
  description: "𝓂ℯ𝓁𝒶'𝓈 𝓅ℴ𝓇𝓉𝒻ℴ𝓁𝒾ℴ 𝒸𝓇ℯ𝒶𝓉ℯ𝒹 𝓌𝒾𝓉𝒽 𝓁ℴ𝓋ℯ 𝒷𝓎 𝓂ℯ𝓁𝒶",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
