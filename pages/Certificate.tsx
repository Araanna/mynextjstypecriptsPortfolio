import Fligno from "../assets/images/Fligno.jpeg";
import Image from "next/image";
import Layout from "../app/components/Layout";
import clsx from "clsx";

import PyTsada from "../assets/images/PyTsada.jpg";
import React from "react";
import Sidebar from "../app/components/Sidebar.tsx";
import Tesda from "../assets/images/TesdaCert.jpg";
import BWAI2025 from "../assets/images/Google Certificate.jpg";
import Devcon from "../assets/images/Volunteers.png";
import WordPress from "../assets/images/WordPress.jpg";
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
  {
    id: 5,
    image: Devcon,
    alt: "Certificate 5",
    title: "Devcon Volunteer",
    description: "Devcon 2025 Volunteer Certificate",
  },
  {
    id: 6,
    image: WordPress,
    alt: "Certificate 6",
    title: "WordPress Campus Connect",
    description: "WordPress 2025 Workshop Certificate",
  },
];

const Certificate: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Fixed Sidebar */}
        <div className="w-full md:w-64 md:fixed md:h-screen">
          <Sidebar section="Certificate" />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 p-4 md:ml-64 md:pl-6 md:pr-48 overflow-y-auto h-screen">
          {/* Certificate Title with Motion */}
          <motion.span
            className={clsx(
              "inline-flex items-center text-xs font-semibold mb-6 px-2 py-1 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300",
              "!bg-black !text-white !border-black/20",
              "dark:!bg-purple-900/30 dark:!text-purple-300 dark:!border-purple-900/30"
            )}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              className={clsx(
                "w-4 h-4 mr-2",
                "!text-white",
                "dark:!text-purple-500"
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            My Certificates
          </motion.span>

          {/* Timeline Container */}
          <div className="w-full">
            <ul className="timeline timeline-vertical w-full max-w-2xl mx-auto">
              {certificates.map((cert, index) => (
                <li key={cert.id} className="relative">
                  {/* Timeline separator */}
                  {index !== 0 && (
                    <hr className="my-4 md:my-5 mx-4 border-t border-purple-900/30 dark:border-purple-900/20" />
                  )}

                  <motion.div
                    className={`timeline-${
                      index % 2 === 0 ? "start" : "end"
                    } timeline-box bg-white/20 dark:bg-purple-900/30 shadow-md dark:shadow-purple-900/50`}
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
                    <hr className="my-4 md:my-5 mx-4 border-t border-purple-900 dark:border-purple-900/30" />
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