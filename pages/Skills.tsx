import React from "react";

function Skills() {
  return (
    <div>
      <div className="flex-row items-center justify-center">
        <img
          src="https://skillicons.dev/icons?i=react,bootstrap,figma,tailwind,git,flutter,vue,docker,redis"
          alt="Skills 1"
          className="flex justify-center items-center mx-[20%] my-5"
        />
        <img
          src="https://skillicons.dev/icons?i=mysql,sass,nodejs,python,javascript,typescript,express,supabase,mongodb,fastapi,django,nextjs,php,postgresql,laravel"
          alt="Skills 2"
        />
        <br />
      </div>
    </div>
  );
}

export default Skills;
