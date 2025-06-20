'use client'

import { useState } from 'react';
import { Instrument_Serif } from 'next/font/google';
import Landing from '@/components/Landing';
import NavLink from '../NavLink';

const is = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
})

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='h-screen w-full overflow-hidden relative'>
      <div>
        <NavLink />
      </div>

      <div className={`absolute inset-0 z-50 h-full w-full transition-all duration-500 ease-in-out ${
        isMenuOpen 
          ? 'transform md:-rotate-9 -rotate-20 md:translate-x-[24rem] translate-x-[14rem]  md:translate-y-[6rem] rounded-xl' 
          : ''
      }`}>
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <button 
          onClick={toggleMenu}
          className={`${is.className} absolute z-100 top-4 left-4 border-2 border-black px-2 py-1 rounded-full cursor-pointer text-neutral-6 font-bold transition-colors`}
        >
          {isMenuOpen ? 'close' : 'menu'}
        </button>
          <Landing />
        </div>
      </div>
    </div>
  )
}

export default Page