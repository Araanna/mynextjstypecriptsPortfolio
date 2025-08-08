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

          {/* Projects Container */}
          <div className="w-[35rem]">
           
           
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Works;
