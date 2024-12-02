"use client";

import React, { useEffect, useState } from "react";
import { navLinks, socialLinks } from "./links";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  section: string;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ section, children }) => {
  const pathname = usePathname(); // Get the current pathname using usePathname
  const [showTopBar, setShowTopBar] = useState(true);

  // Toggle Top Bar visibility based on route
  useEffect(() => {
    // Check if the current pathname matches any navLinks href, hide the top bar if so
    if (navLinks.some((link) => link.href === pathname)) {
      setShowTopBar(false);
    } else {
      setShowTopBar(true);
    }
  }, [pathname]);

  return (
    <div className="flex flex-row text-gray-400">
      {/* Sidebar */}
      <div className=" col w-[8%] h-[60rem] border-r-2 p-4 py-[12rem] text-center">
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
      </div>

      {showTopBar && (
        <div className=" w-full h-20 border-b-2 flex justify-end items-center pr-8">
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
      )}

      {/* Render children here */}
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
