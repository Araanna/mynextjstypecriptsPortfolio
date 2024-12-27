import Fligno from "../assets/images/Fligno.png";
import Image from "next/image";
import Layout from "@/app/components/Layout";
import React from "react";
import Sidebar from "@/app/components/Sidebar";
import Tesda from "../assets/images/TESDA.png";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    image: Fligno,
    alt: "Certificate 1",
    title: "Fligno",
    description: "Linux Fundamentals",
  },
  {
    id: 2,
    image: Tesda,
    alt: "Certificate 2",
    title: "TESDA",
    description: "User Design for User Interface",
  },
];

const Certificate: React.FC = () => {
  return (
    <Layout>
      <Sidebar section="Certificate" />
      <div className="absolute top-[2rem] left-[18rem]">
        <h1 className="text-white text-5xl font-bold my-20">ᶜᵉʳᵗᶦᶠᶦᶜᵃᵗᵉ</h1>
        <div className="flex space-x-10 ">
          {certificates.map((certificate) => (
            <div key={certificate.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <div className="flex items-center border-e hover:border-2 hover:border-indigo-500/30 rounded-2xl py-5 px-3 bg-white/30 backdrop-blur-md bg-gradient-to-bl from-indigo-500/30 via-transparent to-[#F4F1F8]/40">
                  {" "}
                  <Image
                    src={certificate.image}
                    alt={certificate.alt}
                    width={200}
                    height={200}
                    className="group-hover:scale-95 transition-transform duration-300 border rounded-xl "
                  />
                  <h2 className="text-xs font-semibold from-neutral-500 to-stone-100 text-left  hover:text-indigo-900 bg-transparent mx-4 mt-[70px] ">
                    {certificate.title}
                    <br />
                    {certificate.description}
                  </h2>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Certificate;
