import React from "react";
import { motion } from "framer-motion";
import WaveB from "/assets/images/WaveB.svg";
import WonderCoin from "/assets/images/wonder-coin.svg";
import Luigi from "/assets/images/luigi.avif";

const Section2 = () => {
  const waveVariant = {
    animate: {
      x: ["-30vw", "100vw"],
      y: [0, -40, 40, -40, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatVariants = {
    float: {
      y: [0, -40, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatOppositeVariants = {
    float: {
      y: [0, 40, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full min-h-screen relative bg-linear-to-b from-[#0064C8] via-[#003C96] to-[#0064C8]">
      {/* top wave and coin animation */}
      <div className="absolute top-0 -translate-y-full w-full">
        <img src={WaveB} alt="wave-blue" className="w-full" />
        {/* coins */}
        <div className="flex gap-4 md:gap-8 absolute top-0 md:top-24 left-4 md:left-32 lg:left-64">
          <motion.img
            src={WonderCoin}
            alt="wonder-coin"
            variants={floatVariants}
            animate="float"
            className="w-12 md:w-16 lg:w-20"
          />
          <motion.img
            src={WonderCoin}
            alt="wonder-coin"
            variants={floatOppositeVariants}
            animate="float"
            className="w-12 md:w-16 lg:w-20"
          />
          <motion.img
            src={WonderCoin}
            alt="wonder-coin"
            variants={floatVariants}
            animate="float"
            className="w-12 md:w-16 lg:w-20"
          />
        </div>
      </div>

      {/* luigi animation */}
      <motion.div
        className="absolute top-0 translate-y-1/5"
        variants={waveVariant}
        animate="animate"
      >
        <img className="w-40 md:w-60 lg:w-80" src={Luigi} alt="" />
      </motion.div>
      <div className="flex items-center justify-center h-full text-2xl md:text-4xl font-[superMario] pt-32">Section2</div>
    </div>
  );
};

export default Section2;
