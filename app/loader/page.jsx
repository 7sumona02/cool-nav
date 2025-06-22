'use client';

import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function TunnelZoomExperience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Tunnel zoom effect
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.7], [1, 1, 0]);
  
  // Background darkens as we enter tunnel
  const bgOpacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  
  // Tunnel exit effect (next section)
  const exitScale = useTransform(scrollYProgress, [0.7, 1], [0.5, 1]);
  const exitOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

  return (
    <div className="relative h-full bg-black">
      {/* Tunnel entry section */}
      <div ref={containerRef} className="h-[300vh] w-full relative">
        {/* Dark overlay that increases as we zoom */}
        <motion.div 
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: bgOpacity }}
        />
        
        {/* Centered text that zooms in */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <motion.div 
            className="text-center z-20"
            style={{
              scale,
              opacity,
              transformOrigin: 'center center'
            }}
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white">
              ENTER THE TUNNEL
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Tunnel exit section */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-30"
        style={{
          opacity: exitOpacity,
          scale: exitScale,
          pointerEvents: exitOpacity.get() > 0.1 ? 'auto' : 'none',
          backgroundColor: 'hsl(240, 100%, 5%)'
        }}
      >
        <div className="max-w-2xl text-center p-8">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              transition: { delay: 0.3 }
            }}
          >
            WELCOME THROUGH
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              transition: { delay: 0.5 }
            }}
          >
            You've successfully navigated the tunnel.
            <br />
            The journey continues beyond...
          </motion.p>
        </div>
      </motion.div>

      {/* Final destination section */}
      <div className="relative h-screen w-full flex items-center justify-center bg-gradient-to-b from-black to-blue-900 z-10">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            NEW HORIZONS
          </h2>
          <p className="text-xl text-gray-300">
            You've arrived at your destination
          </p>
        </div>
      </div>
    </div>
  );
}