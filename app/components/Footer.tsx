
import { FaFacebook, FaGitlab, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

import { CiHeart } from "react-icons/ci";
import React from "react";

export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[580px] "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* The main footer background that adapts to the theme */}
      <div
        className="fixed bottom-0 w-full h-full 
                   bg-white/20 dark:bg-black/20 backdrop-blur-lg 
                   py-12 px-6 sm:px-8 flex flex-col justify-between"
      >
       
        <div className="translate-x-0 translate-y-[35rem] md:translate-y-[45vh]">
          <Nav />
          <Section2 />
        </div>
      </div>
    </div>
  );
}



const Section2 = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left md:justify-start">
        {/* Top Section - text color now inherits */}
        <div className="flex flex-col items-center justify-center text-center gap-1 mb-0 translate-y-[4vh] md:translate-y-[10vh] text-inherit md:flex-row md:items-center md:gap-1">
          <p className="inline-flex items-center gap-1 text-md md:text-md mb-12 text-inherit font-semibold">
            CRAFTED WITH
            <CiHeart /> BY
          </p>
        </div>

        {/* Bottom Section - text color now inherits */}
        <div className="flex flex-col items-center justify-center mb-0 translate-y-[-3vh] md:sticky md:flex-row md:justify-between md:items-end md:translate-y-[-6vh] md:translate-x-[-2vw] text-inherit w-full">
          <h1 className="text-[22px] leading-[0.8] mt-4 sm:text-[15vw] md:text-[18vw] lg:text-[20vw] xl:text-[22vw] md:text-shadow-xs md:font-serif md:font-bold">
            𝓶𝓮𝓵𝓪
          </h1>
          <div className="flex flex-col items-center justify-center mb-6 space-y-1">
            <p className="text-[10px] font-semibold mt-5 text-inherit">Tech stack used:</p>

            <div className="flex items-center justify-center gap-1.5">
              <img
                src="https://cdn.simpleicons.org/nextdotjs/000000"
                alt="Next.js"
                className="w-[25px] h-[25px] object-contain rounded-full"
              />
              <img
                src="https://cdn.simpleicons.org/typescript/3178c6"
                alt="TypeScript"
                className="w-[25px] h-[25px] object-contain"
              />
              <img
                src="https://cdn.simpleicons.org/tailwindcss/06B6D4"
                alt="Tailwind CSS"
                className="w-[25px] h-[25px] object-contain"
              />
              <img
                src="https://cdn.simpleicons.org/cloudinary/3448C5"
                alt="Cloudinary"
                className="w-[25px] h-[25px] object-contain"
              />
              <img
                src="https://euphy.dev/images/svg/icons/zustand.svg"
                alt="Zustand"
                className="w-[25px] h-[25px] object-contain rounded-full"
              />
              <img
                src="https://cdn.simpleicons.org/vercel/000000"
                alt="Vercel"
                className="w-[25px] h-[25px] object-contain"
              />
            </div>

            <p className="text-[10px] font-medium text-inherit">
              © 2022 | ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Nav = () => {
  return (
    // On mobile (default), display as a row and center the icons.
    // On larger screens (sm and up), revert to original display with text.
    <div className="flex flex-row justify-center items-center gap-5 sm:flex-col sm:items-start sm:gap-2 text-inherit">
      <div className="flex gap-4 items-center text-inherit">
        <a
          href="https://web.facebook.com/ichbinaranna"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            className="text-gray-700 dark:text-purple-400"
            size={20}
          />
        </a>
        <p className="font-bold text-inherit text-sm hidden sm:block">Facebook</p>
      </div>

      <div className="flex gap-4 items-center text-inherit">
        <a
          href="https://www.instagram.com/_melkyway/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            className="text-gray-700 dark:text-purple-400"
            size={20}
          />
        </a>
        <p className="font-bold text-inherit text-sm hidden sm:block">Instagram</p>
      </div>

      <div className="flex gap-4 items-center text-inherit">
        <a
          href="https://www.linkedin.com/in/melanie-abalde-0a363a31b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className="text-gray-700 dark:text-purple-400"
            size={20}
          />
        </a>
        <p className="font-bold text-inherit text-sm hidden sm:block">LinkedIn</p>
      </div>

      <div className="flex gap-4 items-center text-inherit">
        <a
          href="https://gitlab.com/Araanna"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGitlab
            className="text-gray-700 dark:text-purple-400"
            size={20}
          />
        </a>
        <p className="font-bold text-inherit text-sm hidden sm:block">Gitlab</p>
      </div>
    </div>
  );
};
