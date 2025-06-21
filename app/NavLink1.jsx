'use client'
import { useState } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
    
const inter = Inter({
  weight: ['400','700'],
  subsets: ['latin'],
})

const NavLink1 = () => {
  const [activeBackground, setActiveBackground] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navGroups = [
    // First group: login, signup
    [
      { id: 'login', label: 'login', bgImage: 'https://cdn.cosmos.so/32512476-1801-4f87-90a1-315992c1bd16?format=jpeg' },
      { id: 'signup', label: 'signup', bgImage: 'https://cdn.cosmos.so/e8ed3d95-7b2d-4928-a17f-8056b30a78f7?format=jpeg' },
    ],
    // Gap
    [],
    // Second group: career to model for us
    [
      { id: 'career', label: 'career', bgImage: 'https://cdn.cosmos.so/6621858f-0c90-43ab-9fd0-06349b19ec69?format=jpeg'},
      { id: 'about us', label: 'about us', bgImage: 'https://cdn.cosmos.so/e5907622-53c1-4170-876f-7dfdf077f4f2?format=jpeg' },
      { id: 'membership', label: 'membership', bgImage: 'https://cdn.cosmos.so/8fadb35f-1245-4b57-8e00-3b77f2bf3c7c?format=jpeg' },
      { id: 'model for us', label: 'model for us', bgImage: 'https://cdn.cosmos.so/8fadb35f-1245-4b57-8e00-3b77f2bf3c7c?format=jpeg' },
    ],
    // Gap
    [],
    // Third group: socials
    [
      { id: 'instagram', label: 'instagram', bgImage: 'https://cdn.cosmos.so/32512476-1801-4f87-90a1-315992c1bd16?format=jpeg' },
      { id: 'youtube', label: 'youtube', bgImage: 'https://cdn.cosmos.so/e8ed3d95-7b2d-4928-a17f-8056b30a78f7?format=jpeg' },
      { id: 'linkedin', label: 'linkedin', bgImage: 'https://cdn.cosmos.so/6621858f-0c90-43ab-9fd0-06349b19ec69?format=jpeg'},
      { id: 'pinterest', label: 'pinterest', bgImage: 'https://cdn.cosmos.so/e5907622-53c1-4170-876f-7dfdf077f4f2?format=jpeg' },
    ]
  ];

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
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
                backgroundColor: '#171717',
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
        <ul className="flex flex-col p-8 text-[#2d2d2d]">
          {navGroups.map((group, groupIndex) => (
            <div key={`group-${groupIndex}`} className="flex flex-col">
              {group.map((item) => (
                <motion.li
                  key={item.id}
                  onHoverStart={() => {
                    setActiveBackground(item.bgImage);
                    setHoveredItem(item.id);
                  }}
                  onHoverEnd={() => {
                    setActiveBackground(null);
                    setHoveredItem(null);
                  }}
                >
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      "md:text-4xl text-2xl tracking-tighter md:px-4 py-2 transition-colors",
                      `${inter.className} font-black`,
                      hoveredItem === null || hoveredItem === item.id 
                        ? "text-neutral-100" 
                        : "text-[#2d2d2d]"
                    )}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              {/* Add gap between groups except after the last one */}
              {groupIndex < navGroups.length - 1 && (
                <div className="h-4"></div>
              )}
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavLink1;