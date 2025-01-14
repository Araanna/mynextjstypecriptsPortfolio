"use client";

import { FiMoon, FiSun } from "react-icons/fi"; // Importing sun and moon icons for light/dark mode
import React, { useEffect, useState } from "react";
import { navLinks, socialLinks } from "../../lib/links.ts";

import { FaHome } from "react-icons/fa"; // Importing the home icon from react-icons
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { usePathname } from "next/navigation";

interface SidebarProps {
  section: string;
  children?: React.ReactNode;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ section, children }) => {
  const pathname = usePathname(); // Get the current pathname using usePathname
  const [showTopBar, setShowTopBar] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark", !isDarkMode); // Toggle dark mode on body
  };

  useEffect(() => {
    if (navLinks.some((link) => link.href === pathname)) {
      setShowTopBar(false);
    } else {
      setShowTopBar(true);
    }
  }, [pathname]);

  return (
    <div className="flex flex-row text-gray-400 ">
      {/* Sidebar */}
      <motion.div
        className="col w-[8%] h-[60rem] border-r-2 p-4 py-[12rem] text-center flex flex-col justify-between "
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <ul>
          {navLinks.map(({ id, href, label }) => (
            <li key={id} className="mb-4">
              <Link href={href}>
                <span className="hover:text-gray-100 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 text-xs font-bold vertical-text">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Home Button */}
        <div className="flex justify-center items-center mt-4">
          <Link href="/">
            <span className="text-2xl text-gray-600 hover:text-gray-800">
              <FaHome /> {/* Home icon */}
            </span>
          </Link>
        </div>

        {/* Light/Dark Mode Toggle */}
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={toggleTheme}
            className="text-2xl text-gray-600 hover:text-gray-800"
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}{" "}
            {/* Sun icon for light mode, moon icon for dark mode */}
          </button>
        </div>
      </motion.div>

      {showTopBar && (
        <motion.div
          className="w-full h-20 border-b-2 flex justify-end items-center pr-8"
          initial={{ opacity: 0, y: -20 }} // Initial state: hidden and slightly above
          animate={{ opacity: 1, y: 0 }} // Animate to visible and in place
          exit={{ opacity: 0, y: -20 }} // Exit state: hidden and slightly above
          transition={{ duration: 0.5 }} // Duration of animation
        >
          {socialLinks.map(
            ({ href, label, title, Icon, colorClass, download }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative text-gray-600 ${colorClass} mx-4`}
                aria-label={label}
                title={title}
                download={download ? true : undefined} // Adding the download attribute
              >
                <Icon size={24} />
                <Tooltip title={title} placement="bottom-start">
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-sm bg-black text-white p-2 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {label}
                  </span>
                </Tooltip>
              </a>
            )
          )}
        </motion.div>
      )}

      {/* Render children here */}
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
