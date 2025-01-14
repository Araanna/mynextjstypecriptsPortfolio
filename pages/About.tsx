"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/profileImage.png";

const staticData = {
  intro: `I am a dedicated and passionately curious full-stack web developer with strong expertise in JavaScript, React, and backend development. My experience includes working with SQL, MongoDB, and Docker, as well as building REST APIs using Django.

  To prepare myself for job opportunities, I have self-studied these technologies, diving deep into their applications and principles. I enjoy the process of learning and integrating various APIs, often leveraging tools like Postman to test and refine my work.`,
  passion: `Building projects, from websites to mobile applications, fuels my passion for technology and problem-solving. Each project is an opportunity to grow, and I take pride in seeing my ideas come to life. You can explore my creations on GitHub, where I showcase my knowledge and enthusiasm for coding.`,
  tools: [
    { category: "Frontend", tools: "JavaScript, React, Redux, HTML, CSS" },
    {
      category: "Backend",
      tools: "Django, REST API, Node.js (Express), WebSocket",
    },
    { category: "Databases", tools: "SQL, MongoDB, PostgreSQL" },
    { category: "Tools and Platforms", tools: "Docker, Git, Postman" },
    { category: "API Development", tools: "REST API, GraphQL" },
  ],
};

function About() {
  return (
    <section className="flex flex-col md:flex-row items-center md:mt-16 md:text-[8px] mt-12 px-2 transform translate-x-40">
      <motion.div
        className="w-full md:w-[30rem] mx-auto mb-4 md:mb-0 text-justify text-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold transform translate-x-1 -translate-y-[3rem]">
          About Me
        </h1>
        <p>{staticData.intro}</p>
        <p className="mt-4">{staticData.passion}</p>

        <h2 className="text-lg font-semibold mt-6">
          Experience Making Projects with These Tools:
        </h2>
        <ul className="list-disc list-inside mt-4">
          {staticData.tools.map((item, index) => (
            <li key={index}>
              <strong>{item.category}:</strong> {item.tools}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Right Column: Image */}
      <motion.div
        className="flex justify-center items-center w-full md:w-[25rem] mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src={profileImage}
          alt="Mela"
          width={200}
          height={250}
          className="rounded-lg mx-10"
        />
      </motion.div>
    </section>
  );
}

export default About;
