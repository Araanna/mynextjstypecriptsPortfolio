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
    <div className="py-6 px-4 w-full max-w-sm mx-auto"> {/* Reduced max-width and padding */}
      <div className="border-[#000000] border rounded-md py-2 px-1 flex flex-row flex-wrap items-center justify-evenly gap-y-2"> {/* Reduced padding and gap */}
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-1 min-w-[3.5rem]" // Reduced min-width
            >
              <h2 className="text-slate-700 text-base font-bold flex flex-row items-center"> {/* Reduced text size */}
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-slate-700 text-base font-bold px-0.5" // Reduced text size
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
              <p className="text-[#45443f] text-xs mt-0.5"> {/* Reduced text size and margin */}
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