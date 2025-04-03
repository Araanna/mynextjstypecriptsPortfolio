import Image from "next/image";
import Layout from "../app/components/Layout.tsx";
import React from "react";
import Sidebar from "../app/components/Sidebar.tsx";
import { motion } from "framer-motion";
import { projectsData } from "../lib/projectsData";

const Works: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar - full width on mobile, fixed width on desktop */}
        <div className="w-full md:w-64 md:min-h-screen">
          <Sidebar section="Works" />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:pl-6 md:pr-48 overflow-y-auto">
          {/* Works Title with Motion */}
          <motion.h1
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Works
          </motion.h1>

          {/* Projects Container */}
          <div className="w-full">
            <ul className="timeline timeline-vertical w-full max-w-2xl mx-auto">
              {projectsData.map((project, index) => (
                <li key={project.title} className="relative">
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
                    <div className="flex flex-col md:flex-row gap-4 p-5">
                      <div className="w-full md:w-1/3 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          width={200}
                          height={200}
                          className="w-full h-auto object-cover rounded-none"
                        />
                      </div>

                      <div className="flex-1">
                        <motion.h3
                          className="font-bold text-gray-800 dark:text-gray-100"
                          whileHover={{ color: "#EBE5C2" }}
                        >
                          {project.title}
                          <br />
                          <span className="block mt-1 font-normal text-gray-600 dark:text-gray-300">
                            {" "}
                            {project.description}
                          </span>
                        </motion.h3>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs bg-white/30 dark:bg-gray-500/50 px-3 py-1 rounded-full text-slate-700 dark:text-gray-200 shadow-sm hover:bg-white/50 dark:hover:bg-gray-600/50 transition duration-300 ease-in-out"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom separator */}
                  {index < projectsData.length - 1 && (
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

export default Works;