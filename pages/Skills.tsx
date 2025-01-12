import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { SiDjango, SiMysql, SiPostgresql, SiTypescript } from "react-icons/si";

import AboutSection from "./AchievementSection";
import React from "react";
import { motion } from "framer-motion";

type SkillSet = {
  Icon: React.ElementType;
  name: string;
};

const skillSets: SkillSet[] = [
  { Icon: FaReact, name: "React" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: FaDocker, name: "Docker" },
  { Icon: SiMysql, name: "MySQL" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiDjango, name: "Django" },
  { Icon: FaNodeJs, name: "Node.js" },
];

const Skills: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:mt-16 mt-[4rem] px-4 transform translate-x-[12rem]">
      {/* Left Column: About Section */}
      <motion.div
        className="w-full md:w-[30rem] mx-auto mb-[16rem] md:mb-0 text-justify text-sm mt-[-22rem]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AboutSection />
      </motion.div>

      {/* Right Column: Skills Icons */}
      <motion.div
        className="flex flex-wrap justify-center w-full md:w-[25rem] mx-auto border rounded-lg border-[#33353F] foreground backdrop-blur-lg bg-white/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {skillSets.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6  m-2 text-center   "
          >
            <skill.Icon className="text-4xl mb-2 text-blue-500  text-shadow text-shadow-x-md text-shadow-y-lg text-shadow-blur-2 text-shadow-blue-500 " />
            <p className="text-sm">{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
