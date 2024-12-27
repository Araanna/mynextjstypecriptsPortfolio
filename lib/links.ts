// links.ts

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { AiOutlineFileText } from "react-icons/ai";

export const navLinks = [
  { id: "works", href: "/Works", label: "Works" },
  { id: "values", href: "/Values", label: "Values" },
  { id: "interest", href: "/Interest", label: "Interest" },
  { id: "certificates", href: "/Certificate", label: "Certificates" },
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
