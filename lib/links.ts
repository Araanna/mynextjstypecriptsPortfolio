// links.ts

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { AiOutlineFileText } from "react-icons/ai";

export const navLinks = [
  { id: "about", href: "/about", label: "About" },
  { id: "skills", href: "/skills", label: "Skills" },
  { id: "works", href: "/works", label: "Works" },
  { id: "values", href: "/values", label: "Values" },
  { id: "interest", href: "/interest", label: "Interest" },
  { id: "certificates", href: "/certificate", label: "Certificates" },
  { id: "contact", href: "/contact", label: "Contact" },
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
    href: "/cv.pdf",
    label: "Resume",
    title: "Resume",
    Icon: AiOutlineFileText,
    colorClass: "hover:text-red-100",
    download: true,
  },
];
