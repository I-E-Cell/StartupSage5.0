import React from "react";
import { motion } from "framer-motion";
import Bulrush from "/assets/images/bulrush.avif";
import BlueBg from "/assets/images/BlueBg.webp";
import WaveGray from "/assets/images/WaveGray.svg";
import BlueBricks from "/assets/images/BlueBricks.svg";
import Replit from "/assets/images/replit.svg";
import Solana from "/assets/images/Solana.svg";
import Kalyani from "/assets/images/Kalyani.svg";
import FreightFox from "/assets/images/FreightFox.svg";
import Budhani from "/assets/images/Budhani.svg";
import Xyz from "/assets/images/xyz.png";
import NoodlePlus from "/assets/images/NoodlePlus.png";
import StockGro from "/assets/images/StockGro.avif";
import Bhadepay from "/assets/images/Bhadepay.webp";
import ProGrowth from "/assets/images/ProGrowth.png";
import UdChalo from "/assets/images/UdChalo.png";
import NurseryLive from "/assets/images/NurseryLive.png";
import FileCoin from "/assets/images/filecoin.png";
import EthIndia from "/assets/images/EthIndia.png";
import Polygon from "/assets/images/polygon.png";
import WetnJoy from "/assets/images/WetnJoy.png";
import WonderFlower from "../components/WonderFlower";

const PastSponsors = () => {
  // Container animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Individual image animation variants (entry animation)
  const imageVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Floating animation (up and down) - Type 1
  const floatingVariants1 = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Floating animation (down and up) - Type 2 (opposite)
  const floatingVariants2 = {
    animate: {
      y: [0, 20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const sponsors = [
    {
      imgUrl: `${BlueBricks}`,
      title: "BlueBricks",
    },
    {
      imgUrl: `${ProGrowth}`,
      title: "ProGrowth",
    },
    {
      imgUrl: `${UdChalo}`,
      title: "UdChalo",
    },
    {
      imgUrl: `${Replit}`,
      title: "Replit",
    },
    {
      imgUrl: `${Solana}`,
      title: "Solana",
    },
    {
      imgUrl: `${Bhadepay}`,
      title: "BhadePay",
    },
    {
      imgUrl: `${Kalyani}`,
      title: "Kalyani",
    },
    {
      imgUrl: `${WetnJoy}`,
      title: "WetnJoy",
    },
    {
      imgUrl: `${FileCoin}`,
      title: "FileCoin",
    },
    {
      imgUrl: `${NurseryLive}`,
      title: "NurseryLive",
    },
    {
      imgUrl: `${StockGro}`,
      title: "StockGro",
    },
    {
      imgUrl: `${FreightFox}`,
      title: "FreightFox",
    },
    {
      imgUrl: `${Xyz}`,
      title: ".xyz",
    },
    {
      imgUrl: `${NoodlePlus}`,
      title: "NoodlePlus",
    },
    {
      imgUrl: `${Budhani}`,
      title: "Budhani Bros",
    },
    {
      imgUrl: `${EthIndia}`,
      title: "EthIndia",
    },
    {
      imgUrl: `${Polygon}`,
      title: "Polygon",
    },
  ];

  return (
    <div
      className="w-full relative bg-[#0064C8] flex flex-col items-center justify-start pt-36 pb-44"
      style={{
        background: `url(${BlueBg})`,
        backgroundSize: "80%",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      {/* bulrush animation */}
      <motion.div
        className="absolute top-0 -translate-y-1/2 flex w-full justify-center gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Bulrush 1 - floats up first */}
        <motion.img
          className="h-56"
          src={Bulrush}
          alt="Bulrush 1"
          variants={imageVariants}
          animate="animate"
          {...floatingVariants1}
        />

        {/* Bulrush 2 - floats down first */}
        <motion.img
          className="h-44 ml-24 mt-24"
          src={Bulrush}
          alt="Bulrush 2"
          variants={imageVariants}
          animate="animate"
          {...floatingVariants2}
        />

        {/* Bulrush 3 - floats up first */}
        <motion.img
          className="h-36 -mt-32"
          src={Bulrush}
          alt="Bulrush 3"
          variants={imageVariants}
          animate="animate"
          {...floatingVariants1}
        />

        {/* Bulrush 4 - floats down first */}
        <motion.img
          className="h-56 -ml-44"
          src={Bulrush}
          alt="Bulrush 4"
          variants={imageVariants}
          animate="animate"
          {...floatingVariants2}
        />
      </motion.div>

      {/* Heading */}
      <div className="text-5xl md:text-7xl lg:text-9xl font-[superMario] font-bold text-white flex flex-col items-center px-4">
        <p
          style={{ filter: "drop-shadow(0px 8px 0px rgba(0,0,0,1))" }}
          className="text-2xl md:text-3xl lg:text-4xl z-20 text-red-600"
        >
          Our Past
        </p>
        <p
          className="-mt-3 md:-mt-4 lg:-mt-6"
          style={{ filter: "drop-shadow(0px 12px 0px rgba(0,0,0,1))" }}
        >
          Sponsors
        </p>
      </div>

      {/* sponsor container */}
      <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-12 items-center justify-center mt-12 md:mt-16 lg:mt-24 px-4 md:px-16 lg:px-32">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center flex-col overflow-hidden bg-white w-64 md:w-72 lg:w-80 h-48 md:h-56 lg:h-60 border-3 md:border-4 rounded-xl rounded-tl-3xl md:rounded-tl-4xl rounded-br-3xl md:rounded-br-4xl border-gray-900"
          >
            {/* sponsor image */}
            <div
              className="h-3/4 w-3/4 mx-auto z-10"
              style={{
                backgroundImage: `url(${sponsor.imgUrl})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            {/* sponsor title */}
            <div className="border-4 z-10 border-gray-900 rounded-full px-4 py-1 bg-white font-bold">
              {sponsor.title}
            </div>
            {/* bottom wave */}
            <img
              className="absolute bottom-0 outline-none border-none w-full"
              src={WaveGray}
              alt=""
            />
          </div>
        ))}
      </div>

      {/* Wonder flower */}
      <div className="absolute bottom-0 left-0 z-20  w-1/2 flex justify-center items-end">
        <WonderFlower />
      </div>
    </div>
  );
};

export default PastSponsors;
