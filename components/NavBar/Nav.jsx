'use client'
import React from "react";
import { RiHome3Line as Home } from "react-icons/ri";
import { PiWarningCircleBold as About } from "react-icons/pi";
import { MdOutlineWorkOutline as Projects } from "react-icons/md";
import { RiProfileLine as Resume } from "react-icons/ri";
import { MdOutlineContactSupport as Contact } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Mano from '@/assets/Mano.jpg';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();

  const getIconColor = (path) => pathname === path ? ' text-purple-heart-500' : 'text-gray-500';

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-14 w-[15%] h-screen border-r border-gray-300 dark:border-gray-800 sm:justify-around sm:items-end sm:w-full sm:flex-row sm:gap-0 sm:h-auto sm:bottom-0 fixed z-10">
        <div className=" ">
          <Image src={Mano} alt="Mano" width={40} height={40} className="rounded-full sm:hidden" />
        </div>
        <div className="flex flex-col justify-around h-[50%] text-[18px] sm:flex-row sm:w-full sm:h-auto sm:py-8 sm:items-end sm:backdrop-blur-2xl">
          <Link href="/">
            <Home className={`${getIconColor('/')} `} />
          </Link>
          <Link href="/about">
            <About className={`${getIconColor('/about')} `} />
          </Link>
          <Link href="/projects">
            <Projects className={`${getIconColor('/projects')} `} />
          </Link>
          <Link target="_blank" href="https://drive.google.com/file/d/1gZ2hI6mx0ilXc_iTdL35C8D8ayIVlbHa/view?usp=drive_link">
            <Resume className="text-gray-500 " />
          </Link>
          <Link href="https://cal.com/manojkumar20/ship-now">
            <Contact className="text-gray-500 " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
