'use client'
import { Instrument_Serif } from 'next/font/google';
import {easeInOut, motion} from 'motion/react'
import { cn } from '@/lib/utils';
import { WordsPullUp } from '@/components/Words';

const is = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
})

const page = () => {
  return (
    <div className={cn('min-h-screen w-full flex items-center justify-center bg-neutral-100 relative', `${is.className}`)}>
      <motion.img 
      initial={{opacity: 0, scale: 0.95, filter: 'blur(10px)'}}
      animate={{opacity: 1, scale: 1, filter: 'blur(0px)'}}
      transition={{duration: 0.3, ease: easeInOut}}
      src='/rose.png'
      alt='rose'
      className='absolute inset-0 translate-y-24 translate-x-[24rem] w-[40rem]' />
      {/* <motion.h1 
      className='z-50 text-8xl font-extrabold text-center'>We create <br /> & grow  <br /> brands made  <br /> to share.</motion.h1> */}
     <div>
       <WordsPullUp
        text='We create & grow brands made to share.'
      />
     </div>
    </div>
  )
}

export default page