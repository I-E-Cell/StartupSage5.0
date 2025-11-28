import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "/assets/images/Heading.svg";
import TrophyReward from "/assets/images/TrophyReward.svg";
import TagBtm from "/assets/images/TagBtm.svg";
import TagTop from "/assets/images/TagTop.svg";
import Ham from "/assets/images/Ham.svg";
import MenuBtm from "/assets/images/MenuBtm.svg";
import MenuTop from "/assets/images/MenuTop.svg";
import HeroGlow from "/assets/images/HeroGlow.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);

  const navTabs = [
    { name: "Home", id: "home" },
    { name: "Prize Pool", id: "prize-pool" },
    { name: "Events", id: "events" },
    { name: "Timeline", id: "timeline" },
    { name: "FAQs", id: "faqs" },
    { name: "Past Sponsors", id: "sponsors" },
    { name: "Sponsor Us", id: "sponsorsUs" },
  ];

  const handleTabClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Modal animation variants
  const modalVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* NAVBAR – stays visible even when modal is open */}
      <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-12 lg:px-24 py-3 text-white flex justify-between items-center bg-[#020617]/80 backdrop-blur-sm">
      {/* nav logo */}
        <img
          src={Heading}
          onClick={() => window.location.reload()}
          className="w-20 cursor-pointer"
          alt="nav-logo"
        />

        <div className="flex gap-4 md:gap-8 items-center">
          {/* Menu */}
          <div
            onClick={() => setIsMenuOpen((prev) => !prev)}
            style={{ filter: "drop-shadow(0px 3px 0px rgba(0,0,0,0.5))" }}
            className="relative font-[lilita] cursor-pointer flex gap-2 uppercase text-white border-2 border-black py-3 px-6 rounded-md -skew-4 bg-[#343B50]"
          >
            <img
              src={MenuTop}
              className="w-full absolute top-0 left-0"
              alt="tagline-top"
            />
            <img src={Ham} alt="" />
            <p>Menu</p>
            <img
              src={MenuBtm}
              className="w-full absolute bottom-0 left-0"
              alt="tagline-bottom"
            />
          </div>

          {/* Brochure */}
          <div
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/xxxxxxxxxxxx/view?usp=sharing", // <-- paste your link here
                "_blank"
              )
            }
            style={{ filter: "drop-shadow(0px 3px 0px rgba(0,0,0,0.5))" }}
            className="relative font-[lilita] cursor-pointer uppercase text-white border-2 border-black py-3 px-6 rounded-md -skew-4 bg-[#2574FF]"
          >
            <img
              src={TagTop}
              className="w-full absolute top-0 left-0 transform -scale-x-[1]"
              alt="tagline-top"
            />
            <p>Brochure</p>
            <img
              className="absolute top-0 right-0 translate-x-1/3 md:translate-x-3/4 rotate-12"
              src={TrophyReward}
              alt=""
            />
            <img
              src={TagBtm}
              className="w-full absolute bottom-0 left-0"
              alt="tagline-bottom"
            />
          </div>
        </div>
      </div>

      {/* Mobile Modal – appears behind the navbar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900 h-screen z-40 px-8 md:px-24 pt-28 pb-8 flex flex-col justify-center items-center"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Centered nav tabs */}
            <div className="flex flex-col gap-8 h-full justify-center items-center">
              {navTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  onMouseEnter={() => setHoveredTab(tab.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className="text-white cursor-pointer text-xl md:text-3xl transition-all duration-200 font-[lilita] uppercase"
                  data-hovered={hoveredTab === tab.id}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Rotating Glow */}
            <motion.div className="w-full h-full absolute top-0 opacity-1 scale-[2.5] pointer-events-none">
              <motion.img
                src={HeroGlow}
                className="w-full h-full object-cover object-center"
                alt=""
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
