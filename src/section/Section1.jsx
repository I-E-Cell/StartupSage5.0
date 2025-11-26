import React from "react";
import WaveY from "/assets/images/WaveY.svg";
import { motion } from "framer-motion";
import WonderCoin from "/assets/images/wonder-coin.svg";

const Section1 = () => {
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
    <div className="w-full min-h-screen md:h-[120vh] bg-[#FFD200] relative border-none outline-none">
      <div className="absolute top-0 -translate-y-1/2">
        <img src={WaveY} alt="" className="w-full" />
        <div className="flex gap-4 md:gap-8 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
        </div>
      </div>
      <div className="flex items-center justify-center h-full text-2xl md:text-4xl font-[superMario] pt-32">Section1</div>
    </div>
  );
};

export default Section1;
