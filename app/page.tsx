"use client";

import React, { useEffect, useState } from "react";

import Home from "@/pages/Home";
import Navbar from "./components/NavBar";
import Pages from "./components/Pages";

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("About");
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Scroll to the top of the page (Home section) when Home is clicked
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("Home"); // Ensure the Home section is active (optional, but ensures consistency)
  };

  return (
    <div>
      <Navbar
        onNavigate={setActiveSection}
        isVisible={isVisible}
        scrollToHome={scrollToHome}
      />
      <Home />
      <Pages section={activeSection} />
    </div>
  );
};

export default App;
