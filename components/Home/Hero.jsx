import Image from "next/image";
import React from "react";
import Banner from "@/assets/banner.png";
import { BsGithub as Github } from "react-icons/bs";
import { FaLinkedin as Linkedin } from "react-icons/fa6";
import { BsInstagram as Insta } from "react-icons/bs";
import { LuMailOpen as Mail } from "react-icons/lu";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div>
        <div>
          <Image src={Banner} alt="Banner" width={500} className=" rounded-3xl"></Image>
        </div>
        <div className=" py-8">
            <p className=" font-semibold">Hey, I'm <span className=" text-purple-heart-600">Manoj Kumar</span></p>
            <h1 className=" text-3xl sm:text-2xl font-bold py-2">I Develop <span className=" text-green-600 bg-purple-heart-50 dark:bg-gray-800">full-stack</span> digital marvels that captivate hearts and propel businesses to new <span className=" text-pink-500">heights!</span></h1>
            <p className=" text-gray-500">A Passionate Software Engineer from Tamilnadu, India</p>
        </div>
        <div className=" text-[24px] text-gray-600 flex justify-start gap-6 items-center w-[50%]">
            <Link href={'https://github.com/ManojKumar2920'} className=" hover:text-gray-800 dark:hover:text-gray-400"><Github /></Link>
            <Link href={'https://www.linkedin.com/in/manojkumar20/'} className=" hover:text-gray-800 dark:hover:text-gray-400"><Linkedin /></Link>
            <Link href={'https://www.instagram.com/itsmano.dev'} className=" hover:text-gray-800 dark:hover:text-gray-400"><Insta /></Link>
            <Link href={'mailto:manojkumararumainathan@gmail.com'} className=" hover:text-gray-800 dark:hover:text-gray-400"><Mail /></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
