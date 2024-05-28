import React from 'react';
import { IoMdArrowRoundForward as Arrow } from "react-icons/io";

const Thank = () => {
  return (
    <div>
        <div className=' bg-white border-slate-200 rounded-lg shadow-sm border dark:border-slate-800 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 odd:rotate-1 even:-rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5'>
            <p className=' text-gray-500 text-[10px]'>&#128075; Thanks for visiting my site!</p>
            <h1 className=' font-bold text-sm py-2'>Glad to have you here.</h1>
            <p className=' text-purple-heart-500 text-sm flex items-center gap-2'>Send an email <Arrow /></p>
        </div>
    </div>
  )
}

export default Thank