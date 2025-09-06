"use client";

import React from "react";

const AboutSection: React.FC = () => {
  const educationData = [
    {
      details:
        "Bachelor of Science in Information Technology Major in System Development",
      institution: "Cagayan de Oro College - PHINMA",
      period: "2022-2026",
      achievements: [],
    },
    {
      details: "Information Technology",
      institution: "Central Mindanao University",
      period: "2021-2022",
      achievements: [
        "College Dean's Lister",
        "College of Information Science and Computing Organization Member",
        "University Scholar",
      ],
    },
  ];

  return (
    <section className="w-full sm:px-6 lg:px-8 max-w-[1200px] mx-auto overflow-visible px-4 py-8 sm:py-12">
      <div className="flex justify-start">
        <div className="inline-flex items-center text-xs font-semibold mb-6 px-2 py-1 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 bg-violet-500 text-white  border-none dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-900/30 cursor-pointer">
          <h1 className="text-center">Education</h1>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        {educationData.map((education, index) => (
          <div
            key={index}
            className="pb-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            {/* Degree and period on same line */}
            <h3 className="font-bold  text-purple-900 dark:text-purple-200">
              {education.details}
            </h3>

            <div className="flex flex-row sm:justify-between sm:items-center">
              <p className="text-base font-[8px] text-purple-800 dark:text-purple-200">
                {education.institution}
              </p>
              <span className="relative text-xs text-purple-500 dark:text-purple-400 mt-1 sm:mt-0 before:content-['•'] before:mr-1 before:text-purple-400 dark:before:text-purple-500">
                {education.period}
              </span>
            </div>

            {/* Achievements */}
            {education.achievements && education.achievements.length > 0 && (
              <div className="mt-4">
                <h1 className="font-xs text-purple-800 dark:text-purple-200 mb-2 text-sm">
                  Achievements:
                </h1>
                <ul className="pl-5 list-disc space-y-1">
                  {education.achievements.map((achievement, j) => (
                    <li
                      key={j}
                      className="text-purple-900 dark:text-purple-200 hover:text-purple-800 dark:hover:text-purple-500 text-xs"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
