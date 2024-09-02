"use client";
import { disconnect } from "process";
import { HoverEffect } from "../components/ui/card-hover-effect";
import React from 'react';


export const lst = [
  {
    title: "Internity",
    description:
      "An open source application hub built to organize and track over 12,000 internship applications in one place. Built a resume screening similarity test that analyzes and compares your resume to each internship application using AI and NLP. ",
    link: "https://stripe.com",
  },
  {
    title: "JournAI",
    description:
      "A web/mobile app that offers students an interactive, AI-enhanced experience with their campus using Google Gemini and Google Maps API",
    link: "https://netflix.com",
  },
  {
    title: "Posture Detection Model",
    description:
      "Automates the Rapid Entire Body Assessment (REBA) to rapidly evaluate the risk of musculoskeletal disorders (MSD) caused by working in the industry.",
    link: "https://meta.com",
  },
  {
    title: "Moodvie",
    description:
      "Get suggested a movie based on your mood!",
    link: "https://google.com",
  },
];



const Projects = () => {
  return (
    <div>
        <div className="max-w-4xl mx-auto px-8 border-t border-zinc-800">
            <HoverEffect items={lst} />
        </div>
    </div>
  );
};

export default Projects;