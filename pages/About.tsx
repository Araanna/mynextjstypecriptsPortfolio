// About.tsx
"use client";

import Image from "next/image";
import ProfileImage from "../app/images/ProfileImage.png";
import React from "react";

// Static content for the about section
const staticData: {
  intro: string;
  projects: string;
  passion: string;
} = {
  intro:
    "I'm Mela, and I graduated with a degree in Information Technology. I'm always eager to explore new skills and interests, which keeps my curiosity alive.",
  projects:
    "Building different projects, from mobile apps to websites, is something I love. There’s a real sense of satisfaction when I see the results of my work. You can find what I’ve created on my GitHub.",
  passion:
    "What drives me is the mix of art and technology—I see it like painting, where I can be bold and confident that the quality shines through. I’ve also developed a keen interest in marketing and business strategies, especially after helping my parents run their business.",
};

function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center md:mt-16 mt-12 px-4"
    >
      {/* Left Column: Text Content */}
      <div className="w-full md:w-[30rem] mx-auto mb-4 md:mb-0 text-justify text-sm">
        <p>
          <span>{staticData.intro}</span>
          <br />
          <br />
          <span>{staticData.projects}</span>
          <br />
          <br />
          <span>{staticData.passion}</span>
        </p>
      </div>

      {/* Right Column: Image */}
      <div className="flex justify-center items-center w-full md:w-[25rem] mx-auto">
        <Image
          src={ProfileImage} // Add your image path
          alt="Mela"
          width={200}
          height={200}
          className=" rounded-lg  mx-10"
        />
      </div>
    </section>
  );
}

export default About;
