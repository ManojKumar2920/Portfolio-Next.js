import React from "react";
import ExperienceContent from "./ExperienceContent";
import Image from "next/image";

const Experience = () => {
  return (
    <div className=" w-[70%] sm:w-full">
      <div>
        <h1 className=" font-bold text-[18px] pb-6">Work Experience</h1>
        <div>
          {ExperienceContent.map((experience, index) => (
            <div
              key={index}
              className=" flex justify-around gap-8 sm:justify-center h-auto w-full sm:w-full  items-start py-4"
              
            >
              <div className={`flex items-start  before:absolute before:left-[20%] sm:before:left-8 before:h-[30%] before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-10 ${
                    index === ExperienceContent.length - 1
                      ? "before:h-[1%] before:translate-y-10"
                      : ""
                  }`}>
                <div className=" absolute left-[20%] sm:left-8 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
                  <Image
                    src={experience.image}
                    alt=""
                    width={40}
                    height={40}
                    className=" rounded-full"
                  />
                </div>
              </div>
              <div className=" w-[80%]">
                <p className=" text-[10px] text-gray-500 py-2">
                  {experience.duration}
                </p>
                <h1 className=" font-bold text-base">{experience.title}</h1>
                <p className=" font-medium text-sm">{experience.company}</p>
                <p className=" text-[12px] text-gray-500">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
