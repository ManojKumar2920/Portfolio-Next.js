'use client'
import React from "react";
import ProjectContent from "./Content";
import Image from "next/image";
import Link from "next/link";
import { Tilt } from "@jdion/tilt-react";

const Projects = () => {
  return (
    <div className=" w-[70%] md:w-full ">
      <div>
        <h1 className=" font-semibold text-3xl">
          See my peice of works here..!
        </h1>
      </div>
      <div className=" flex flex-wrap md:flex-col items-center gap-8 py-8 sm:justify-center">
        {ProjectContent.map((project, index) => (
          <Tilt
            key={index}
            className="  bg-white border-slate-200 rounded-lg shadow-sm w-[45%] md:w-full border dark:border-slate-800 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 odd:-rotate-1 even:rotate-1 hover:rotate-1 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
          >
            <Link href={project.link}>
              <div className="p-2">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={50}
                  className=" rounded-full border-gray-200 dark:border-gray-800"
                ></Image>
                <h2 className="text-md font-bold mb-2 py-2">{project.title}</h2>
                <p className=" text-[12px] text-gray-500 ">
                  {project.description}
                </p>
                <div className=" pt-2 text-purple-heart-500 pl-[90%]">
                  {project.icon}
                </div>
              </div>
            </Link>
          </Tilt>
        ))}
      </div>
      
    </div>
  );
};

export default Projects;
