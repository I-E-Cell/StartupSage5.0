import React from "react";
import { motion } from "framer-motion";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import YellowP from "/assets/images/yellow-plush.webp";
import BlueP from "/assets/images/blue-plush.webp";
import Mario from "/assets/images/mario.webp";
import Map from "/assets/images/Map.webp";

const Hero = () => {
  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative bg-[#0064C8] w-full h-[140vh] md:px-24 flex flex-col gap-24 ">
      <Navbar />
      {/* mario animation */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full"
        initial="initial"
        animate="animate"
        onAnimationComplete={() => {}}
      >
        <motion.div animate="animate" variants={floatVariants}>
          <img
            className="w-1/2 -translate-x-[10%] transform scale-x-[-1]"
            src={Mario}
            alt=""
          />
        </motion.div>
      </motion.div>

      {/* Blue Plushy animation */}
      <motion.div
        className="absolute top-1/3 left-[65%]"
        initial="initial"
        animate="animate"
      >
        <motion.div animate="animate" variants={floatVariants}>
          <img className="w-32" src={BlueP} alt="" />
        </motion.div>
      </motion.div>

      {/* Yellow Plushy animation */}
      <motion.div
        className="absolute left-[25%] w-full h-full"
        initial="initial"
        animate="animate"
      >
        <motion.div animate="animate" variants={floatVariants}>
          <img className="w-32" src={YellowP} alt="" />
        </motion.div>
      </motion.div>

      {/* main heading */}
      <div className="flex flex-col gap-12 justify-center items-center">
        <Heading />
        {/* tagline */}
        <p
          className="text-2xl font-bold text-white uppercase font-[superMario] tracking-widest"
          style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,1))" }}
        >
          From Ore to Empire
        </p>
        {/* event dates */}
        <div
          className="w-1/2 h-96 px-10 py-6 text-9xl font-[superMario] text-gray-900 flex gap-6 justify-center items-center"
          style={{
            background: `url(${Map})`,
            backgroundSize: "95%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <p>10</p>
            <p className="text-5xl">Jan</p>
          </div>
          <p>-</p>
          <div className="flex flex-col justify-center items-center">
            <p>15</p>
            <p className="text-5xl">Jan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
