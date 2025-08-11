import Image from "next/image";
import Layout from "../app/components/Layout";
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
        <div className="flex-1 p-4 md:pl-6 md:pr-48 overflow-y-auto max-h-[calc(100vh-4rem)]">
          {/* Works Title with Motion */}
          <motion.h1
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Works
          </motion.h1>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mockup-window bg-base-100 border border-base-300 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-4">
                  {/* Project Image */}
                  <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  {/* Project Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                    <p className="text-base-content">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="badge badge-outline badge-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Game Link Button if available */}
                    {project.gameLink && (
                      <a
                        href={project.gameLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm mt-2"
                      >
                        View Game
                      </a>
                    )}
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