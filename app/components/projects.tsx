"use client";
import { disconnect } from "process";
import { HoverEffect } from "../components/ui/card-hover-effect";
import React from 'react';


export const lst = [
  {
    title: "Internity",
    description:
      "Scan and analyze your resume to match it with over 12,000 internship opportunities.",
    link: "https://stripe.com",
    image: "/Internity.png"
  },
  {
    title: "JournAI",
    description:
      "Explore your campus using Google Gemini as a virtual tourguide.",
    link: "https://netflix.com",
    image: "/JournAI.png"
  },
  {
    title: "Moodvie",
    description: "Get suggested a movie based on your mood.",
    link: "https://google.com",
    image: "/Moodvie.png"
},
{
  title: "Posture Detection Model",
  description:
    "Automates the Rapid Entire Body Assessment (REBA) to rapidly evaluate the risk of musculoskeletal disorders (MSD).",
  link: "https://meta.com",
  image: "/PoseDetection.png"
},
];



const Projects = () => {
  return (
    <div className="border-t border-bg2 pt-12">
      <div className="flex row mt-4">
        <div className="mt-4 ml-4 border rounded-lg p-2 pt-3 w-min border-bg2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-16 text-white/90">
            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
          </svg>
        </div>
        <div>
          <h2 className="font-Epilogue mt-8 ml-2 text-5xl font-semibold">Projects</h2>
          <h2 className="font-Epilogue ml-2 mt-1 text-sm text-lighttext">Some of my work as a full stack developer</h2>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-8">
          <HoverEffect items={lst} />
      </div>
    </div>
  );
};

export default Projects;