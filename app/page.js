'use client'

import { useState } from 'react';
import NavLink from './NavLink';
import { Instrument_Serif } from 'next/font/google';

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
    <div className='min-h-screen w-full bg-neutral-400 relative'>
      <div>
        <NavLink />
      </div>

      <div className={`absolute inset-0 bg-white z-50 h-full w-full transition-all duration-500 ease-in-out ${
        isMenuOpen 
          ? 'transform md:-rotate-12 -rotate-20 md:translate-x-[26rem] translate-x-[14rem]  md:translate-y-[4.5rem]' 
          : ''
      }`}>
        <button 
          onClick={toggleMenu}
          className="cursor-pointer p-4 text-neutral-6 font-medium 00 rounded-lg transition-colors"
        >
          {isMenuOpen ? 'close' : 'menu'}
        </button>
        <div className='md:min-h-[40rem] min-h-[32rem] flex items-center justify-center'>
          <h1 className={`text-4xl ${is.className}`}>c()nt</h1>
        </div>
      </div>
    </div>
  )
}

export default Page