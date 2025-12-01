import type { Metadata } from "next";
import Skills from "../../pages/Skills";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "Skills | Melanie Abalde",
  description: "Explore Melanie Abalde's technical skills in web development, including React, Next.js, TypeScript, and more.",
  openGraph: {
    title: "Skills | Melanie Abalde",
    description: "Explore Melanie Abalde's technical skills in web development, including React, Next.js, TypeScript, and more.",
    url: "https://mela-portfolio.vercel.app/skills",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Melanie Abalde's Skills",
      },
    ],
  },
};

export default function SkillsPage() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-64 md:fixed md:h-screen">
          <Sidebar section="Skills" />
        </div>
        <div className="flex-1 p-4 md:ml-64 md:pl-6 md:pr-48 overflow-y-auto h-screen">
          <Skills />
        </div>
      </div>
    </Layout>
  );
}
