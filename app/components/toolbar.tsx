"use client";
import React from 'react';

const Toolbar = () => {
  return (
    <div
      className={'fixed top-0 left-0 w-full py-3 transition-colors duration-300 z-30 border-b border-gray-300/35 bg-black/35'}
    >
        <div className='flex row justify-center space-x-4'>
            <button className="bg-transparent p-2 py-2 px-4 text-md flex items-center justify-center rounded-lg hover:py-1 hover:mt-1 hover:bg-gray-500/55 hover:mb-1 duration-500">
                    About
            </button>
            <button className="bg-transparent p-2 py-2 px-4 text-md flex items-center justify-center rounded-lg hover:py-1 hover:mt-1 hover:bg-gray-500/55 hover:mb-1 duration-500">
                    Experience
            </button>
            <button className="bg-transparent p-2 py-2 px-4 text-md flex items-center justify-center rounded-lg hover:py-1 hover:mt-1 hover:bg-gray-500/55 hover:mb-1 duration-500">
                    Projects
            </button>
            <button className="bg-transparent p-2 py-2 px-4 text-md flex items-center justify-center rounded-lg hover:py-1 hover:mt-1 hover:bg-gray-500/55 hover:mb-1 duration-500">
                    Skills
            </button>
            <button className="bg-transparent p-2 py-2 px-4 text-md flex items-center justify-center rounded-lg hover:py-1 hover:mt-1 hover:bg-gray-500/55 hover:mb-1 duration-500">
                    Contact
            </button>
        </div>
    </div>
  );
};

export default Toolbar;