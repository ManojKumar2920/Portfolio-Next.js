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
            <p className=" font-semibold">Hey, I&apos;m <span className=" text-purple-heart-600">Manoj Kumar</span></p>
            <h1 className=" text-3xl sm:text-2xl font-bold py-2">I Develop end-to-end <span className=" inline-flex relative text-green-600 before:absolute before:inset-0 before:bg-green-300 dark:before:bg-green-500 before:opacity-10 before:-z-10 before:-rotate-1 before:translate-y-1/4">full-stack</span> digital marvels and <span className=" inline-flex relative text-pink-600 before:absolute before:inset-0 before:bg-pink-300 dark:before:bg-pink-500 before:opacity-10 before:-z-10 before:-rotate-1 before:translate-y-1/4">ai-powered solutions</span> that captivate hearts and propel businesses to new heights!</h1>
            <p className=" text-gray-500 ">A Passionate Software Engineer & Freelance Developer from Tamilnadu, India</p>
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
