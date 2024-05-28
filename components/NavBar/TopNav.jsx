import React from "react";
import ThemeSwitch from "../ThemeSwitch";
import Link from "next/link";
import Mano from "@/assets/Mano.jpg";
import Image from "next/image";

const TopNav = () => {
  return (
    <div className=" w-screen">
      <div className=" flex w-full justify-end items-center px-10 py-4 sm:justify-between">
        <div className=" hidden sm:block">
          <Image
            src={Mano}
            width={40}
            height={40}
            className=" rounded-full"
          ></Image>
        </div>
        <div className=" flex items-center">
          <div className=" text-[20px]">
            <ThemeSwitch />
          </div>
          <div className=" bg-gradient-to-r from-purple-heart-300 to-purple-heart-600 rounded-full py-1 px-6 font-semibold hover:from-purple-heart-400 hover:to-purple-700">
            <Link href={"https://www.linkedin.com/in/manojkumar20/"}>Hire Me</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
