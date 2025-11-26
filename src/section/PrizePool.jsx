import React from "react";
import WaveBl from "/assets/images/WaveBl.svg";
import BlPattern from "/assets/images/BlPattern.avif";
import Prize from "/assets/images/Prize.webp";
import Ghost from "/assets/images/ghost.avif";

import { motion } from "framer-motion";
import "../App.css";

const PrizePool = () => {
  const waveVariants = {
    animate: {
      x: ["100vw", "-100vw"],
      y: [0, -40, 40, -40, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div
      className="relative w-full min-h-screen md:h-[120vh] bg-black text-white flex justify-center items-center px-4"
      style={{
        background: `url(${BlPattern})`,
        backgroundSize: "50%",
        backgroundRepeat: "repeat",
      }}
    >
      {/* gradients */}
      <div className="bg-linear-to-b from-black to-transparent absolute top-0 w-full h-44" />
      <div className="bg-linear-to-t from-black to-transparent absolute bottom-0 w-full h-44" />

      {/* top black image */}
      <div className="absolute top-0 -translate-y-full">
        <img className="w-full" src={WaveBl} alt="" />
      </div>

      {/* card */}
      <div
        className="h-64 md:h-2/3 lg:h-3/4 w-11/12 md:w-3/4 font-[superMario] flex flex-col gap-2 md:gap-4 justify-center items-center text-4xl md:text-6xl lg:text-8xl text-black"
        style={{
          background: `url(${Prize})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <p>Prize Pool</p>
        <p>Worth </p>
        <p>6 Lakhs + </p>
      </div>

      {/* small ghost */}
      <motion.img
        className="absolute bottom-0 right-0"
        src={Ghost}
        alt="ghost"
        variants={{
          animate: {
            x: ["100vw", "-100vw"],
            y: [0, 40, -40, 40, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
          },
        }}
        animate="animate"
      />

      {/* big ghost */}
      <motion.img
        className="absolute scale-150 top-0 right-0"
        src={Ghost}
        alt="ghost"
        variants={waveVariants}
        animate="animate"
      />
    </div>
  );
};

export default PrizePool;
