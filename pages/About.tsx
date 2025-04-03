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
    <section className="flex flex-col md:flex-row items-start  min-h-[calc(80vh-4rem)] overflow-y-auto md:overflow-visible w-full md:w-[80rem] overflow-hidden translate-x-0 md:translate-x-[7rem] md:translate-y-13 ">
      {/* Scrollable content container for mobile */}
      <div className="w-full h-full md:h-[35px] overflow-y-auto md:overflow-visible">
        <div className="flex flex-col md:flex-row items-center justify-center py-4 px-4 sm:px-2 lg:px-10 max-w-[1200px] mx-auto ">
          {/* Content Column - appears first on mobile */}
          <motion.div
            className="w-full md:w-1/2 order-2 md:order-1 md:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-2xl mx-auto">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4  ">
                About Me
              </h1>
              <div className="-inset-2 space-y-8   mb-6 overflow-hidden">
                <p className="text-xs sm:text-base leading-relaxed">
                  {staticData.intro}
                </p>
                <p className="text-xs sm:text-base leading-relaxed">
                  {staticData.passion}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Column - appears second on mobile */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2 mb-6 md:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Mobile: Circular Image */}
              <div className="md:hidden">
                <Image
                  src={profileImage}
                  alt="Profile Image"
                  fill
                  className="rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-800"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Desktop: Rectangular Image */}
              <div className="hidden md:block  ">
                <Image
                  src={profileImage}
                  alt="Profile Image"
                  fill
                  className="rounded-lg object-cover shadow-xl -translate-y-1"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
