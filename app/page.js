'use client'

import { useState } from 'react';
import { Instrument_Serif } from 'next/font/google';
import NavLink1 from './NavLink1';
import { AlignLeft, X } from 'lucide-react';

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
    <div className='min-h-screen w-full relative'>
      <div>
        <NavLink1 />
      </div>

      <div className={`absolute inset-0 bg-[#2d2d2d] z-50 h-full w-full transition-all duration-500 ease-in-out ${
        isMenuOpen 
          ? 'transform md:-rotate-9 -rotate-20 md:translate-x-[24rem] translate-x-[14rem] md:translate-y-[6rem] bg-[#2d2d2d] rounded-2xl' 
          : ''
      }`}>
        <button 
          onClick={toggleMenu}
          className="cursor-pointer p-4 text-neutral-6 font-medium 00 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X className='w-5 text-white' /> : <AlignLeft className='w-5 text-white' />}
        </button>
        <div className='md:min-h-[40rem] min-h-[32rem] container max-w-6xl mx-auto flex flex-col md:items-center justify-start text-white md:px-0 px-6'>
          <div className='font-semibold md:text-[6.7rem] text-4xl tracking-tight mb-1'>not for <br className='md:hidden' /> <span className='font-serif italic'>everyone.</span> clearly</div>

          <div className='text-2xl font-medium container mx-auto flex justify-between'>
            <div>usa</div>
            <div>india</div>
            <div>dubai</div>
          </div>

           <div className='md:text-3xl text-2xl container max-w-6xl mx-auto flex flex-col items-end font-extrabold mt-3 -translate-x-20'>
            <div className='-translate-x-6'><span className='font-medium font-serif italic text-sm pr-1'>(08)</span>menu</div>
            <div><span className='font-medium font-serif italic text-sm pr-1'>(01)</span>sign up/in</div>
            <div className='translate-x-14'><span className='font-medium font-serif italic text-sm pr-1'>(01)</span>instagram</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page