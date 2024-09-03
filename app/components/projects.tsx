"use client";
import { disconnect } from "process";
import { HoverEffect } from "../components/ui/card-hover-effect";
import React from 'react';


export const lst = [
  {
    title: "Internity",
    description:
      "Scan and analyze your resume to match it with over 12,000 internship opportunities.",
    link: "https://www.youtube.com/watch?v=bCA0JGNsMbw",
    github: "https://github.com/calebvergene/Internity",
    image: "/Internity.png"
  },
  {
    title: "JournAI",
    description:
      "Explore your campus using Google Gemini as a virtual tourguide.",
    link: "https://devpost.com/software/journai-wfska3",
    github: "https://github.com/arjundabir/snipe",
    image: "/JournAI.png"
  },
  {
    title: "Moodvie",
    description: "Get suggested a movie based on your mood.",
    link: "moodvieapi.vercel.app",
    github: "https://github.com/calebvergene/moodvie",
    image: "/Moodvie.png"
},
{
  title: "Posture Detection Model",
  description:
    "Automates the Rapid Entire Body Assessment (REBA) to rapidly evaluate the risk of musculoskeletal disorders (MSD).",
  github: "https://github.com/calebvergene/ErgoEye",
  image: "/PoseDetection.png"
},
];



const Projects = () => {
  return (
    <div className="border-t border-bg2 pt-12">
      <div className="flex row mt-4">
        <div className="mt-4 ml-4 rounded-lg p-2 pt-3 w-min">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-28 text-white/90">
            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
          </svg>
        </div>
        <div>
          <h2 className="font-Epilogue mt-9 ml-2 text-7xl font-semibold">Projects</h2>
          <h2 className="font-Epilogue ml-2 mt-1 text-l text-lighttext">Some of my work as a full stack developer</h2>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-8">
          <HoverEffect items={lst} />
      </div>
    </div>
  );
};

export default Projects;