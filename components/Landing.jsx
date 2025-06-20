'use client'
import { Instrument_Serif } from 'next/font/google';
import { easeInOut, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { WordsPullUp } from '@/components/Words';
import { useState } from 'react';
import { MoveDown } from 'lucide-react';

const is = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
})

const Landing = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Optional: If you want to ensure the image is fully loaded before starting animation
  const [imageAnimationComplete, setImageAnimationComplete] = useState(false);

  return (
    <div className={cn('min-h-screen w-full flex flex-col items-center justify-center bg-neutral-100 rounded-xl relative', `${is.className}`)}>
      <motion.img 
        initial={{opacity: 0, scale: 0.95, filter: 'blur(10px)'}}
        animate={{opacity: 1, scale: 1, filter: 'blur(0px)'}}
        transition={{duration: 0.6, ease: easeInOut}}
        onLoad={() => setImageLoaded(true)}
        onAnimationComplete={() => setImageAnimationComplete(true)}
        src='/rose.png'
        alt='rose'
        className='absolute inset-0 translate-y-20 translate-x-[23rem] w-[45rem]' 
      />
      
      <div>
        <WordsPullUp
          text='We create & grow brands made to share.'
          // Pass the animation trigger condition as a prop
          animate={imageAnimationComplete}
        />
      </div>

      <motion.div 
      initial= {{
        opacity: 0
      }}
      animate= {{
        opacity: 1
      }}
      transition={{
        duration: 0.3,
        ease: easeInOut,
        delay: 2
      }}
      className='mt-10 flex flex-col justify-center items-center'>
        <div className='animate-bounce'><MoveDown className='w-20 mb-2.5' /></div>
        <button className='cursor-pointer border-2 border-black px-2 py-1 font-extrabold rounded'>Scroll down</button>
      </motion.div>
    </div>
  )
}

export default Landing