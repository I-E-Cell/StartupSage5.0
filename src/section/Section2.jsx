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
    <div className="w-full h-screen relative bg-linear-to-b from-[#0064C8] via-[#003C96] to-[#0064C8]">
      {/* top wave and coin animation */}
      <div className="absolute top-0 -translate-y-full">
        <img src={WaveB} alt="wave-blue" />
        {/* coins */}
        <div className="flex gap-8 absolute top-0 md:top-24 left-0 md:left-64">
          <motion.img
            src={WonderCoin}
            alt="wonder-coin"
            variants={floatVariants}
            animate="float"
          />
          <motion.img
            src={WonderCoin}
            alt="wonder-coin"
            variants={floatOppositeVariants}
            animate="float"
          />
          <motion.img
            src={WonderCoin}
            alt="wonder-coin"
            variants={floatVariants}
            animate="float"
          />
        </div>
      </div>

      {/* luigi animation */}
      <motion.div
        className="absolute top-0 translate-y-1/5"
        variants={waveVariant}
        animate="animate"
      >
        <img className="w-80" src={Luigi} alt="" />
      </motion.div>
      Section2
    </div>
  );
};

export default Section2;
