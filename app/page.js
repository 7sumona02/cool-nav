'use client'

import { DM_Serif_Text, Inter } from "next/font/google";
import {easeInOut, motion} from 'motion/react'

const dms = DM_Serif_Text({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400","700"],
  subsets: ["latin"],
});

import { useState } from 'react';
import NavLink1 from './NavLink1';
import { cn } from "@/lib/utils";
import Link from "next/link";
import LetterSwapForward from "@/components/letter-swap-forward-anim";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div 
            initial={{
                opacity: 0,
                scale: 0.80,
                filter: 'blur(10px)'
            }}
            animate={{
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)'
            }}
            transition={{
                duration: 0.3,
                ease: easeInOut
            }}
    className='h-screen overflow-hidden w-full relative'>
      <div>
        <NavLink1 />
      </div>

      <div className={`absolute inset-0 bg-[#2d2d2d] z-50 h-full w-full transition-all duration-500 ease-in-out ${
        isMenuOpen 
          ? 'transform md:-rotate-9 -rotate-20 md:translate-x-[24rem] translate-x-[14rem] md:translate-y-[3.5rem] rounded-2xl' 
          : 'bg-black'
      }`}>
        <button 
          onClick={toggleMenu}
          className="cursor-pointer p-4 transition-colors"
        >
          {isMenuOpen ? <img src='/close.svg' className='w-5 invert' /> : ''}
        </button>
        <div className='md:min-h-[40rem] min-h-[32rem] pt-4 max-w-8xl mx-auto flex flex-col md:items-center justify-start text-white md:px-14 px-6 lowercase font-[CalSans]'>
          <div className='md:text-[8.2rem] text-4xl tracking-tight mb-2'>not for <br className='md:hidden' /> <span className={`${dms.className} font-black stroke-white italic`}>everyone.</span> clearly.</div>

          <div className={cn('font-extralight md:text-2xl text-lg container mx-auto flex justify-between', `${inter.className}`)}>
            <div>
               {/* <div class="group cursor-pointer flex flex-col -space-y-3 h-6.5 overflow-hidden relative">
                <div class="group-hover:-translate-y-6 group-hover:opacity-20 duration-300 ease-in-out">usa</div>
                <div class="group-hover:-translate-y-6 duration-300 ease-in-out relative">
                  <div>usa</div>
                </div>
                
              </div> */}
               <LetterSwapForward label="usa" staggerDuration={0} reverse={false} className='cursor-pointer' />
            </div>
            <div>
               {/* <div class="group cursor-pointer flex flex-col -space-y-3 md:h-6.5 h-5.5 overflow-hidden relative">
                <div class="group-hover:-translate-y-6 group-hover:opacity-20 duration-300 ease-in-out">india</div>
                <div class="group-hover:-translate-y-6 duration-300 ease-in-out relative">
                  <div>india</div>
                </div>
              
              </div> */}
              <LetterSwapForward label="india" staggerDuration={0} reverse={false} className='cursor-pointer' />
            </div>
           <div>
               {/* <div class="group cursor-pointer flex flex-col -space-y-3 md:h-6.5 h-5.5 overflow-hidden relative">
                <div class="group-hover:-translate-y-6 group-hover:opacity-20 duration-300 ease-in-out">dubai</div>
                <div class="group-hover:-translate-y-6 duration-300 ease-in-out relative">
                  <div>dubai</div>
                </div>
                
              </div> */}
              <LetterSwapForward label="dubai" staggerDuration={0} reverse={false} className='cursor-pointer' />
            </div>
          </div>
           <div className={`md:text-3xl text-lg container max-w-6xl mx-auto flex flex-col md:mt-0 mt-2 -space-y-2 items-end duration-500 ease-in-out tracking-tight ${isMenuOpen ? 'md:-translate-x-72 -translate-x-40' : '-translate-x-5.5'}`}>
            <div onClick={toggleMenu} className={`${inter.className} font-bold cursor-pointer -translate-x-6`}><span className={`font-medium font-serif italic text-sm pr-1 ${dms.className}`}>(08)</span>menu</div>
            <div className={`${inter.className} font-bold cursor-pointer`}><span className={`font-medium font-serif italic text-sm pr-1 ${dms.className}`}>(01)</span>sign up/in</div>
            <Link href='https://www.instagram.com/wear.cvnt/' target="_blank" className={`${inter.className} translate-x-8 font-bold cursor-pointer`}><span className={`font-medium font-serif italic text-sm pr-1 ${dms.className}`}>(01)</span>instagram</Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Page