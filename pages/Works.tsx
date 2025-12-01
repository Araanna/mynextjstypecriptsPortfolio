"use client";

import Image from "next/image";
import Layout from "../app/components/Layout";
import React from "react";
import Sidebar from "../app/components/Sidebar.tsx";
import { motion } from "framer-motion";
import { projectsData } from "../lib/projectsData";
import clsx from "clsx";

const Works: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar - full width on mobile, fixed width on desktop */}
        <div className="w-full md:w-48 md:min-h-screen">
          <Sidebar section="Works" />
        </div>

        {/* Main Content - reduced width by 50px */}
        <div className="flex-1 p-8 md:pl-4  overflow-y-auto max-h-[calc(100vh-4rem)]">
          {/* Works Title with Motion */}
          <motion.span
            className={clsx(
              "inline-flex items-center text-xs font-semibold mb-6 px-2 py-1 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300",
              "!bg-black !text-white !border-black/20",
              "dark:!bg-purple-900/30 dark:!text-purple-300  dark:!border-purple-900/30"
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
            My Works
          </motion.span>

          <div className="flex flex-col gap-4 items-center">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group max-w-2xl w-full"
              >
                <div className="relative mb-4 flex justify-center">
                  <div className="relative border-2 border-gray-200 dark:border-purple-900/30 bg-gray-100/30 dark:bg-purple-900/10 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="p-4">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={650}
                        height={550}
                        className="transition-transform duration-500 group-hover:scale-[1.02] object-cover rounded-sm w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="px-4 space-y-2">
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 rounded-full text-xs font-medium 
                        bg-white dark:bg-purple-900/20 
                        backdrop-blur-xl
                        text-gray-800 dark:text-purple-300 
                        border border-gray-100 dark:border-purple-900/30 
                        transition-colors duration-300 
                        hover:bg-gray-200/80 dark:hover:bg-purple-900/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons - Always shown */}
                  <div className="flex gap-2 pt-2">
                    {/* View Project Button */}
                    <a
                      href={project.gameLink || "#"}
                      target={project.gameLink ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={clsx(
                        "inline-flex items-center px-2 py-1 rounded-md text-xs border transition-all duration-300 shadow-sm hover:shadow",
                        project.gameLink
                          ? "bg-black dark:bg-purple-900/30 text-white dark:text-white border-gray-300 dark:border-purple-900 hover:bg-gray-700 dark:hover:bg-purple-900/40"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500 border-gray-200 dark:border-gray-700 cursor-not-allowed"
                      )}
                      onClick={!project.gameLink ? (e) => e.preventDefault() : undefined}
                    >
                      <span>View</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 ml-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>

                    {/* GitHub Source Button */}
                    <a
                      href={project.githubLink || "#"}
                      target={project.githubLink ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={clsx(
                        "inline-flex items-center px-2 py-1 rounded-md text-xs border transition-all duration-300 shadow-sm hover:shadow",
                        project.githubLink
                          ? "bg-black dark:bg-purple-900/30 text-white dark:text-white border-gray-300 dark:border-purple-900 hover:bg-gray-700 dark:hover:bg-purple-900/40"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500 border-gray-200 dark:border-gray-700 cursor-not-allowed"
                      )}
                      onClick={!project.githubLink ? (e) => e.preventDefault() : undefined}
                    >
                      <span>Source</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 ml-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Works;