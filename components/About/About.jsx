import Image from "next/image";
import React from "react";
import Mano from "@/assets/Mano.jpg";

const About = () => {
  return (
    <div className=" pb-4">
      <div>
        <h1 className=" text-4xl font-bold py-4">
          Hi. I&apos;m{" "}
          <span className="text-purple-heart-500">Manoj Kumar 🤟</span>
        </h1>

        <Image src={Mano} alt="Mano" width={500} height={500}></Image>
      </div>
      <div>
        <h1 className=" font-bold text-[18px] pt-4">Short Bio</h1>

        <p className=" text-gray-500 text-sm py-2 font-medium">
          I'm a Software Engineer and Data Enthusiast based in Tamilnadu, India.
          I'm passionate about{" "}
          <span className=" text-purple-heart-500">
            building impactful and innovative tech solutions
          </span>{" "}
          and leveraging data to drive impactful solutions and making a
          difference through innovative tech. I'm a big advocate of open source
          software, and almost everything I build is{" "}
          <span className=" text-purple-heart-500">open source!</span> I love{" "}
          <span className=" text-purple-heart-500">educating others</span> about
          technology and programming. Let's connect and collaborate to push the
          boundaries of what's possible with data and tech!
        </p>
      </div>
    </div>
  );
};

export default About;
