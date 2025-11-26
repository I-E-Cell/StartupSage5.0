import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Flash from "/assets/images/flash.svg";
import Unlock from "/assets/images/unlock.svg";
import Lock from "/assets/images/Lock.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);

  const navTabs = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
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
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };

  // Stagger container for tabs
  const tabsContainerVariants = {
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } },
  };

  // Individual tab animation
  const tabVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "linear" },
    },
  };

  return (
    <div className="w-full px-4 md:px-12 lg:px-24 py-2 text-white flex justify-between items-center">
      <div className="text-xl md:text-2xl font-[pixelify]">/SS</div>
      <div className="flex gap-4 md:gap-8 items-center">
        {/* Menu */}
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img className="w-6 md:w-8" src={isMenuOpen ? Lock : Unlock} alt="" />
          <p className="text-sm md:text-base">Menu</p>
        </div>
        {/* Brochure */}
        <div className="flex gap-2 items-center cursor-pointer">
          <img className="w-5 md:w-6" src={Flash} alt="" />
          <p className="text-sm md:text-base">Brochure</p>
        </div>
      </div>

      {/* Mobile Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full bg-gray-900 h-screen z-50 px-6 md:px-12 lg:px-24 py-4 justify-center items-center"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className="absolute flex items-center gap-2 top-4 md:top-6 right-4 md:right-6 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <img className="w-6 md:w-8" src={Lock} alt="Close" />
              <p className="text-white text-base md:text-lg">Menu</p>
            </div>
            <motion.div
              className="flex flex-col gap-8 md:gap-12 h-full justify-center items-center"
              variants={tabsContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {navTabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  onMouseEnter={() => setHoveredTab(tab.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className="text-white text-xl md:text-3xl lg:text-4xl transition-all duration-200 font-[superMario]"
                  variants={tabVariants}
                  data-hovered={hoveredTab === tab.id}
                >
                  {tab.name}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;