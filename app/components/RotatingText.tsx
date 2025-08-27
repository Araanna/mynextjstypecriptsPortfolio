import React, { useEffect, useRef } from "react";

const RotatingText: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const skills = [
    "",
    "Passion",
    "Problem-solving",
    "Teamwork",
    "Creativity",
    "Integrity",
    "Diligence",
    "Adaptability",
    "Communication",
    "Innovation",
    "Leadership",
    "Patience",
  ];

  useEffect(() => {
    if (textRef.current) {
      const element = textRef.current;
      const chars = skills.join(" • ").split("");
      element.innerHTML = chars
        .map(
          (char, i) =>
            `<span style="position: absolute; transform: rotate(${
              i * (360 / chars.length)
            }deg); transform-origin: 0 ${
              window.innerWidth < 640 ? "100px" : "200px"
            }; font-size: ${window.innerWidth < 640 ? "10px" : "inherit"};">
              ${char}
            </span>`
        )
        .join("");
    }
  }, [skills]);

  return (
    <div className="relative flex items-center justify-center w-96 h-96  rounded-full">
      {/* Rotating text */}
      <div
        ref={textRef}
        className="absolute md:text-sm w-full h-full text-center text-md text-purple-900 hover:text-pink-900 animate-spin-slow"
      ></div>
    </div>
  );
};

export default RotatingText;
