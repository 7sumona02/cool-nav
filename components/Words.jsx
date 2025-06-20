"use client"
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export function WordsPullUp({
  text,
  className = '',
  animate = true, // Default to true if not provided
}) {
  const splittedText = text.split(' ');

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div 
      className="flex flex-wrap justify-center max-w-[40%] mx-auto" 
      ref={ref}
      style={{ lineHeight: '1.5' }}
    >
      {splittedText.map((current, i) => (
        <motion.span
          key={i}
          variants={pullupVariant}
          initial="initial"
          // Only animate if both in view AND the parent's animate prop is true
          animate={(isInView && animate) ? 'animate' : ''}
          custom={i}
          className={cn(
            'text-4xl font-bold tracking-tighter md:text-8xl',
            'pr-2 z-50 inline-block',
            className
          )}
        >
          {current === '' ? <span>&nbsp;</span> : current}
        </motion.span>
      ))}
    </div>
  );
}