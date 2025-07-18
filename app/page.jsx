import Nav from "@/components/NavBar/Nav";
import TopNav from "@/components/NavBar/TopNav";
import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";
import Mano from "@/assets/Mano.jpg";
import Hero from "@/components/Home/Hero";
import Latest from "@/components/Projects/Latest";
import Songs from "@/components/Songs";
import Thank from "@/components/Thank";
import CLICopyComponent from "@/components/CLI";

export default function Home() {
  return (
    <div className=" pl-[20%] pr-[10%] sm:px-10 w-full sm:pb-24">
      <Hero />
      <div className=" flex sm:flex-col md:flex-col">
        <div className=" ">
          <CLICopyComponent />
          <Latest />
        </div>
        <div className=" flex flex-col gap-8">
          <Songs />
          <Thank />
        </div>
      </div>
    </div>
  );
}
