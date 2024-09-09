"use client";
import React from 'react';
import { FaPython, FaJsSquare, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiCplusplus } from 'react-icons/si';
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiTailwindcss, SiFastapi, SiFlask, SiMongodb, SiPostgresql, SiMysql, SiDjango } from "react-icons/si";
import { IoMailOutline } from "react-icons/io5";


const languages = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
  ];

  const frameworks = [
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "Django", icon: <SiDjango /> }, // Django Icon
    { name: "SQLAlchemy", icon: <FaPython /> }, // Placeholder using Python icon (SQLAlchemy is Python-based)
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "SQL", icon: <SiMysql /> }, // General SQL Icon (MySQL as placeholder)
  ];

const Skills = () => {
  return (
    <div className=" border-bg2 pt-24 max-w-7xl w-full">
      <div className="max-w-7xl mx-auto px-8 flex items-center mb-6">
        <div className="rounded-lg p-4 bg-bg2 shadow-lg ml-0 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10 text-white/90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
        </div>
        <div className="ml-4">
          <h2 className="font-Epilogue text-6xl mt-3 font-semibold text-white/90">
            Skills
          </h2>
          <h2 className="font-Epilogue mt-1 text-xl text-lighttext">
            My developer toolkit.
          </h2>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-8 mt-10 border-b border-lighttext/30 pb-6">
      <div className="overflow-hidden flex justify-center">
    <div className="flex flex-wrap justify-center items-center">
        {languages.map((language) => (
            <button
                key={language.name}
                className="inline-flex items-center font-Epilogue text-3xl px-2 border-lighttext text-slate-200 border-2 p-1.5 rounded-lg m-1 hover:border-emerald-500 duration-500 hover:text-white hover:bg-emerald-950/80"
            >
                {language.icon}
                <span className="text-lg pt-0.5 pl-1.5">{language.name}</span>
            </button>
        ))}
    </div>
</div>

</div>
<div className="max-w-4xl mx-auto px-8 mt-6 border-lighttext/30">
  <div className="overflow-hidden flex justify-center">
    <div className="flex flex-wrap justify-center items-center">
        {frameworks.map((language) => (
            <button
                key={language.name}
                className="inline-flex items-center font-Epilogue text-3xl px-2 border-lighttext text-slate-200 border-2 p-1.5 rounded-lg m-1 hover:border-emerald-500 duration-500 hover:text-white hover:bg-emerald-950/80"
            >
                {language.icon}
                <span className="text-lg pt-0.5 pl-1.5">{language.name}</span>
            </button>
        ))}
    </div>
  </div>
</div>
<div className="max-w-7xl mx-auto px-8 flex items-center mb-14 mt-32">
        <div className="rounded-lg p-4 text-4xl bg-bg2 shadow-lg ml-0 mb-3">
          <IoMailOutline />
        </div>
        <div className="ml-4">
          <h2 className="font-Epilogue text-6xl mt-3 font-semibold text-white/90">
            Contact
          </h2>
          <h2 className="font-Epilogue mt-1 text-xl text-lighttext">
            Lets schedule a virtual coffee chat!
          </h2>
        </div>
      </div>
    </div>
  );
};


export default Skills;