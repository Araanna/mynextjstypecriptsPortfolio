import ExperienceBoard from "@/app/components/ExperienceBoard";
import React from "react";

function Home() {
  return (
    <section className="flex-col items-center justify-center h-screen relative pt-[2rem]">
      <div className="text-center">
        <h1 className="text-neutral-300 my-8 mt-36 text-lg sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-stone-300">
            Hello, I&apos;m Mela{" "}
          </span>
          <br />
          <div className="relative overflow-hidden h-12">
            <div className="relative flex flex-col animate-flip">
              <div className="flex justify-center items-center h-12 text-white p-1">
                FullStack Developer
              </div>
              <div className="flex justify-center items-center h-12 text-white p-1">
                Mobile Developer
              </div>

              <div className="flex justify-center items-center h-12 text-white p-1">
                UI Designer
              </div>
            </div>
          </div>
        </h1>
      </div>
      <ExperienceBoard />
    </section>
  );
}

export default Home;
