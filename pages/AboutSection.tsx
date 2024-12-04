"use client";

import React, { useState, useTransition } from "react";

import TabButton from "../app/components/TabButton";

type Tab = {
  title: string;
  id: string;
  content: React.ReactNode;
};

const TAB_DATA: Tab[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        {[
          "Node.js",
          "Express",
          "PostgreSQL",
          "Django",
          "FastAPI",
          "Typescript",
          "React",
        ].map((skill, index) => (
          <li key={index} className="hover:text-fuchsia-200">{skill}</li>
        ))}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc">
        {[
          {
            year: "2023-2024",
            details: [
              "Information Technology Major in System Development",
              "Cagayan de Oro College - PHINMA",
            ],
          },
          {
            year: "2021-2022",
            details: [
              "Information Technology",
              "Central Mindanao University",
            ],
            achievements: [
              "College Dean's Lister",
              "College of Information Science and Computing Organization Member",
              "University Scholar",
            ]
          },
        ].map((education, index) => (
          <li key={index} className="list-none mb-4">
            <div className="hover:text-fuchsia-200">{education.year}</div>
            <ul className="pl-5 list-none">
              {education.details.map((detail, i) => (
                <li key={i} className="hover:text-fuchsia-200">{detail}</li>
              ))}
              {education.achievements && (
                <ul className="pl-8 list-disc">
                  {education.achievements.map((achievement, j) => (
                    <li key={j} className="hover:text-fuchsia-200">{achievement}</li>
                  ))}
                </ul>
              )}
            </ul>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Certifications & Internships",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        {[
          "Linux Fundamentals",
          "TESDA UI Design Certificate",
          "Fligno Software Developer Intern",
        ].map((certification, index) => (
          <li key={index} className="hover:text-fuchsia-200">{certification}</li>
        ))}
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-zinc-600">
      <div className="ml-4 md:ml-0 text-left flex flex-col h-full ">
        <div className="flex justify-start mt-8">
          {TAB_DATA.map((tabItem) => (
            <TabButton
              key={tabItem.id}
              selectTab={() => handleTabChange(tabItem.id)}
              active={tab === tabItem.id}
            >
              {tabItem.title}
            </TabButton>
          ))}
        </div>
        <div className="mt-8 relative">
          <div className="absolute inset-0">{currentTab?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
