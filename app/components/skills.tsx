"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaGithub, FaDocker, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiNextdotjs, SiExpress, SiTailwindcss, SiFastapi, SiFlask, SiMongodb, SiPostgresql, SiMysql, SiDjango, SiHeroku, SiFirebase, SiStripe, SiAmazons3, SiSass, SiHuggingface, SiEslint, SiRedux, SiSocketdotio, SiMailchimp } from 'react-icons/si';
import { IoMailOutline } from 'react-icons/io5';

// Language, Frameworks, and Tools lists
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
    { name: "Django", icon: <SiDjango /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "Heroku", icon: <SiHeroku /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Stripe", icon: <SiStripe /> },
    { name: "AWS S3", icon: <SiAmazons3 /> },
    { name: "Sass", icon: <SiSass /> },
    { name: "Hugging Face", icon: <SiHuggingface /> },
];

const tools = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Github", icon: <FaGithub /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "EsLint", icon: <SiEslint /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Figma", icon: <FaFigma /> },
];

// Animation Variants
const headingVariant = {
    hidden: { x: -20, opacity: 0 },  // Start closer to the left
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } }
};

const buttonContainerVariant = {
    visible: {
        transition: {
            staggerChildren: 0.05,  // Delay each button by 0.05s
        },
    },
};

const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },  // Start with 0 opacity
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

// Skills Component
const Skills = () => {
    return (
        <div className=" border-bg2 pt-24 max-w-7xl mt-6 w-full" id='skills'>
            <div className="max-w-7xl mx-auto px-8 flex items-center mb-6">
                <div className="rounded-lg p-4 bg-bg2 shadow-lg ml-0 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10 text-white/90">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
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

            <div className="max-w-4xl mx-auto px-8 mt-16 mb-4 pb-2 border-l-2 border-white/10">

                {/* Programming Languages Heading */}
                <motion.h2
                  className="font-Epilogue text-3xl mb-3 text-white/95 font-semibold underline decoration-wavy decoration-emerald-500"
                  variants={headingVariant}
                  style={{ textUnderlineOffset: '7.8px' }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Programming Languages
                </motion.h2>

                <motion.div
                    className="overflow-hidden flex flex-wrap items-center"
                    variants={buttonContainerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {languages.map((language) => (
                        <motion.button
                            key={language.name}
                            variants={buttonVariant}
                            className="inline-flex items-center font-Epilogue px-2 border-lighttext text-slate-300 border-2 p-1.5 rounded-lg m-1 hover:border-emerald-500 duration-500 hover:text-white hover:bg-emerald-950/80"
                        >
                            <span className='text-2xl'>{language.icon}</span>
                            <span className="pt-0.5 pl-1.5">{language.name}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Frameworks Heading */}
                <motion.h2
                    className='font-Epilogue text-3xl font-semibold mb-3 text-white/95 mt-14 underline decoration-wavy  decoration-emerald-500'
                    variants={headingVariant}
                    style={{ textUnderlineOffset: '6px' }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Frameworks and Libraries
                </motion.h2>

                <motion.div
                    className="overflow-hidden flex flex-wrap items-center"
                    variants={buttonContainerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {frameworks.map((language) => (
                        <motion.button
                            key={language.name}
                            variants={buttonVariant}
                            className="inline-flex items-center font-Epilogue px-2 border-lighttext text-slate-300 border-2 p-1.5 rounded-lg m-1 hover:border-emerald-500 duration-500 hover:text-white hover:bg-emerald-950/80"
                        >
                            <span className='text-2xl'>{language.icon}</span>
                            <span className="pt-0.5 pl-1.5">{language.name}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Tools and Services Heading */}
                <motion.h2
                    className='font-Epilogue text-3xl font-semibold mb-3 text-white/95 mt-14 underline decoration-wavy decoration-emerald-500'
                    variants={headingVariant}
                    style={{ textUnderlineOffset: '6px' }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Tools and Services
                </motion.h2>

                <motion.div
                    className="overflow-hidden flex flex-wrap items-center"
                    variants={buttonContainerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {tools.map((language) => (
                        <motion.button
                            key={language.name}
                            variants={buttonVariant}
                            className="inline-flex items-center font-Epilogue px-2 border-lighttext text-slate-300 border-2 p-1.5 rounded-lg m-1 hover:border-emerald-500 duration-500 hover:text-white hover:bg-emerald-950/80"
                        >
                            <span className='text-2xl'>{language.icon}</span>
                            <span className="pt-0.5 pl-1.5">{language.name}</span>
                        </motion.button>
                    ))}
                </motion.div>
            </div>

            {/* Contact Section */}
            <div className="max-w-7xl mx-auto px-8 flex items-center mb-14 mt-32" id='contact'>
                <div className="rounded-lg p-4 text-4xl bg-bg2 shadow-lg ml-0 mb-3">
                    <IoMailOutline />
                </div>
                <div className="ml-4">
                    <h2 className="font-Epilogue text-6xl mt-3 font-semibold text-white/90">
                        Contact
                    </h2>
                    <h2 className="font-Epilogue mt-1 text-xl text-lighttext">
                      Let&#39;s schedule a virtual coffee chat!
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Skills;
