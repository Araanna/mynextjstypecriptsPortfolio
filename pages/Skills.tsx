"use client";

import { FaDocker, FaGitAlt, FaNodeJs, FaVuejs,  } from "react-icons/fa";
import {
  SiDjango,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiTypescript,
  SiPostman,
  SiFastapi,
  SiSwagger,
} from "react-icons/si";
import React from "react";
import { motion } from "framer-motion";

type SkillSet = {
  Icon: React.ElementType;
  name: string;
};

const skillSets: SkillSet[] = [
  { Icon: FaVuejs, name: "VueJS" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiDjango, name: "Django" },
  { Icon: SiFastapi, name: "Fastapi" },
  { Icon: SiNextdotjs, name: "NextJS" },
  { Icon: SiPhp, name: "PHP" },
  { Icon: SiMysql, name: "MySQL" },
  { Icon: FaDocker, name: "Docker" },
  { Icon: FaGitAlt, name: "Git" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiPostman, name: "Postman" },
  { Icon: SiSwagger, name: "Swagger" },
];

const Skills: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto py-8 overflow-visible">
      {/* Headline */}
      <div className="flex justify-start">
        <div className="inline-flex items-center text-xs font-semibold mb-6 px-3 py-1 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 bg-purple-900 text-white border-none dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-900/30 cursor-pointer">
          <h1 className="text-center">Skills</h1>
        </div>
      </div>

      {/* Skills Grid */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex flex-wrap gap-2 py-3 rounded-lg px-0 justify-center md:justify-start items-center">
          {skillSets.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-2 rounded-lg bg-purple-900 dark:bg-gray-800/50 backdrop-blur-lg transition-all hover:scale-105 min-w-[80px]"
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className="flex w-full justify-center items-center">
                <div className="icon-container flex justify-center items-center">
                  <skill.Icon className="text-xl md:text-2xl mb-2 text-white" />
                </div>
              </div>

              {/* Label */}
              <div className="text-container">
                <p className="text-[5px] md:text-xs text-white whitespace-nowrap">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
