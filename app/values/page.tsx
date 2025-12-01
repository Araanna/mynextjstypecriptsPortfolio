import type { Metadata } from "next";
import Values from "../../pages/Values";

export const metadata: Metadata = {
  title: "Values | Melanie Abalde",
  description: "Discover the core values that drive Melanie Abalde's work and professional life.",
  openGraph: {
    title: "Values | Melanie Abalde",
    description: "Discover the core values that drive Melanie Abalde's work and professional life.",
    url: "https://mela-portfolio.vercel.app/values",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Melanie Abalde's Values",
      },
    ],
  },
};

export default function ValuesPage() {
  return <Values />;
}
