"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/profileImage.png";

const staticData = {
  intro: `I am a dedicated and passionately curious full-stack web developer with strong expertise in JavaScript, React, and backend development. My experience includes working with SQL, MongoDB, and Docker, as well as building REST APIs using Django.

  To prepare myself for job opportunities, I have self-studied these technologies, diving deep into their applications and principles. I enjoy the process of learning and integrating various APIs, often leveraging tools like Postman to test and refine my work.`,
  passion: `Building projects, from websites to mobile applications, fuels my passion for technology and problem-solving. Each project is an opportunity to grow, and I take pride in seeing my ideas come to life. You can explore my creations on GitHub, where I showcase my knowledge and enthusiasm for coding.`,
  skills: [
    {
      category: "Frontend",
      items: ["JavaScript", "React", "Redux", "HTML", "CSS"],
    },
    {
      category: "Backend",
      items: ["Django", "REST API", "Node.js", "Express", "WebSocket"],
    },
    { category: "Databases", items: ["SQL", "MongoDB", "PostgreSQL"] },
    { category: "Tools", items: ["Docker", "Git", "Postman"] },
    { category: "API Development", items: ["REST API", "GraphQL"] },
  ],
};

function About() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-start min-h-[calc(100vh-4rem)] overflow-y-auto md:overflow-visible w-full md:w-[80rem] overflow-hidden translate-x-0 md:translate-x-[-15%] md:translate-y-[-5%] relative  bg-white/80 dark:bg-gray-900 rounded-lg m-3">
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
              <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                About Me
              </h1>
              <div className="-inset-2 space-y-8 text-gray-700 dark:text-gray-300 mb-6 overflow-hidden">
                <p className="text-sm sm:text-base leading-relaxed">
                  {staticData.intro}
                </p>
                <p className="text-xs sm:text-base leading-relaxed">
                  {staticData.passion}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {staticData.skills.map((skillGroup, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="font-bold text-base mb-2 text-center text-gray-800 dark:text-gray-200">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-1">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
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
                  className="rounded-lg object-cover shadow-xl -translate-y-[10rem]"
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
