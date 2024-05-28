import React from "react";
import { RiHome3Line as Home } from "react-icons/ri";
import { PiWarningCircleBold as About } from "react-icons/pi";
import { MdOutlineWorkOutline as Projects } from "react-icons/md";
import { RiProfileLine as Resume } from "react-icons/ri";
import { MdOutlineContactSupport as Contact } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Mano from '@/assets/Mano.jpg'

const Nav = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-14 w-[15%] h-screen border-r border-gray-300 dark:border-gray-800 sm:justify-around sm:items-end sm:w-full sm:flex-row sm:gap-0 sm:h-auto sm:bottom-0 fixed z-10">
        <div className=" ">
            <Image src={Mano} alt="Mano" width={40} height={40} className=" rounded-full sm:hidden"></Image>
        </div>
        <div className=" flex flex-col justify-around h-[50%] text-[18px] text-gray-500 sm:flex-row sm:w-full sm:h-auto sm:py-8 sm:items-end sm:backdrop-blur-2xl" >
          <Link href={"/"}>
            <Home  className=" hover:text-gray-700 dark:hover:text-gray-300 hover:transition ease-in-out duration-300"/>
          </Link>
          <Link href={"/about"}>
            <About  className=" hover:text-gray-700 dark:hover:text-gray-300 hover:transition ease-in-out duration-300"/>
          </Link>
          <Link href={"/projects/"}>
            <Projects  className=" hover:text-gray-700 dark:hover:text-gray-300 hover:transition ease-in-out duration-300"/>
          </Link>
          <Link href={"https://drive.google.com/file/d/175iLDWchyLqjasjtIkYGFiPTazteyDgm/view?usp=sharing"}>
            <Resume className=" hover:text-gray-700 dark:hover:text-gray-300 hover:transition ease-in-out duration-300" />
          </Link>
          <Link href={"mailto:manojkumararumainathan@gmail.com"}>
            <Contact  className=" hover:text-gray-700 dark:hover:text-gray-300 hover:transition ease-in-out duration-300"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
