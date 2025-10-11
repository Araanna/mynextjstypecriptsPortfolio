"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/mela.dev.jpg";

const staticData = {
  intro: `I am a full-stack developer with a Bachelor of Science in Information Technology, majoring in Systems Development. I specialize in building web and mobile applications, with a strong proficiency in Next.js for frontend development Django for backend solutions. I have extensive experience developing applications and APIs, including WebSocket, REST API, and GraphQL integrations. In addition, I have volunteered as a coach in learning communities such as DjangoGirls CDO, reflecting my commitment to sharing knowledge and fostering growth in the tech community. My passion for technology drives me to continuously explore, learn, and apply innovative solutions.`,
};

function About() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto py-8 overflow-visible">
      
      <div className="flex justify-start -ml-4 sm:-ml-6 md:ml-0">
        <div className="inline-flex items-center text-xs font-semibold 
          md:mr-[16rem]
          mb-6 px-3 py-1 rounded-lg border shadow-sm 
          hover:shadow-md transition-all duration-300 bg-purple-900 text-white 
          border-none dark:bg-purple-900/30 dark:text-purple-300 
          dark:border-purple-900/30 cursor-pointer">
          <h1 className="text-center">About Me</h1>
        </div>
      </div>

      <div className="w-full">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Content Column */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <p className="text-[14px] sm:text-[14px] leading-relaxed text-purple-900 dark:text-purple-200">
              {staticData.intro}
            </p>
          </div>

          {/* Image Column */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              animate={{
                y: [0, -12, 0, 12, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Mobile: Circular Image */}
              <div className="lg:hidden">
                <Image
                  src={profileImage}
                  alt="Profile Image"
                  fill
                  className="rounded-full object-cover shadow-lg border-4 border-white dark:border-purple-300"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Desktop: Rectangular Image */}
              <div className="hidden lg:block">
                <Image
                  src={profileImage}
                  alt="Profile Image"
                  fill
                  className="rounded-lg object-cover shadow-xl border-1 border-none dark:border-gray-200"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;