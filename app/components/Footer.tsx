import { FaFacebook, FaGitlab, FaInstagram, FaLinkedin } from "react-icons/fa";

import { CiHeart } from "react-icons/ci";
import React from "react";

export default function Footer() {
  return (
    <div
      className="relative h-[800px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 w-full h-full bg-white/20 backdrop-blur-lg py-12 px-6 sm:px-8 flex flex-col justify-between">
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}

const Section1 = () => {
  return (
    <div className="mt-32 sm:mt-24 md:mt-28 lg:mt-32 xl:mt-36 p-10">
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <>
      <div className="flex items-center gap-1 translate-x-15 translate-y-[18vh]  md:translate-y-[5vh] text-stone-300 ">
        <p className="inline-flex items-center gap-1 md:text-xl text-neutral-500 mb-4">
          Designed and coded with <CiHeart /> by
        </p>
      </div>
      <div className="flex justify-between items-end mb-8 translate-x-15 translate-y-0 md:translate-y-[-10vh] text-stone-300">
        <h1 className="text-[20vw] leading-[0.8] mt-4 text-neutral-500 sm:text-[15vw] md:text-[18vw] lg:text-[20vw] xl:text-[22vw] md:text-shadow-xs md:font-serif md:font-bold">
          𝓶𝓮𝓵𝓪
        </h1>

        <p className="text-neutral-500">©copyright</p>
      </div>
    </>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-12 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 text-stone-200">
      <div className="flex flex-col gap-2">
        <h3 className="text-neutral-500">𝓐𝓫𝓸𝓾𝓽</h3>

        <div className="flex gap-4 items-center text-neutral-500">
          <a
            href="https://web.facebook.com/ichbinaranna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-blue-300" size={20} />
          </a>
          <p>Facebook</p>
        </div>

        <div className="flex gap-4 items-center text-neutral-500">
          <a
            href="https://www.instagram.com/_melkyway/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-pink-300" size={20} />
          </a>
          <p>Instagram</p>
        </div>
        <div className="flex gap-4 items-center text-neutral-500">
          <a
            href="https://www.linkedin.com/in/melanie-abalde-0a363a31b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-sky-300" size={20} />
          </a>
          <p>LinkedIn</p>
        </div>

        <div className="flex gap-4 items-center text-neutral-500">
          <a
            href="https://gitlab.com/Araanna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGitlab className="text-orange-800" size={20} />
          </a>
          <p>Gitlab</p>
        </div>
      </div>
    </div>
  );
};
