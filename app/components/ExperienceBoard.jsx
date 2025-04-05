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
    <div className="py-6 px-4 w-full max-w-screen-sm mx-auto">
      <div className="border-[#000000] border rounded-md py-4 px-2 flex flex-row flex-wrap items-center justify-evenly gap-y-4">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-1 min-w-[4.5rem] sm:min-w-[5.5rem]"
            >
              <h2 className="text-slate-400 text-lg sm:text-xl md:text-2xl font-bold flex flex-row items-center">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-slate-400 text-lg sm:text-xl md:text-2xl font-bold px-0.5"
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
              <p className="text-[#ADB7BE] text-xs sm:text-sm md:text-base mt-1">
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
