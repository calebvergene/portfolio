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
    title: "Chlorrophyl [HackMIT 24]",
    description:
      "Visualize solutions to urban heat islands in Google Street View using ControlNet v1.1 with Canny Edge.",
    link: "https://ballot.hackmit.org/project/nrxbx-dybbn-omneh-ziutg",
    github: "https://github.com/calebvergene/Chlorophyll-HackMIT",
    image: "/logo-title.png"
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
    title: "Posture Detection App",
    description:
      "Automate the Rapid Entire Body Assessment (REBA) to rapidly evaluate the risk of musculoskeletal disorders (MSD).",
    link: "https://drive.google.com/file/d/1jqB4vRLr67dKaf3-PdutNct6hhg3s3iu/view?usp=sharing",
    github: "https://github.com/calebvergene/ErgoEye",
    image: "/PoseDetection.png"
  },
  {
    title: "Moodvie",
    description: "Get suggested a movie based on your mood.",
    link: "https://moodvieapi.vercel.app",
    github: "https://github.com/calebvergene/moodvie",
    image: "/Moodvie.png"
},
];



const Projects = () => {
  return (
    <div className=" border-bg2 pt-16 max-w-7xl w-full" id="projects">
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
            Projects
          </h2>
          <h2 className="font-Epilogue mt-1 text-xl text-lighttext">
            Turning my ideas into code.
          </h2>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-8">
        <HoverEffect items={lst} />
      </div>
    </div>
  );
};


export default Projects;