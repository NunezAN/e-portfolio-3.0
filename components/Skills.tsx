import React from "react";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:glex-row max-w-[1200px] xl:px-10 sm:min-h-screen justify-center  mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        THIS IS MY TECH STACK
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-0 md:gap-5 md:gap-y-8 xl:gap-y-8 xl:mt-20 md:mt-20 mt-20 sm:mt-8">
        <Skill
          url="https://cdn-icons-png.flaticon.com/512/732/732212.png"
          name="HTML"
        />
        <Skill
          url="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
          name="CSS"
        />
        <Skill
          url="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
          name="JavaScript"
        />
        <Skill
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          name="React.JS"
        />
        <Skill
          url="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
          name="Redux"
        />
        <Skill
          url="https://services.google.com/fh/files/newsletters/firebase.png"
          name="Firebase"
        />
        <Skill
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
          name="TypeScript"
        />
        <Skill
          url="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
          name="Next.JS"
        />
        <Skill
          url="https://www.humhub.com/marketplace/rest/download-image"
          name="Rest APIs"
        />
        <Skill
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
          name="Tailwind CSS"
        />
        <Skill
          url="https://pnggrid.com/wp-content/uploads/2022/03/Github-Logo-White.png"
          name="GitHub"
        />
        <Skill
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
          name="VS Code"
        />
      </div>
    </div>
  );
}
