'use client'
import { useState } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { Instrument_Serif } from 'next/font/google';
import { cn } from '@/lib/utils';
    
const is = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
})

const NavLink = () => {
  const [activeBackground, setActiveBackground] = useState(null);

  const navItems = [
    { id: 'home', label: 'Home', bgImage: 'https://cdn.cosmos.so/32512476-1801-4f87-90a1-315992c1bd16?format=jpeg' },
    { id: 'about', label: 'About', bgImage: 'https://cdn.cosmos.so/e8ed3d95-7b2d-4928-a17f-8056b30a78f7?format=jpeg' },
    { id: 'services', label: 'Services', bgImage: 'https://cdn.cosmos.so/6621858f-0c90-43ab-9fd0-06349b19ec69?format=jpeg'},
    { id: 'portfolio', label: 'Portfolio', bgImage: 'https://cdn.cosmos.so/e5907622-53c1-4170-876f-7dfdf077f4f2?format=jpeg' },
    { id: 'contact', label: 'Contact', bgImage: 'https://cdn.cosmos.so/8fadb35f-1245-4b57-8e00-3b77f2bf3c7c?format=jpeg' },
  ];

  return (
    <div className="relative h-screen w-full bg-neutral-50 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute  inset-0 z-0">
        <AnimatePresence>
          {activeBackground ? (
            <motion.div
              key={activeBackground}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${activeBackground})`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: easeInOut }}
            />
          ) : (
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundColor: '#efefef',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: easeInOut }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex h-full items-center">
        <ul className="flex flex-col gap-6 md:gap-10 p-8 text-neutral-800">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              onHoverStart={() => setActiveBackground(item.bgImage)}
              onHoverEnd={() => setActiveBackground(null)}
              whileHover={{ scale: 1.02 }}
            >
              <a
                href={`#${item.id}`}
                className={cn("text-6xl uppercase tracking-tighter px-4 py-2 hover:text-neutral-100 transition-colors duration-300", `${is.className} font-black`)}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavLink;