import type { Metadata } from "next";
import Contact from "../../pages/Contact";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "Contact | Melanie Abalde",
  description: "Get in touch with Melanie Abalde for collaboration, freelance work, or just to say hi.",
  openGraph: {
    title: "Contact | Melanie Abalde",
    description: "Get in touch with Melanie Abalde for collaboration, freelance work, or just to say hi.",
    url: "https://mela-portfolio.vercel.app/contact",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Melanie Abalde",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-64 md:fixed md:h-screen">
          <Sidebar section="Contact" />
        </div>
        <div className="flex-1 p-4 md:ml-64 md:pl-6 md:pr-48 overflow-y-auto h-screen flex items-center justify-center">
          <Contact />
        </div>
      </div>
    </Layout>
  );
}
