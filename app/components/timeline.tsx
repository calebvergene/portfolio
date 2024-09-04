"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const CustomTimelineElement: React.FC<{
  date: string;
  title: string;
  subtitle: string;
  loc?: string; 
  description: string | string[];
  icon: string;
}> = ({ date, title, subtitle, loc, description, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: '-50px 0px', 
  });

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, rotate: 360 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const renderDescription = (desc: string | string[]) => {
    if (Array.isArray(desc)) {
      return desc.map((item, index) => (
        <p key={index} className="text-base leading-relaxed text-lighttext2">
          {item}
        </p>
      ));
    } else {
      return (
        <p className="text-base leading-relaxed text-lighttext2">
          {desc}
        </p>
      );
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      transition={{ duration: 0.7, ease: 'easeOut', type: 'spring' }}
      className="flex items-start mb-12"
    >
      {/* Icon */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={iconVariants}
        transition={{ duration: 0.6, ease: 'backInOut' }}
        className="w-12 h-12 mt-5 bg-bg2 text-white rounded-full flex items-center justify-center shadow-lg mr-6"
      >
        <img src={icon} className="object-cover h-fit rounded-xl " />
        
      </motion.div>

      {/* Content */}
<motion.div
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={contentVariants}
  transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut', type: 'spring' }}
  className="bg-bg2 text-white/90 p-8 rounded-lg shadow-2xl max-w-3xl hover:-1 duration-700"
>
  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-2">
    <div className="order-2 md:order-1">
      <h3 className="text-xl font-bold mb-1 font-Epilogue">{title}</h3>
    </div>
    <div className="order-1 md:order-2 text-xs flex items-center font-medium border px-3 rounded-md py-1.5 bg-bg3 border-bg3/10 text-lighttext2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
        />
      </svg>
      <span className="mt-0.5 ml-2">{date}</span>
    </div>
  </div>

  <h4 className="font-Epilogue mb-1 text-lighttext2">{subtitle}</h4>
  {loc && <p className="text-sm text-lighttext mb-4 flex row"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mt-0.5 mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
 {loc}</p>}
  <div className='text-xs'>{renderDescription(description)}</div>
</motion.div>

    </motion.div>
  );
};

// Timeline Component
const Timeline: React.FC = () => {
  return (
    <div className="border-t border-white/10 pt-12 w-9/12 mb-20">
      <div className="flex flex-col  mt-4">
        <div className="flex items-center mb-6">
          <div className="rounded-lg p-4 bg-bg2 shadow-lg ml-8 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-white/90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h2 className="text-7xl font-bold text-white/90">Experience</h2>
            <h3 className="text-xl mt-1 text-lighttext">Software engineer with over 4 years of experience.</h3>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-10 space-y-10 border-l-2 pb-4 border-white/10">
          <CustomTimelineElement
            date="Apr 2024 - Present"
            title="Co-Founder and Head of AI/Backend"
            subtitle="ErgoEye"
            loc="Irvine, CA"
            description={[
              "Developing ErgoEye's core computer vision system using OpenCV, MediaPipe, and YOLOv5 for human joint tracking, enhancing workplace safety and reducing injury liability.",
            ]}
            icon='/ErgoEye.png'
            
          />
          <CustomTimelineElement
            date="Jun 2024 - Aug 2024"
            title="Software Engineer Intern"
            subtitle="Authorized Agents Inc"
            loc="Aliso Viejo, CA"
            description={[
              "Integrated third-party APIs for real-time flight and hotel booking with MongoDB and a Django backend, using React and Next.js to create a user-friendly system for over 400 clients",
            ]}
            icon='/Authorized.png'
          />
          <CustomTimelineElement
            date="Nov 2023 - Present"
            title="Vice President of Professional Development"
            subtitle="Management Information Student Society"
            loc="Irvine, CA"
            description="Presenting technical workshops to over 400 students at nation-wide collegiate hackathons."
            icon='/MascotSquareBG.png'
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
