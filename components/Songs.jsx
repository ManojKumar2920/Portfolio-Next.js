import Image from 'next/image';
import React from 'react';
import SongsImg from '@/assets/songs.jpg'
import Link from 'next/link';

const Songs = () => {
  return (
    <div className='relative w-[280px] h-[150px] sm:w-auto md:w-auto odd:-rotate-1 even:-rotate-1 mt-10 '>
      <div 
        className='absolute inset-0 bg-cover bg-center rounded-2xl shadow-lg p-4' 
        style={{ backgroundImage: `url(${SongsImg.src})` }}
      ></div>
      <Link href={'https://open.spotify.com/playlist/65emqn6pxyw3jcbu7IFHQH?si=d079050da3324d7e'} className='absolute inset-0 bg-black bg-opacity-50 rounded-2xl flex items-center justify-center'>
        <div className='w-[250px] text-center text-white'>
          <h1 className='font-bold text-base'>
            <span className='font-medium'>playlist:</span> Obsessed with..!
          </h1>
          <p className='text-sm pt-2'>
            these songs are the ones that I was at least once in my life obsessed with. obsessed as in, listen to it on repeat kinda obsessed
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Songs
