import { FaLaptopCode } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { MdContactPage } from "react-icons/md";
import React from "react";
import { SiAboutdotme } from "react-icons/si";

// Define the type for each button's data
interface NavButton {
  label: string;
  icon: React.ReactNode;
}

const navButtons: NavButton[] = [
  { label: "Home", icon: <HiHome /> },
  { label: "About", icon: <SiAboutdotme /> },
  { label: "Skills", icon: <FaLaptopCode /> },
  { label: "Contact", icon: <MdContactPage /> },
];

interface NavbarProps {
  isVisible: boolean;
  onNavigate: (section: string) => void;
  scrollToHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isVisible,
  onNavigate,
  scrollToHome,
}) => {
  return (
    <nav
      className={`fixed z-[9999] backdrop-blur-lg bg-white/20 shadow-lg flex flex-col md:h-[20rem] h-[3rem] px-3 md:py-[3rem] py-4 md:w-[3.5rem] w-auto bottom-4 left-1/2 transform -translate-x-1/2 md:bottom-auto md:left-20 md:top-[30%] border-[#000] rounded-lg transition-all duration-300 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-full absolute"
      }`}
    >
      <div className="flex flex-row md:flex-col justify-center items-center space-x-12 md:space-x-0 md:space-y-12">
        {navButtons.map((button) => (
          <button
            key={button.label}
            className="text-black transform transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-6 hover:opacity-100 opacity-80"
            aria-label={button.label}
            onClick={() => {
              if (button.label === "Home") {
                scrollToHome();
              } else {
                onNavigate(button.label);
              }
            }}
          >
            {button.icon}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
