"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Container, ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion"; // Import motion for animation
import Typewriter from "./typewriter";

const Hero = () => {
  const [init, setInit] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Load the particles engine
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });

    // Load the background image
    const img = new Image();
    img.src = "/hero-bg.png"; // Adjusted image path
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.error("Failed to load image");
      setImageLoaded(true);
    };
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        image: "url('/hero-bg.png')", // Adjusted image path
        size: "cover",
        position: "center",
        repeat: "no-repeat",
      },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          enable: true,
          outModes: {
            default: "out",
          },
          speed: 0.2,
        },
        number: {
          value: 300, // Increased number of dots
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
        },
        opacity: {
          value: { min: 0, max: 1 },
          animation: {
            enable: true,
            startValue: "min",
            speed: 0.3,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 1.2 }, // Smaller dots
        },
      },
      pauseOnBlur: true,
    }),
    []
  );

  return (
    <div
      className="relative h-screen"
      style={{
        height: "100vh", // Full viewport height
      }}
    >
      {init && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0, // Ensure particles are behind the text
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 2s ease-in-out",
            backgroundColor: "#000", // Ensure background color before fade-in
          }}
        >
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        </div>
      )}

      <div
        className="relative z-10 flex items-center justify-center h-full w-screen flex-col"
        style={{ pointerEvents: "none" }} // Prevents the text from interfering with particle interaction
      >
        <motion.div
          initial={{ y: -70, opacity: 0 }} // Toolbar starts above and hidden
          animate={{ y: 0, opacity: 1 }} // Animates to visible
          transition={{
            duration: 0.2,
            ease: [0.79, 0.5, 0.02, 1], // Strong fast start and slow end
          }}
          className="top-0 fixed mt-3 py-2 duration-300 px-2 z-30 border rounded-2xl mr-4 border-gray-300/35 bg-gray-700/15 backdrop-blur-md"
        >
          <div className="flex row justify-center space-x-3 font-Epilogue text-sm">
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item, index) => (
                <motion.button
                  key={item}
                  className="bg-transparent p-2 py-2 px-4 text-md flex items-center justify-center rounded-lg hover:py-1 hover:pt-1.5 hover:mt-0.5 hover:bg-gray-500/55 hover:mb-1 duration-500"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: [0, 0, 1] }} // Remain 0 opacity for the first part
                  transition={{
                    duration: 0.2, // Reduced duration for a faster animation
                    ease: [0.99, 1, 0.02, 1], // Same ease curve for fast start and slow end
                    delay: index * 0.15, // Slightly reduced stagger delay
                    opacity: {
                      delay: index * 0.1 + 0.1, // Adjusted opacity delay to fit within the shorter animation
                      duration: 0.1, // Reduced opacity duration for faster appearance
                    },
                  }}
                >
                  {item}
                </motion.button>
              )
            )}
          </div>
        </motion.div>

        {/* Animate the heading text */}
        <motion.h1
          className="text-8xl text-white font-bold font-Epilogue mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          Hey! I&#39;m Caleb,
        </motion.h1>

        {/* Animate the subtext and typewriter */}
        <motion.div
          className="flex row text-2xl text-gray-200 font-bold font-Epilogue mt-3"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.1, // Delayed slightly after the heading
          }}
        >
          <span className="mr-3 text-5xl text-gray-300 font-bold font-Epilogue">
            a
          </span>
          <Typewriter />
        </motion.div>

        {/* Animate the social buttons */}
        <motion.div
          className="flex row mt-7 border-t pt-5 mb-24"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: 0.8, // Delayed after text
          }}
        >
          <div></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
