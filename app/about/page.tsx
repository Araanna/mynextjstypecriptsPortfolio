import type { Metadata } from "next";
import About from "../../pages/About";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "About Me | Melanie Abalde",
  description: "Learn more about Melanie Abalde, a full-stack developer specializing in Next.js and Django.",
  openGraph: {
    title: "About Me | Melanie Abalde",
    description: "Learn more about Melanie Abalde, a full-stack developer specializing in Next.js and Django.",
    url: "https://mela-portfolio.vercel.app/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Melanie Abalde",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-64 md:fixed md:h-screen">
          <Sidebar section="About" />
        </div>
        <div className="flex-1 p-4 md:ml-64 md:pl-6 md:pr-48 overflow-y-auto h-screen flex items-center justify-center">
          <About />
        </div>
      </div>
    </Layout>
  );
}
