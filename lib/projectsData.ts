import AMS from "../assets/images/AMS.png";
import Game from "../assets/images/Game.png";
import myPortfolio from "../assets/images/Portfolio.png";

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
    title: "Attendance Monitoring System",
    description:
      "Built a comprehensive attendance monitoring system for a school, featuring real-time attendance tracking, student profiles, and reporting functionalities. The system is designed to streamline attendance management and improve administrative efficiency.",
    tags: ["Figma", "Laravel", "VueJS", "Tailwind", "Typescript", "GIT", "MYSQL"],
    imageUrl: AMS,
    gameLink: null, // No link for this project
  },
  {
    title: "myPortfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, and experiences. The site is designed to highlight my work and provide a platform for potential employers or clients to view my capabilities.",
    tags: ["NextJS", "Typescript", "Tailwind", "Cloudinary", "GIT", "Framer Motion"],
    imageUrl: myPortfolio,
    gameLink: null, // No link for this project
  },
];