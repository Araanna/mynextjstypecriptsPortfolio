import AMS from "../assets/images/AMS.png";
import Game from "../assets/images/Game.png";
import myPortfolio from "../assets/images/Portfolio.png";
import GSD from "../assets/images/GSD.png";
import ExpenseTracker from "../assets/images/Mobile.png"


export const projectsData = [
  {
    title: "Game Development Studio Website",
    description:
      "A website for a game development studio, showcasing their portfolio and game art for the games we developed. The site features a modern design, responsive layout, and interactive elements.",
    tags: ["UNITY", "C#", "HTML", "Bootstrap 5", "PHP", "GIT", "Javascript"],
    imageUrl: Game,
    gameLink: "https://araanna.github.io/gamedev_website/game.html?name=Into%20the%20Light",
    githubLink: "https://github.com/Araanna/gamedev_website"
  },
  {
    title: "Attendance Monitoring System",
    description:
      "Built a comprehensive attendance monitoring system for a school, featuring real-time attendance tracking, student profiles, and reporting functionalities. The system is designed to monitor attendance and improve administrative efficiency.",
    tags: ["Figma", "Laravel", "VueJS", "Tailwind", "Typescript", "GIT", "MYSQL"],
    imageUrl: AMS,
    gameLink: null,
    githubLink: "https://github.com/Araanna/IT-DAYS-WEB-APP"
  },
  {
    title: "myPortfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, and experiences. The site is designed to highlight my work and provide a platform for potential employers or clients to view my capabilities.",
    tags: ["NextJS", "Typescript", "Tailwind", "Cloudinary", "GIT", "Framer Motion"],
    imageUrl: myPortfolio,
    gameLink: null,
    githubLink: "https://github.com/Araanna/mynextjstypecriptsPortfolio"
  },
  {
    title: "General Service Department PHINMA-COC",
    description:
      "As a Co-Developer(Frontend)- A capstone project website for the General Service Department of PHINMA Cagayan de Oro College, developed for easy monitoring and reservation of venues, vehicle, and equipment of the school.",
    tags: ["ReactJS", "PHP", "Tailwind", "RESTAPI", "GIT", "Framer Motion"],
    imageUrl: GSD,
    gameLink: null,
    githubLink: "https://github.com/Araanna/mynextjstypecriptsPortfolio"
  },
  {
  title: "Student Expense Tracker - PHINMA COC",
  description:
    "As a Fullstack Developer (Mobile App) - My pet project mobile application designed for PHINMA Cagayan de Oro College students to track and manage their daily expenses. Built with Flutter for the frontend and FastAPI for the backend, it provides an intuitive interface with secure REST API integration for data storage and retrieval.",
  tags: ["Flutter", "FastAPI", "REST API","mySQL", "GIT"],
  imageUrl: ExpenseTracker, 
  gameLink: null,
  githubLink: "https://github.com/Araanna/FASTAPI-PHINMA-COC-STUDENT-EXPENSE-TRACKER" // replace with your repo link
}

];
