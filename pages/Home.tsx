import React from "react";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <section className="flex items-center justify-center h-screen relative pt-[2rem]">
      <div className="text-right">
        <h1 className="text-neutral-300 mb-8 mt-36 text-lg sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-stone-300">
            Hello, I&apos;m Mela{" "}
          </span>
          <br />
          <span className="inline-block">
            <TypeAnimation
              sequence={[
                "UI Designer",
                1000,
                "Mobile Developer",
                1000,
                "FullStack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
      </div>
    </section>
  );
}

export default Home;
