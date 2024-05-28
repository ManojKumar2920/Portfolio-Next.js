import About from "@/components/About/About";
import Connect from "@/components/About/Connect";
import Experience from "@/components/About/Experience";
import Songs from "@/components/Songs";
import Thank from "@/components/Thank";
import React from "react";

export const metadata = {
  title: 'About',
};

const page = () => {
  return (
    <div className=" pl-[20%] pr-[10%] sm:px-10 w-full sm:pb-24">
      <About />
      <div className=" flex sm:flex-col">
        <Experience />
        <div className=" flex flex-col gap-8">
          <Songs />
          <Thank />
        </div>
      </div>
      <Connect />
    </div>
  );
};

export default page;
