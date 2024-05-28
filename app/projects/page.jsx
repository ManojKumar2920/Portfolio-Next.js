import Connect from '@/components/About/Connect'
import Projects from '@/components/Projects/Projects'
import Songs from '@/components/Songs'
import Thank from '@/components/Thank'
import React from 'react'

export const metadata = {
  title: 'Projects',
};

const page = () => {
  return (
    <div className=' pl-[20%] pr-[10%] sm:px-10 w-full sm:pb-24'>
      <div className=' flex sm:flex-col'>
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