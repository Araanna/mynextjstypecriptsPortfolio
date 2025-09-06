"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { navLinks, socialLinks } from "../../lib/links.ts";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useThemeStore } from "../store/themeStore.ts";

interface SidebarProps {
  section: string;
  children?: React.ReactNode;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ section, children }) => {
  const pathname = usePathname();
  const [showTopBar, setShowTopBar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showVerticalNav, setShowVerticalNav] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  const { isDarkMode, toggleTheme, initializeTheme } = useThemeStore();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const homePage = pathname === "/";
    setIsHomePage(homePage);
    setShowTopBar(!navLinks.some((link) => link.href === pathname));
    setShowVerticalNav(!homePage);
  }, [pathname]);

  const textColor = isDarkMode ? "text-purple-300" : "text-purple-900";
  const borderColor = isDarkMode ? "border-purple-300" : "border-purple-900";
  const hoverBgColor = isDarkMode ? "hover:bg-purple-900/40" : "hover:bg-purple-900";
  const activeBgColor = isDarkMode ? "active:bg-purple-900/50" : "active:bg-purple-900/70";
  const hoverTextColr = isDarkMode ? "hover:text-purple-300" : "hover:text-white";

  return (
    <div className="flex flex-col md:flex-row">
      {/* Desktop Sidebar - Only show on non-home pages */}
      {!isMobile && !isHomePage && (
        <motion.div
          className={`w-20 h-screen p-4 flex flex-col justify-between items-center py-12 border-r-[1px] ${borderColor}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center space-y-8">
            <Link href="/">
              <span className={`text-2xl hover:opacity-90 ${textColor}`}>
                <FaHome />
              </span>
            </Link>
            <button
              onClick={toggleTheme}
              className={`text-2xl hover:opacity-90 ${textColor}`}
            >
              {isDarkMode ? <FiSun /> : <FiMoon />}
            </button>
            {/* NavLinks - Vertical on desktop */}
            {showVerticalNav && (
              <div className="flex flex-col items-center space-y-6 mt-4">
                {navLinks.map(({ id, href, label }) => (
                  <Link href={href} key={id}>
                    <span
                      className={`
                        cursor-pointer 
                        transition-all 
                        duration-200 
                        hover:scale-105 
                        text-[10px] 
                        font-semi 
                        px-1
                        py-2 
                        border 
                        rounded-md 
                        vertical-text 
                        font-medium
                        ${textColor} 
                        ${borderColor}
                        ${hoverBgColor}
                        ${activeBgColor}
                        ${hoverTextColr}
                        transform
                        w-6
                        h-18
                        flex
                        items-center
                        justify-center
                      `}
                    >
                      {label}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Mobile Navigation - Only show on non-home pages */}
      {isMobile && !isHomePage && (
        <motion.div
          className={`w-full h-16 p-8 flex justify-between items-center border-b-[1px] ${borderColor}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1 overflow-x-auto whitespace-nowrap hide-scrollbar">
            <div className="flex items-center space-x-4 ml-4 py-8">
              <Link href="/">
                <span className={`text-xl hover:opacity-90 ${textColor}`}>
                  <FaHome />
                </span>
              </Link>
              <button
                onClick={toggleTheme}
                className={`text-xl hover:opacity-90 ${textColor}`}
              >
                {isDarkMode ? <FiSun /> : <FiMoon />}
              </button>

              {showVerticalNav && (
                <ul className="flex items-center space-x-6 gap-4">
                  {navLinks.map(({ id, href, label }) => (
                    <li key={id}>
                      <Link href={href}>
                        <span
                          className={`
                            cursor-pointer 
                            transition-all 
                            duration-200    
                            text-[7px] 
                            font-semi 
                            px-1
                            py-1 
                            border-1 
                            border-solid 
                            rounded-lg
                            ${textColor} 
                            ${borderColor}
                            ${hoverBgColor}
                            ${activeBgColor}
                            transform
                            active:scale-95
                          `}
                        >
                          {label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </motion.div>
      )}

  
{/* Main Content */}
<div className="flex-1 flex flex-col">
  {showTopBar && (
    <motion.div
      className={`w-full h-16 flex items-center px-4 md:px-8 border-b-[1px] ${borderColor}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex items-center justify-end space-x-4 md:space-x-6">
        {/* Navigation links - Always visible */}
        <ul className="flex items-center space-x-2 md:space-x-4 lg:space-x-6 overflow-x-auto py-2 no-scrollbar">
          {navLinks.map(({ id, href, label }) => (
            <li key={id} className="flex-shrink-0">
              <Link href={href}>
                <span
                  className={`
                    cursor-pointer 
                    transition-all 
                    duration-200 
                    transform
                    text-[7px] 
                    md:text-xs
                    font-medium
                    px-1 
                    py-1 
                    md:px-1
                    md:py-1
                    border 
                    rounded-md 
                    ${textColor} 
                    ${borderColor} 
                    whitespace-nowrap
                    ${hoverBgColor}
                    ${activeBgColor}
                    ${hoverTextColr}
                    active:scale-95
                    flex
                    items-center
                    justify-center
                  `}
                >
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Home icon and theme toggle - Always visible */}
        <div className="flex items-center space-x-4 border-l ${borderColor} pl-4 md:pl-6">
          <Link href="/">
            <span className={`text-xl md:text-2xl hover:opacity-90 ${textColor} flex items-center justify-center`}>
              <FaHome />
            </span>
          </Link>
          <button
            onClick={toggleTheme}
            className={`text-xl md:text-2xl hover:opacity-90 ${textColor} flex items-center justify-center`}
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </motion.div>
  )}

  <div className="flex-1 p-4 md:p-6">{children}</div>
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
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};

export default Sidebar;