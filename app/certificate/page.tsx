import type { Metadata } from "next";
import Certificate from "../../pages/Certificate";

export const metadata: Metadata = {
  title: "Certificates | Melanie Abalde",
  description: "Professional certificates and achievements earned by Melanie Abalde.",
  openGraph: {
    title: "Certificates | Melanie Abalde",
    description: "Professional certificates and achievements earned by Melanie Abalde.",
    url: "https://mela-portfolio.vercel.app/certificate",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Melanie Abalde's Certificates",
      },
    ],
  },
};

export default function CertificatePage() {
  return <Certificate />;
}
