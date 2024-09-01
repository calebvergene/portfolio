"use client";
import React from 'react';

const Toolbar = () => {
  return (

        <div
        className={' px-2 top-0 fixed py-2 duration-300 z-30 border rounded-2xl mr-4 border-gray-300/35 bg-gray-700/15 backdrop-blur-md mt-3'}
    >
        <div className='flex row justify-center space-x-3 font-Epilogue text-sm'>
            <button className="bg-transparent p-2 py-2 px-4 text-md flex items-center justify-center rounded-lg hover:py-1 hover:pt-1.5 hover:mt-0.5 hover:bg-gray-500/55 hover:mb-1 duration-500">
                    About
            </button>
            <button className="bg-transparent p-2 py-2 px-4 text-md flex items-center justify-center rounded-lg hover:py-1 hover:pt-1.5 hover:mt-0.5 hover:bg-gray-500/55 hover:mb-1 duration-500">
                    Experience
            </button>
            <button className="bg-transparent p-2 py-2 px-4 text-md flex items-center justify-center rounded-lg hover:py-1 hover:pt-1.5 hover:mt-0.5 hover:bg-gray-500/55 hover:mb-1 duration-500">
                    Projects
            </button>
            <button className="bg-transparent p-2 py-2 px-4 text-md flex items-center justify-center rounded-lg hover:py-1 hover:pt-1.5 hover:mt-0.5 hover:bg-gray-500/55 hover:mb-1 duration-500">
                    Skills
            </button>
            <button className="bg-transparent p-2 py-2 px-4 text-md flex items-center justify-center rounded-lg hover:py-1 hover:pt-1.5 hover:mt-0.5 hover:bg-gray-500/55 hover:mb-1 duration-500">
                    Contact
            </button>
        </div>
    </div>
    
  );
};

export default Toolbar;