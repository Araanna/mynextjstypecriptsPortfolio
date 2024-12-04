"use client";

import Image from "next/image";
import ProfileImage from "@/assets/images/ProfileImage.png";
import React from "react";
import { motion } from "framer-motion";

// Static content for the about section
const staticData = {
  intro: `I am a full-stack web developer with a strong passion for exploring new skills and interests, which keeps my curiosity alive. 
          Building various projects, from mobile apps to websites, brings me great satisfaction, especially when I see the results of my work. 
          You can check out my creations on GitHub. I have experience with JavaScript, React, Redux, Python (Django, Flask, FastAPI), 
          Node.js (Express), PostgreSQL, HTML, CSS, Docker, and Git. My expertise includes working with WebSocket, REST API, and GraphQL for APIs. 
          As a fast learner and team player, I am always excited to collaborate and expand my skill set to create amazing applications.`,
  passion: `What drives me is the mix of art and technology—I see it like painting, where I can be bold and confident that the quality shines through. 
            I’ve also developed a keen interest in marketing and business strategies, especially after helping my parents run their business.`,
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
        {" "}
        <h1 className="text-3xl font-bold transform translate-x-1 -translate-y-[3rem] ">
          About Me
        </h1>
        <p>{staticData.intro}</p>
        <p className="mt-4">{staticData.passion}</p>
      </motion.div>

      {/* Right Column: Image */}
      <motion.div
        className="flex justify-center items-center w-full md:w-[25rem] mx-auto "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src={ProfileImage}
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
