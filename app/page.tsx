"use client";

import React, { useEffect, useRef, useState } from "react";

import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Footer from "./components/Footer";
import Home from "@/pages/Home";
import Navbar from "./components/NavBar";
import ScrollingText from "./components/scrollingText";
import Sidebar from "./components/Sidebar";
import Skills from "@/pages/Skills";
import AboutSection from "@/pages/AchievementSection";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("About");
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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

  const handleNavigate = (section: string) => {
    setActiveSection(section);

    if (section === "Home") {
      scrollToHome();
      return;
    }

    if (section === "Skills") {
      setTimeout(() => {
        if (skillsRef.current) {
          skillsRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    setTimeout(() => {
      if (sidebarRef.current) {
        const sidebarRect = sidebarRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const scrollTarget =
          window.scrollY +
          sidebarRect.top -
          viewportHeight / 1.9 +
          sidebarRect.height / 2;

        window.scrollTo({
          top: scrollTarget,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <>
      <Navbar
        onNavigate={handleNavigate}
        isVisible={isVisible}
        scrollToHome={scrollToHome}
      />
      <Home setActiveSection={setActiveSection} />
      <ScrollingText />

      <Sidebar section={activeSection}>
        <div
          ref={sidebarRef}
          className="relative w-full min-h-[calc(100vh-8rem)] md:min-h-[80vh] flex items-center justify-center px-4"
        >
          <div className="w-full mx-auto py-8 md:py-0">
            {activeSection === "About" && <About />}
            {activeSection === "Contact" && <Contact />}
            {(activeSection === "Skills" || activeSection === "Game") && (
              <>
                {activeSection === "Skills" && <About />}
                {activeSection === "Game" && <About />}
              </>
            )}
          </div>
        </div>
      </Sidebar>

      <div ref={skillsRef}>
        <Skills />
        <AboutSection />
      </div>
      <Footer />
    </>
  );
};

export default App;