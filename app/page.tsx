"use client";

import React, { useEffect, useState } from "react";

import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Footer from "./components/Footer";
import Home from "@/pages/Home";
import Navbar from "./components/NavBar";
import ScrollingText from "./components/scrollingText";
import Sidebar from "./components/Sidebar";
import Skills from "@/pages/Skills";
import Slide from "./components/Slide";

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
    <>
      <Navbar
        onNavigate={setActiveSection}
        isVisible={isVisible}
        scrollToHome={scrollToHome}
      />
      <Home setActiveSection={setActiveSection} />
      <ScrollingText />
      <Sidebar section={activeSection}>
        <div className="relative w-full min-h-[calc(100vh-8rem)] md:min-h-[80vh] flex items-center justify-center px-4">
          <div className="w-full  mx-[20rem] md:mx-auto  py-8 md:py-0">
            {activeSection === "About" && <About />}
            {activeSection === "Skills" && <Skills />}
            {activeSection === "Contact" && <Contact />}
          </div>
        </div>
      </Sidebar>

      <Slide />
      <Footer />
    </>
  );
};

export default App;
