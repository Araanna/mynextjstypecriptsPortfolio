// Pages.tsx
"use client";

import { navLinks, socialLinks } from "./links"; // Import the data

import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Link from "next/link"; // Use Next.js Link for client-side navigation
import React from "react";
import Skills from "@/pages/Skills";

interface PagesProps {
  section: string; // Active section passed from App.tsx
}

const Pages: React.FC<PagesProps> = ({ section }) => {
  return (
    <div className="flex flex-row text-gray-400">
      {/* Sidebar */}
      <div className="col w-[8%] h-[60rem] border-r-2 p-4 py-[12rem] text-right">
        <ul>
          {navLinks.map((link) => (
            <li key={link.id} className="mb-4">
              <Link href={link.href}>
                <span className="hover:text-gray-100 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 text-xs font-bold vertical-text">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="absolute flex items-center justify-center w-full h-screen mx-[10%]">
        {section === "About" && <About />}
        {section === "Skills" && <Skills />}
        {section === "Contact" && <Contact />}
      </div>

      {/* Top Bar */}
      <div className="w-full h-20 border-b-2 flex justify-end items-center pr-8">
        {socialLinks.map(({ href, label, title, Icon, colorClass }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative text-gray-600 ${colorClass} mx-4`}
            aria-label={label}
            title={title}
          >
            <Icon size={24} />
            <span className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-sm bg-black text-white p-2 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Pages;
