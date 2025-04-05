import "./globals.css";

import type { Metadata } from "next";
import { Toaster } from "../components/ui/toaster";

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
    <html lang="en" data-theme="light" className="scroll-smooth">
      <head>
        <link rel="icon" href="/app/favicon.ico" />
      </head>
      <body className="bg-base-100">
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
