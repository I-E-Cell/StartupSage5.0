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
    <div className="relative bg-[#0064C8] w-full min-h-screen md:h-[140vh] px-4 md:px-12 lg:px-24 flex flex-col gap-12 md:gap-24 pb-12">
      <Navbar />
      {/* mario animation */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full hidden md:block"
        initial="initial"
        animate="animate"
        onAnimationComplete={() => {}}
      >
        <motion.div animate="animate" variants={floatVariants}>
          <img
            className="w-full md:w-3/4 lg:w-1/2 -translate-x-[10%] transform scale-x-[-1]"
            src={Mario}
            alt=""
          />
        </motion.div>
      </motion.div>

      {/* Blue Plushy animation */}
      <motion.div
        className="absolute top-1/3 left-[60%] md:left-[65%]"
        initial="initial"
        animate="animate"
      >
        <motion.div animate="animate" variants={floatVariants}>
          <img className="w-20 md:w-28 lg:w-32" src={BlueP} alt="" />
        </motion.div>
      </motion.div>

      {/* Yellow Plushy animation */}
      <motion.div
        className="absolute left-[20%] md:left-[25%] w-full h-full"
        initial="initial"
        animate="animate"
      >
        <motion.div animate="animate" variants={floatVariants}>
          <img className="w-20 md:w-28 lg:w-32" src={YellowP} alt="" />
        </motion.div>
      </motion.div>

      {/* main heading */}
      <div className="flex flex-col gap-6 md:gap-12 justify-center items-center mt-8 md:mt-0">
        <Heading />
        {/* tagline */}
        <p
          className="text-base md:text-xl lg:text-2xl font-bold text-white uppercase font-[superMario] tracking-widest text-center px-4"
          style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,1))" }}
        >
          From Ore to Empire
        </p>
        {/* event dates */}
        <div
          className="w-11/12 md:w-3/4 lg:w-1/2 h-64 md:h-80 lg:h-96 px-4 md:px-8 lg:px-10 py-4 md:py-6 text-5xl md:text-7xl lg:text-9xl font-[superMario] text-gray-900 flex gap-3 md:gap-6 justify-center items-center"
          style={{
            background: `url(${Map})`,
            backgroundSize: "95%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <p>10</p>
            <p className="text-2xl md:text-4xl lg:text-5xl">Jan</p>
          </div>
          <p>-</p>
          <div className="flex flex-col justify-center items-center">
            <p>15</p>
            <p className="text-2xl md:text-4xl lg:text-5xl">Jan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
