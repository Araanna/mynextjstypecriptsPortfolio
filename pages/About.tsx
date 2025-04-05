"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/mela.dev.jpg";

const staticData = {
  intro: `I am a dedicated and passionately curious full-stack web developer with strong expertise in JavaScript, React, and backend development. My experience includes working with SQL, MongoDB, and Docker, as well as building REST APIs using Django.

  To prepare myself for job opportunities, I have self-studied these technologies, diving deep into their applications and principles. I enjoy the process of learning and integrating various APIs, often leveraging tools like Postman to test and refine my work.`,
  passion: `Building projects, from websites to mobile applications, fuels my passion for technology and problem-solving. Each project is an opportunity to grow, and I take pride in seeing my ideas come to life. You can explore my creations on GitHub, where I showcase my knowledge and enthusiasm for coding.`,
};

function About() {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-4rem)] w-full px-4 py-8 sm:py-12">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl w-full">
        {/* Content Column - appears first on mobile, second on desktop */}
        <motion.div
          className="w-full lg:w-1/2 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left">
              About Me
            </h1>
            <div className="space-y-6">
              <p className="text-sm sm:text-base leading-relaxed">
                {staticData.intro}
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                {staticData.passion}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Image Column - appears second on mobile, first on desktop */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Mobile: Circular Image */}
            <div className="lg:hidden">
              <Image
                src={profileImage}
                alt="Profile Image"
                fill
                className="rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-800"
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
                className="rounded-lg object-cover shadow-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
