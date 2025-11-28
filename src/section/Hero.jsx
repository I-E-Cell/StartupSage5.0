import Button from "../components/Button";
import HeroBtm from "/assets/images/HeroBtm.webp";
import HeroGlow from "/assets/images/HeroGlow.svg";
import Edition from "/assets/images/Edition.svg";
import TrophyReward from "/assets/images/TrophyReward.svg";
import TagBtm from "/assets/images/TagBtm.svg";
import TagTop from "/assets/images/TagTop.svg";
import Heading from "/assets/images/Heading.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative bg-linear-to-b from-yellow-400 to-yellow-800 w-full flex flex-col pb-32">
      {/* content div */}
      <div className="w-full h-auto relative flex items-center justify-center flex-col gap-24 z-2 mt-52">
        {/* <Heading /> */}
        <motion.div
          animate={{ y: [20, 0] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="relative font-[nougat] tracking-tighter flex flex-col items-center uppercase text-white pointer-events-none"
        >
          {/* White background behind the heading */}
          <div className="absolute top-0 left-0 rounded-full blur-2xl opacity-100 inset-0 bg-white" />
          {/* main heading image */}
          <img src={Heading} className="z-2 scale-110 md:scale-150" alt="" />
        </motion.div>

        {/* tagline */}
        <div
          style={{ filter: "drop-shadow(0px 6px 0px rgba(0,0,0,0.5))" }}
          className="relative font-[lilita] uppercase text-white text-2xl border-4 border-black py-3 px-6 rounded-md -skew-4 bg-[#2574FF]"
        >
          <img
            src={TagTop}
            className="w-full absolute top-0 left-0 transform -scale-x-[1] pointer-events-none"
            alt="tagline-top"
          />
          <p>From Ore To Empire</p>
          <img
            className="absolute top-0 right-0 translate-x-3/4 rotate-12 w-20 pointer-events-none"
            src={TrophyReward}
            alt="+8trophy"
          />
          <img
            src={TagBtm}
            className="w-full absolute bottom-0 left-0 pointer-events-none"
            alt="tagline-bottom"
          />
        </div>

        {/* register btn */}
        <Button title="Register on Unstop" text="text-3xl" />
      </div>

      {/* Rotating Glow */}
      <motion.div className="w-full h-full absolute top-0 opacity-20 scale-[2.5]">
        <motion.img
          src={HeroGlow}
          className="w-full h-full object-cover object-center pointer-events-none"
          alt="rotating-glow"
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* text marquee */}
      <motion.div
        className="absolute top-1/5 left-0 -translate-y-1/2 font-[nougat] uppercase text-8xl text-white opacity-40 rotate-3 whitespace-nowrap flex items-center gap-12"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        <img
          src={Edition}
          className="h-36 pointer-events-none"
          alt="editionV"
        />
        <p>From Ore To Empire</p>
        <img
          src={Edition}
          className="h-36 pointer-events-none"
          alt="editionV"
        />
        <p>From Ore To Empire</p>
        <img
          src={Edition}
          className="h-36 pointer-events-none"
          alt="editionV"
        />
      </motion.div>

      {/* Bottom Image */}
      <div className="w-full absolute bottom-0">
        <img src={HeroBtm} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default Hero;
