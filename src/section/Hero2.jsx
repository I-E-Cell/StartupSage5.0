import React from "react";
import { motion } from "framer-motion";
import HeroBg from "/assets/images/herobg.png";
import HeroPanda from "/assets/images/heropanda.png";

function Hero2() {
  // Floating leaf animation variants
  const leafVariants = {
    animate: (i) => ({
      y: [0, 800],
      x: [0, Math.sin(i) * 100],
      rotate: [0, 360],
      transition: {
        duration: 8 + i * 2,
        repeat: Infinity,
        ease: "linear",
        delay: i * 0.5,
      },
    }),
  };

  return (
    <div className="relative w-full h-[70vh] md:min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={HeroBg}
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Floating Leaves */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={leafVariants}
          animate="animate"
          className="absolute pointer-events-none"
          style={{
            left: `${15 + i * 15}%`,
            top: "-50px",
          }}
        >
          <svg
            width="30"
            height="40"
            viewBox="0 0 30 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-md"
          >
            <path
              d="M15 0C15 0 30 15 25 30C20 45 10 45 5 30C0 15 15 0 15 0Z"
              fill={i % 2 === 0 ? "#FFD700" : "#90EE90"}
            />
          </svg>
        </motion.div>
      ))}

      {/* Content Container - Space for text/logo will go here */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start pt-20">
        {/* Text/Logo placeholder area */}
        <div className="flex-1" />
      </div>

      {/* Panda Character - Bottom Center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-[60%] md:w-[40%] lg:w-[35%]">
        <img
          src={HeroPanda}
          alt="Hero Panda"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Hero2;