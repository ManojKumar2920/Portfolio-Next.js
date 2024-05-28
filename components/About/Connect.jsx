import Link from 'next/link'
import React from 'react'

const Connect = () => {
  return (
    <div className=' pt-4 pb-14 w-[60%] sm:w-full'>
        <div>
            <h1 className=' font-bold text-[18px] py-4'>Let&apos;s Connect</h1>
            <p className=' text-gray-500 text-sm'>I&apos;m excited to connect with others via <Link href={'https://www.linkedin.com/in/manojkumar20/'} className=' text-purple-heart-500'>Linkedin</Link> and <Link href={'mailto:manojkumararumainathan@gmail.com'} className=' text-purple-heart-500'>mail</Link> to chat about projects and ideas. Currently, I am open to hearing about potential opportunities, discussing them with you and then potentially collaborating if it&apos;s a good fit.</p>
        </div>
    </div>
  )
}

export default Connect