'use client'

import { DM_Serif_Text, Inter } from "next/font/google";

const dms = DM_Serif_Text({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

import { useState } from 'react';
import NavLink1 from './NavLink1';
import { cn } from "@/lib/utils";

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
          ? 'transform md:-rotate-9 -rotate-20 md:translate-x-[24rem] translate-x-[14rem] md:translate-y-[6rem] rounded-2xl' 
          : 'bg-black'
      }`}>
        {/* <button 
          onClick={toggleMenu}
          className="cursor-pointer p-4 text-neutral-6 font-medium 00 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X className='w-5 text-white' /> : <AlignLeft className='w-5 text-white' />}
        </button> */}
        <div className='md:min-h-[40rem] min-h-[32rem] container max-w-6xl mx-auto flex flex-col md:items-center justify-start text-white md:px-0 px-6 lowercase pt-10 font-[CalSans]'>
          <div className='md:text-[7.4rem] text-4xl tracking-tight mb-2'>not for <br className='md:hidden' /> <span className={`${dms.className} italic`}>everyone.</span> clearly</div>

          <div className={cn('font-extralight md:text-2xl text-lg container mx-auto flex justify-between', `${inter.className}`)}>
            <div>usa</div>
            <div>india</div>
            <div>dubai</div>
          </div>

           <div className={`md:text-3xl text-xl container max-w-6xl mx-auto flex flex-col items-end font-extrabold mt-3 duration-500 ease-in-out tracking-wider ${isMenuOpen ? 'md:-translate-x-72 -translate-x-40' : '-translate-x-20'}`}>
            <div onClick={toggleMenu} className='cursor-pointer -translate-x-6'><span className='font-medium font-serif italic text-sm pr-1'>(08)</span>menu</div>
            <div><span className='font-medium font-serif italic text-sm pr-1'>(01)</span>sign up/in</div>
            <div className='translate-x-14'><span className='font-medium font-serif italic text-sm pr-1'>(01)</span>instagram</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page