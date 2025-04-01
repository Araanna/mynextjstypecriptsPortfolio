"use client";

import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "5",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "2",
  },
  {
    metric: "Awards",
    value: "8",
  },
  {
    metric: "Years",
    value: "3",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 sm:px-8 xl:px-16 w-full">
      <div className="border-[#313b2c] border rounded-md py-4 px-2 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full sm:w-auto px-2 sm:mx-4 my-2 sm:my-0"
            >
              <h2 className="text-slate-400 text-2xl sm:text-3xl md:text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-slate-400 text-2xl sm:text-3xl md:text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-sm sm:text-base">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
