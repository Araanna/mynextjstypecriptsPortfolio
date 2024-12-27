import AboutSection from "./AchievementSection";
import React from "react";
import { motion } from "framer-motion";

type SkillSet = {
  src: string;
  alt: string;
};

const skillSets: SkillSet[] = [
  {
    src: "https://skillicons.dev/icons?i=react,flutter,vue,docker,redis",
    alt: "Skills 1",
  },
  {
    src: "https://skillicons.dev/icons?i=bootstrap,figma,tailwind,git,supabase",
    alt: "Skills 2",
  },
  {
    src: "https://skillicons.dev/icons?i=typescript,php,mysql,sass,nodejs",
    alt: "Skills 3",
  },
  {
    src: "https://skillicons.dev/icons?i=mongodb,fastapi,django,nextjs,postgresql",
    alt: "Skills 4",
  },
  {
    src: "https://skillicons.dev/icons?i=javascript,express,python,flask,laravel",
    alt: "Skills 5",
  },
];

const Skills: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:mt-16 mt-[4rem] md:mt-16 px-4 transform translate-x-[12rem] ">
      
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
        className="flex flex-wrap justify-center w-full md:w-[25rem] mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {skillSets.map((skill, index) => (
          <img
            key={index}
            src={skill.src}
            alt={skill.alt}
            className="p-2 mb-4 sm:mr-8"
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
