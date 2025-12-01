import type { Metadata } from "next";
import Works from "../../pages/Works";

export const metadata: Metadata = {
  title: "Projects | Melanie Abalde",
  description: "Showcase of Melanie Abalde's web development projects and applications.",
  openGraph: {
    title: "Projects | Melanie Abalde",
    description: "Showcase of Melanie Abalde's web development projects and applications.",
    url: "https://mela-portfolio.vercel.app/works",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Melanie Abalde's Projects",
      },
    ],
  },
};

export default function WorksPage() {
  return <Works />;
}
