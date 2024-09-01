"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Container, ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
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
      fullScreen: {
        enable: false,
        zIndex: 0,
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
          value: { min: 0.5, max: 1 }, // Smaller dots
        },
      },
      pauseOnBlur: true,
    }),
    []
  );

  return (
    <div>
    <div
      className="relative border-b-4"
      style={{
        opacity: imageLoaded ? 1 : 0,
        transition: "opacity 2s ease-in-out",
        height: "100vh", // Full viewport height
      }}
    >
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0, // Ensure particles are behind the text
          }}
        />
      )}

      <div
        className="relative z-10 flex items-center justify-center h-full w-screen flex-col"
        style={{ pointerEvents: "none" }} // Prevents the text from interfering with particle interaction
      >
        <h1 className="text-8xl text-white font-bold font-Epilogue">  Hey! I&#39;m Caleb,</h1>
        <div className="flex row text-2xl text-gray-200 font-bold font-Epilogue mt-3">
            <span className="mr-3 text-5xl text-gray-300 font-bold font-Epilogue">a</span> <Typewriter/>
        </div>
        <div className="flex row mt-7 border-t pt-5">
            <button className="bg-gray-50 p-2 rounded-md mx-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></button>
            <button className="bg-gray-50 p-2 rounded-md mx-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
