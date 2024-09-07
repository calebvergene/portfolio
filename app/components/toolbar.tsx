"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Toolbar = () => {
  const buttonItems = ["About", "Experience", "Projects", "Skills", "Contact"];

  return (
    <motion.div
      className="px-2 top-0 fixed py-2 duration-300 z-30 border rounded-2xl mr-4 border-gray-300/35 bg-gray-700/15 backdrop-blur-md mt-3"
      initial={{ y: -70, opacity: 0, scale:0.7 }}
      animate={{ y: 0, opacity: 1, scale:1 }}
      transition={{
        duration: 0.3,
        ease: [0.34, 1.56, 0.64, 1], // Strong fast start and slow end
      }}
    >
      <div className="flex row justify-center space-x-3 font-Epilogue text-sm">
        {buttonItems.map((item, index) => (
          <motion.button
            key={item}
            className="bg-transparent p-2 py-2 px-4 text-md flex items-center justify-center rounded-lg hover:py-1 hover:pt-1.5 hover:mt-0.5 hover:bg-gray-500/55 hover:mb-1 duration-500"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.1, // Reduced duration for a faster animation
                    ease: [0.34, 1.56, 0.64, 1], // Same ease curve for fast start and slow end
                    delay: index * 0.15, // Slightly reduced stagger delay
                    opacity: {
                      delay: index * 0.05 + 0.1, // Adjusted opacity delay to fit within the shorter animation
                      duration: 0.1, // Reduced opacity duration for faster appearance
                    },
            }}
          >
            {item}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default Toolbar;
