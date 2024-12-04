"use client";

import React, { useEffect, useState } from "react";

import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Skills from "@/pages/Skills";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("About");
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("Home");
  };

  return (
    <div>
      <Navbar
        onNavigate={setActiveSection}
        isVisible={isVisible}
        scrollToHome={scrollToHome}
      />
      <Home />
      <div className="border border-1 "></div>
      <Sidebar section={activeSection}>
        <div className="absolute right-[8rem] h-screen transform translate-y-[5rem] translate-x-2 flex items-center justify-center md:transform md:-translate-x-1/4">
          {activeSection === "About" && <About />}
          {activeSection === "Skills" && <Skills />}
          {activeSection === "Contact" && <Contact />}
        </div>
      </Sidebar>
    </div>
  );
};

export default App;
