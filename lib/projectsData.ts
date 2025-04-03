import Ecom from "../assets/images/UX Design.png";
import Game from "../assets/images/Into the Light.png";
import UIX from "../assets/images/E-commerce MockUP.png";

export const projectsData = [
  {
    title: "Game Development Studious Website",
    description:
      "A website for a game development studio, showcasing their portfolio and game art for the games we developed. The site features a modern design, responsive layout, and interactive elements.",
    tags: ["UNITY", "C#", "HTML", "Bootstrap 5", "PHP", "GIT", "Javascript"],
    imageUrl: Game,
    gameLink:
      "https://araanna.github.io/gamedev_website/game.html?name=Into%20the%20Light", // Link to the game
  },
  {
    title: "POS and Inventory System",
    description:
      "A POS and inventory system with an intuitive UI/UX design, allowing efficient inventory management and simplified operations. A first semester Project for finals",
    tags: ["Figma", "TypeScript", "Next.js", "Tailwind", "PHP", "GIT", "MYSQL"],
    imageUrl: Ecom,
    gameLink: null, // No link for this project
  },
  {
    title: "UI/UX Design and System Development",
    description:
      "E-commerce platform mockup and full-stack system development. Features include user-friendly design, dynamic product filtering, and integrated payment solutions.",
    tags: ["HTML", "CSS", "JavaScript", "AJAX", "RESTful APIs", "PHP", "MySQL"],
    imageUrl: UIX,
    gameLink: null, // No link for this project
  },
];
