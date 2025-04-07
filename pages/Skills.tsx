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
    <section className="flex flex-col md:flex-row items-center justify-center min-h-full w-full px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto  md:py-2 overflow-visible">
      {/* Left Column: About Section */}
      <motion.div
        className="w-full md:w-1/2 order-2 md:order-1 mb-[25rem] md:mb-0 md:pr-12 md:pb-[20rem]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AboutSection />
      </motion.div>

      {/* Right Column: Skills Icons */}
      <motion.div
        className="w-full md:w-1/2 order-1 md:order-2 md:mb-0 "
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1  md:gap-1 py-8 rounded-lg border border-[#9c52bc] bg-white/10 backdrop-blur-lg">
          {skillSets.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-2 md:p-4 transition-all hover:scale-105"
            >
              <skill.Icon className="text-sm md:text-4xl mb-2   text-[#8f79c3] hover:text-pink-300" />
              <p className="text-sm text-[#76639e]">{skill.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
