import { FaDocker, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiDjango,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

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
  { Icon: FaNodeJs, name: "Node.js" },
  { Icon: SiDjango, name: "Django" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiPhp, name: "PHP" },
  { Icon: SiMysql, name: "MySQL" },
  { Icon: FaDocker, name: "Docker" },
  { Icon: FaGitAlt, name: "Git" },
];

const Skills: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center min-h-[calc(100vh-4rem)] w-full px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto py-8 md:py-2 md:translate-x-[-10%] md:translate-y-[-5%] m-5">
      {/* Left Column: About Section */}
      <motion.div
        className="w-full md:w-1/2 order-2 md:order-1 md:pr-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AboutSection />
      </motion.div>

      {/* Right Column: Skills Icons */}
      <motion.div
        className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 rounded-lg border border-[#33353F] bg-white/10 backdrop-blur-lg">
          {skillSets.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 transition-all hover:scale-105"
            >
              <skill.Icon className="text-4xl mb-2 text-inherit text-blue-500" />
              <p className="text-sm ">{skill.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
