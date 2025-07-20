"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { navLinks, socialLinks } from "../../lib/links.ts";

import { FaHome } from "react-icons/fa";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface SidebarProps {
  section: string;
  children?: React.ReactNode;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ section, children }) => {
  const pathname = usePathname();
  const [showTopBar, setShowTopBar] = useState(true);
  
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleTheme = () => {
  setIsDarkMode((prev) => {
    const newMode = !prev;
    document.body.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    return newMode;
  });
};

useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    setIsDarkMode(true);
    document.body.classList.add("dark");
  }
}, []);


  useEffect(() => {
    if (navLinks.some((link) => link.href === pathname)) {
      setShowTopBar(false);
    } else {
      setShowTopBar(true);
    }
  }, [pathname]);

  return (
    <div className="flex flex-col md:flex-row ">
      {/* Mobile Navigation (Top) */}
      {isMobile && (
        <motion.div
          className="w-full h-16  border-b-[1px] p-4 flex justify-between items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          {/* Mobile Menu - Horizontal Scroll */}
          <div className="flex-1 overflow-x-auto whitespace-nowrap hide-scrollbar">
            <div className="flex space-x-6 pr-4">
              {navLinks.map(({ id, href, label }) => (
                <Link key={id} href={href}>
                  <span className="hover:text-gray-100 cursor-pointer transition-all duration-300 text-xs font-bold">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center space-x-4 ml-4">
            <Link href="/">
              <span className="text-xl text-gray-600 hover:text-gray-800">
                <FaHome />
              </span>
            </Link>
            <button
              onClick={toggleTheme}
              className="text-xl text-gray-600 hover:text-gray-800"
            >
              {isDarkMode ? <FiSun /> : <FiMoon />}
            </button>
          </div>
        </motion.div>
      )}

      {/* Desktop Sidebar (Left) */}
      {!isMobile && (
        <motion.div
          className="w-20 h-screen border-r-[1px] border-slate-700/20  p-4 flex flex-col justify-between items-center py-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col items-center space-y-6">
            {navLinks.map(({ id, href, label }) => (
              <li key={id}>
                <Link href={href}>
                  <span className="hover:text-gray-100 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 text-xs font-bold vertical-text">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center space-y-4">
            <Link href="/">
              <span className="text-2xl text-gray-600 hover:text-gray-800">
                <FaHome />
              </span>
            </Link>
            <button
              onClick={toggleTheme}
              className="text-2xl text-gray-600 hover:text-gray-800"
            >
              {isDarkMode ? <FiSun /> : <FiMoon />}
            </button>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {showTopBar && (
          <motion.div
            className="w-full h-16 border-b-[1px] border-slate-700/20 flex justify-end items-center px-4 md:pr-8 overflow-x-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex space-x-4 md:space-x-6">
              {socialLinks.map(
                ({ href, label, title, Icon, colorClass, download }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative text-stone-900 hover:text-yellow-900 ${colorClass}`}
                    aria-label={label}
                    title={title}
                    download={download ? true : undefined}
                  >
                    <Icon size={isMobile ? 20 : 24} />
                    <Tooltip title={title} placement="bottom-start">
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs md:text-sm bg-black text-white p-1 md:p-2 rounded opacity-0 hover:opacity-10 transition-opacity duration-300">
                        {label}
                      </span>
                    </Tooltip>
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}

        {/* Children Content (Certificates will appear here) */}
        <div className="flex-1 p-4 md:p-6 ">{children}</div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
