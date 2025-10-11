import { FaFacebook, FaGitlab, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

import { CiHeart } from "react-icons/ci";
import React from "react";

export default function Footer() {
  return (
    <div className="relative h-[400px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[580px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="fixed bottom-0 w-full h-full 
                    bg-white/20 dark:bg-black/20 backdrop-blur-lg 
                    py-12 px-6 sm:px-8 flex flex-col justify-end">
        <Section2 />
      </div>
    </div>
  );
}

const Section2 = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left md:justify-start pb-4 md:pb-8">
      {/* Top Section */}
      <div className="flex flex-col items-center justify-center text-center gap-1 mb-4 md:mb-8 text-inherit md:flex-row md:items-center md:gap-1">
        <p className="inline-flex items-center gap-1 text-xs md:text-md text-inherit font-semibold">
          CRAFTED WITH
          <CiHeart /> BY
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:items-end text-inherit w-full gap-4 md:gap-0">
        <h1 className="text-[15vw] leading-[0.8] sm:text-[15vw] md:text-[18vw] lg:text-[20vw] xl:text-[22vw] md:text-shadow-xs md:font-serif md:font-bold">
          𝓶𝓮𝓵𝓪
        </h1>
        <div className="flex flex-col items-center justify-center space-y-1 mb-2 md:mb-6">
          <p className="text-[10px] font-semibold text-inherit">
            Tech stack used:
          </p>

          <div className="flex items-center justify-center gap-1.5">
            <div className="relative w-[25px] h-[25px]">
              <img
                src="https://cdn.simpleicons.org/nextdotjs/000000"
                alt="Next.js"
                className="absolute inset-0 w-full h-full object-contain rounded-full dark:hidden"
              />
              <img
                src="https://cdn.simpleicons.org/nextdotjs/ffffff"
                alt="Next.js"
                className="absolute inset-0 w-full h-full object-contain rounded-full hidden dark:block"
              />
            </div>

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
  );
};