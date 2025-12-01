import type { Metadata } from "next";
import Interest from "../../pages/Interest";

export const metadata: Metadata = {
  title: "Interests | Melanie Abalde",
  description: "A glimpse into Melanie Abalde's personal interests and hobbies.",
  openGraph: {
    title: "Interests | Melanie Abalde",
    description: "A glimpse into Melanie Abalde's personal interests and hobbies.",
    url: "https://mela-portfolio.vercel.app/interest",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Melanie Abalde's Interests",
      },
    ],
  },
};

export default function InterestPage() {
  return <Interest />;
}
