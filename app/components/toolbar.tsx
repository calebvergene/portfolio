"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Toolbar = () => {
  const buttonItems = ["About", "Experience", "Projects", "Skills", "Contact"];

  return (
    <motion.div
      className="px-2 top-0 fixed py-2 duration-300 z-30 border rounded-2xl mr-4 border-gray-300/35 bg-gray-700/15 backdrop-blur-md mt-3"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.19, 1, 0.22, 1], // Strong fast start and slow end
      }}
    >
      <div className="flex row justify-center space-x-3 font-Epilogue text-sm">
        {buttonItems.map((item, index) => (
          <motion.button
            key={item}
            className="bg-transparent p-2 py-2 px-4 text-md flex items-center justify-center rounded-lg hover:py-1 hover:pt-1.5 hover:mt-0.5 hover:bg-gray-500/55 hover:mb-1 duration-500"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.19, 1, 0.22, 1], // Same fast start, slow end for each button
              delay: index * 0.2, // Delay based on the index for staggered effect
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
