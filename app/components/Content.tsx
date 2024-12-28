import { FaFacebook, FaGitlab, FaInstagram } from "react-icons/fa";

import { CiHeart } from "react-icons/ci";
import React from "react";

export default function Content() {
  return (
    <div className="bg-white/20 backdrop-blur-lg py-12 px-12 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <>
      <div className="flex items-center gap-1 translate-x-20 translate-y-[30vh]">
        <p className="inline-flex items-center gap-1 text-neutral-500">
        Designed and coded with <CiHeart /> by
        </p>
      </div>

      <div className="flex justify-between items-end">
        <h1 className="text-[20vw] leading-[0.8] mt-4 text-neutral-500">𝓶𝓮𝓵𝓪</h1>

        <p className="text-neutral-500">©copyright</p>
      </div>
    </>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20 mt-10">
      <div className="flex flex-col gap-2">
        <h3 className="text-neutral-500 uppercase mb-2">About</h3>

        <div className="flex gap-4 items-center text-neutral-500">
          <a
            href="https://web.facebook.com/izme.melanie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-blue-300" size={20} />
          </a>
          <p>Facebook</p>
        </div>

        <div className="flex gap-4 items-center text-neutral-500">
          <a
            href="https://www.instagram.com/_melkyway/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-300" size={20} />
          </a>
          <p>Instagram</p>
        </div>

        <div className="flex gap-4 items-center text-neutral-500">
          <a
            href="https://gitlab.com/Araanna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGitlab className="hover:text-orange-800" size={20} />
          </a>
          <p>Gitlab</p>
        </div>
      </div>
    </div>
  );
};
