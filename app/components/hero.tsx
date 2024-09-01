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
        <h1 className="text-8xl text-white font-bold font-Epilogue">Hey! I'm Caleb,</h1>
        <div className="flex row text-2xl text-gray-200 font-bold font-Epilogue mt-3">
            <span className="mr-3 text-5xl text-gray-200 font-bold font-Epilogue">a</span> <Typewriter/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
