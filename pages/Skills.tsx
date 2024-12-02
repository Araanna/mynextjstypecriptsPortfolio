import AboutSection from "./AboutSection";
import React from "react";

type SkillSet = {
  src: string;
  alt: string;
};

const skillSets: SkillSet[] = [
  {
    src: "https://skillicons.dev/icons?i=react,flutter,vue,docker,redis,",
    alt: "Skills 1",
  },
  {
    src: "https://skillicons.dev/icons?i=bootstrap,figma,tailwind,git,supabase,",
    alt: "Skills 2",
  },
  {
    src: "https://skillicons.dev/icons?i=typescript,php,mysql,sass,nodejs,",
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
    <div>
      <AboutSection />
      <div className="items-center justify-center transform translate-y-[20rem]">
        {skillSets.map((skill, index) => (
          <img
            key={index}
            src={skill.src}
            alt={skill.alt}
            className="justify-center items-center mx-[20%] my-5"
          />
        ))}
        <br />
      </div>
    </div>
  );
};

export default Skills;
