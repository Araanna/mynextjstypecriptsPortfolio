// links.ts

import { FaBook, FaGithub, FaLinkedin } from "react-icons/fa";

export const navLinks = [
  { id: "works", href: "#works", label: "Works" },
  { id: "values", href: "#values", label: "Values" },
  { id: "interest", href: "#interest", label: "Interest" },
  { id: "resume", href: "#resume", label: "Resume" },
  { id: "certificates", href: "#certificates", label: "Certificates" },
];

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/melanie-abalde-0a363a31b/",
    label: "LinkedIn",
    title: "LinkedIn",
    Icon: FaLinkedin,
    colorClass: "hover:text-blue-300",
  },
  {
    href: "https://github.com/Araanna",
    label: "GitHub",
    title: "GitHub",
    Icon: FaGithub,
    colorClass: "hover:text-gray-100",
  },
  {
    href: "https://yourstory.com",
    label: "Story",
    title: "Story",
    Icon: FaBook,
    colorClass: "hover:text-green-100",
  },
];
