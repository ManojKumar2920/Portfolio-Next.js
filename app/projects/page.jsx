import Connect from '@/components/About/Connect'
import Projects from '@/components/Projects/Projects'
import Songs from '@/components/Songs'
import Thank from '@/components/Thank'
import React from 'react'

export const metadata = {
  title: 'Projects',
  description: "Let's check out the cool stuff I have made that helps people and businesses. Explore innovative AI applications, automated solutions, and responsive websites that deliver real-world value and drive success.",
  keywords: ["manoj kumar", "manojkumar", "software engineer", "manoj kumar software engineer", "manojkumar software engineer", "swe", "frontend developer", "gdsc lead", "coderscave", "full stack developer"],
  url: "/projects",
  image: "/meta.jpg",
};

const page = () => {
  return (
    <div className=' pl-[20%] pr-[5%] sm:px-10 w-full sm:pb-24'>
      <div className=' flex md:flex-col'>
        <Projects />
        <div className=" flex flex-col gap-8">
          <Songs />
          <Thank />
        </div>
      </div>
      <Connect />
    </div>
  )
}

export default page