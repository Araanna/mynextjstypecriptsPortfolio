"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/mela.dev.jpg";

const staticData = {
intro: `I am a full-stack developer with a Bachelor of Science in Information Technology, majoring in Systems Development. I specialize in building web and mobile applications, with a strong proficiency in Next.js for frontend development and Laravel and Django for backend solutions. I have extensive experience developing applications and APIs, including WebSocket, REST API, and GraphQL integrations. In addition, I have volunteered as a coach in learning communities such as DjangoGirls CDO, reflecting my commitment to sharing knowledge and fostering growth in the tech community. My passion for technology drives me to continuously explore, learn, and apply innovative solutions.`,

};


function About() {
  return (
   <section className="flex items-center justify-center min-h-[calc(90vh-4rem)] w-full px-12 py-8 sm:py-12">
<div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl w-full ml-8">
      {/* Content Column */}
        <motion.div
          className="w-full lg:w-1/2 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center text-xs font-semibold mb-6 px-2 py-1 rounded-lg border-1 shadow-sm hover:shadow-md transition-all duration-300 bg-violet-500 text-white  border-none  dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-900/30 cursor-pointer">
              <h1 className="text-center">About Me</h1>
            </div>
            <div className="space-y-6">
              <p className="text-[14px] sm:text-[14px] font-apple leading-relaxed text-inherit">
                {staticData.intro}
              </p>
             
            </div>
          </div>
        </motion.div>

        {/* Image Column with Floating Animation */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            animate={{
              y: [0, -12, 0, 12, 0],
              rotate: [0, 6, 0, -2, 0],
            }}
            transition={{
              duration: 10.5,
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
        </motion.div>
      </div>
    </section>
  );
}

export default About;
