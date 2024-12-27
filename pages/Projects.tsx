"use client";

import React from "react";
import SectionHeading from "./SectionsHeading";
import Works from "./Works";
import { projectsData } from "@/lib/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <Works key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
