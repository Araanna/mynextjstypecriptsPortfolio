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
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Django</li>
        <li>FastAPI</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Information Technology Major in System Development</li>
        <li>Cagayan de Oro College - PHINMA </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Linux Fundamentals</li>
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
      <div className="flex flex-row justify-start mt-8">
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
      <div className="mt-8">{currentTab?.content}</div>
    </section>
  );
};

export default AboutSection;
