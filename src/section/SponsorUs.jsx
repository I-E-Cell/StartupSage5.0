import WaveBl from "/assets/images/WaveBl.svg";
import BlPattern from "/assets/images/BlPattern.avif";
import TlSponsorCard from "/assets/images/tl-sponsor-card.svg";
import { motion } from "framer-motion";
import "../App.css";
import YellowP from "/assets/images/yellow-plush.webp";
import BlueP from "/assets/images/blue-plush.webp";
import Mario from "/assets/images/mario.webp";
import Barrel from "/assets/images/barrel.avif";
import Flash from "/assets/images/flash.svg";
import Potion from "/assets/images/potion.svg";
import Bomb from "/assets/images/bomb.svg";
import Diamond from "/assets/images/diamond.svg";
import Marquee1 from "/assets/images/marquee1.webp";


const SponsorUs = () => {
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
    <div
      className="relative w-full bg-black text-white flex flex-col gap-24 justify-start pt-32 items-center"
      style={{
        background: `url(${BlPattern})`,
        backgroundSize: "50%",
        backgroundRepeat: "repeat",
      }}
    >
      {/* gradients */}
      <div className="bg-linear-to-b from-black to-transparent absolute top-0 w-full h-44" />

      {/* top black image */}
      <div className="absolute top-0 -translate-y-full">
        <img className="w-full" src={WaveBl} alt="" />
      </div>

      {/* sponsor us card */}
      <div className="relative w-full px-52">
        {/* top */}
        <div className="flex">
          <img src={TlSponsorCard} alt="" />
          <div className="w-full bg-[#FFFF00]" />
          <img className="transform scale-x-[-1]" src={TlSponsorCard} alt="" />
        </div>

        {/* middle */}
        <div className="bg-[#FFFF00] px-12 py-4 text-black   flex items-center justify-center flex-col gap-8">
          <p className="font-bold text-2xl">Sponsor Us!</p>
          {/* sponsor us form */}
          <div className="w-full flex flex-col gap-2">
            <div className="flex items-center gap-4 w-full px-6 py-4 bg-black/20 rounded-sm">
              <p className="font-semibold">Individual Name</p>
              <div className="bg-black h-5 w-0.5" />
              <input
                type="text"
                placeholder="Enter Company Name"
                className="ring-0 outline-none border-none"
              />
            </div>
            <div className="flex items-center gap-4 w-full px-6 py-4 bg-black/20 rounded-sm">
              <p className="font-semibold">Company Name</p>
              <div className="bg-black h-5 w-0.5" />
              <input
                type="text"
                placeholder="Enter Company Name"
                className="ring-0 outline-none border-none"
              />
            </div>
            <div className="flex items-center gap-4 w-full px-6 py-4 bg-black/20 rounded-sm">
              <p className="font-semibold">Email</p>
              <div className="bg-black h-5 w-0.5" />
              <input
                type="text"
                placeholder="Enter Email"
                className="ring-0 outline-none border-none"
              />
            </div>
            <div className="flex items-center gap-4 w-full px-6 py-4 bg-black/20 rounded-sm">
              <p className="font-semibold">Phone No.</p>
              <div className="bg-black h-5 w-0.5" />
              <input
                type="text"
                placeholder="Enter Phone No."
                className="ring-0 outline-none border-none"
              />
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex transform scale-y-[-1]">
          <img src={TlSponsorCard} alt="" />
          <div className="w-full bg-[#FFFF00]" />
          <img className="transform scale-x-[-1]" src={TlSponsorCard} alt="" />
        </div>
      </div>

      {/* mario galaxy animations */}
      <div className="relative w-full flex justify-center items-start">
        {/* blue plushie */}
        <motion.div
          className="w-36 self-center"
          animate="animate"
          variants={floatVariants}
        >
          <img src={BlueP} alt="" />
        </motion.div>

        {/* mario animation */}
        <motion.div
          className="w-1/3"
          animate="animate"
          variants={floatVariants}
        >
          <img src={Mario} alt="" />
        </motion.div>
        {/* yellow plushie */}
        <motion.div className="w-40" animate="animate" variants={floatVariants}>
          <img src={YellowP} alt="" />
        </motion.div>
      </div>

      {/* infinite marquee */}
      <marquee
        direction="left"
        behavior="scroll"
        scrollamount="10"
        className="w-full text-white font-[superMario] -mt-44 text-8xl whitespace-nowrap -rotate-3"
      >
        <div className="flex gap-8">
          <img src={Marquee1} className="w-64" alt="" />
          <img src={Marquee1} className="w-64" alt="" />
          <img src={Marquee1} className="w-64" alt="" />
          <img src={Marquee1} className="w-64" alt="" />
          <img src={Marquee1} className="w-64" alt="" />
          <img src={Marquee1} className="w-64" alt="" />
          <img src={Marquee1} className="w-64" alt="" />

        </div>
      </marquee>

      {/* barrel */}
      <motion.div
        className="cursor-pointer w-28"
        style={{ transformOrigin: "top center" }}
        whileHover={{
          rotate: [-6, 6, -6],
          transition: {
            duration: 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <img src={Barrel} alt="barrel" />
      </motion.div>

      {/* sponsor us text */}
      <div className="text-white bg-black w-full relative py-8 text-center">
        <div className="bg-linear-to-t from-black to-transparent absolute top-0 w-full h-20 -translate-y-full" />
        <div className="mx-auto max-w-2xl">
          <h1 className="text-xl">As a Sponsor:</h1>
          <div className="text-left flex flex-col gap-2 mt-4">
            <div className="flex gap-2 items-center">
              <img src={Flash} alt="" />
              <p>
                Elevate your brand visibility among thousands of entrepreneurs.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={Potion} alt="" />
              <p>Connect with upcoming talents.</p>
            </div>
            <div className="flex gap-2 items-center mt-1">
              <img src={Diamond} alt="" />
              <p>Access next-gen innovation.</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={Bomb} alt="" />
              <p>Mentor the next generation of business leaders.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorUs;
