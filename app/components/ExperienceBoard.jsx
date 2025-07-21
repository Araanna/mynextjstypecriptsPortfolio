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
    value: "3",
  },
  {
    metric: "Years",
    value: "3",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-6 px-4 w-full max-w-sm mx-auto">
      <div className="border border-purple-700/40 dark:border-gray-600 rounded-md py-2 px-1 flex flex-row flex-wrap items-center justify-evenly gap-y-2">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-1 min-w-[3.5rem]"
            >
              <h2 className="text-purple-800 dark:text-gray-900 text-base font-bold flex flex-row items-center">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-purple-800 dark:text-gray-900 text-base font-bold px-0.5"
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
              <p className="text-purple-600 dark:text-gray-900 text-xs mt-0.5">
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