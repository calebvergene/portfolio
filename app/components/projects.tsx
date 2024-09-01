"use client";
import { disconnect } from "process";
import { HoverEffect } from "../components/ui/card-hover-effect";
import React from 'react';


export const lst = [
  {
    title: "Stripe",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    link: "https://google.com",
  },
  {
    title: "Meta",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    link: "https://microsoft.com",
  },
];



const Projects = () => {
  return (
    <div>
        <div className="max-w-4xl mx-auto px-8">
            <HoverEffect items={lst} />
        </div>
    </div>
  );
};

export default Projects;