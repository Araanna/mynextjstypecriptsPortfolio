import Fligno from "../assets/images/Fligno.jpeg";
import Image from "next/image";
import Layout from "../app/components/Layout.tsx";
import PyTsada from "../assets/images/PyTsada.jpg";
import React from "react";
import Sidebar from "../app/components/Sidebar.tsx";
import Tesda from "../assets/images/TesdaCert.jpg";
import BWAI2025 from "../assets/images/Google Certificate.jpg";

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
  {
    id: 3,
    image: PyTsada,
    alt: "Certificate 3",
    title: "PyTsada 2.0",
    description: "Certificate for Active Participation",
  },
  
   {
    id: 4,
    image: BWAI2025,
    alt: "Certificate 4",
    title: "Building With AI 2025",
    description: "Google Certificate",
  },
];

const Certificate: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar - full width on mobile, fixed width on desktop */}
        <div className="w-full md:w-64 md:min-h-screen">
          <Sidebar section="Certificate" />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:pl-6 md:pr-48 overflow-y-auto max-h-[calc(100vh-4rem)]">
          {/* Certificate Title with Motion */}
          <motion.h1
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Certificates
          </motion.h1>

          {/* Timeline Container */}
          <div className="w-full">
            <ul className="timeline timeline-vertical w-full max-w-2xl mx-auto">
              {certificates.map((cert, index) => (
                <li key={cert.id} className="relative">
                  {/* Timeline separator */}
                  {index !== 0 && (
                    <hr className="my-4 md:my-5 mx-4 border-t border-gray-100 dark:border-slate-700/20" />
                  )}

                  <motion.div
                    className={`timeline-${
                      index % 2 === 0 ? "start" : "end"
                    } timeline-box bg-white/20 dark:bg-gray-800 shadow-md dark:shadow-gray-700/50`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    whileHover={{
                      y: -3,
                      scale: 1.01,
                      boxShadow: "0 5px 10px -3px rgba(59, 130, 246, 0.2)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.alt}
                      className="w-auto h-auto rounded-2xl p-1"
                    />
                    <motion.h3
                      className="font-bold mt-2 text-gray-800 dark:text-gray-100"
                      whileHover={{ color: "#EBE5C2" }}
                    >
                      {cert.title} <br />
                      <span className="font-normal text-gray-600 dark:text-gray-300">
                        {cert.description}
                      </span>
                    </motion.h3>
                  </motion.div>

                  {/* Bottom separator */}
                  {index < certificates.length - 1 && (
                    <hr className="my-4 md:my-5 mx-4 border-t border-gray-200 dark:border-gray-600" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Certificate;
