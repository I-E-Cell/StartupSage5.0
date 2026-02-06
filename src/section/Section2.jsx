import React from "react";
import { motion } from "framer-motion";
import WaveB from "/assets/images/WaveB.svg";
import WonderCoin from "/assets/images/wonder-coin.svg";
import Luigi from "/assets/images/luigi.avif";

// Timeline icons - using emoji placeholders, replace with actual icons/images
const timelineData = [
  {
    id: 1,
    title: "Level 1: Ideation",
    date: "OCT 15 - NOV 01",
    status: "done",
    icon: "💡",
    iconBg: "bg-[#E8E8E8]",
    borderColor: "border-[#2D5A27]",
  },
  {
    id: 2,
    title: "Level 2: Formation",
    date: "NOV 05 - NOV 12",
    status: null,
    icon: "📝",
    iconBg: "bg-[#7ECFC0]",
    borderColor: "border-[#5A4A8A]",
  },
  {
    id: 3,
    title: "Level 3: Pitching",
    date: "LIVE NOW",
    status: "live",
    icon: "⭐",
    iconBg: "bg-[#C490E4]",
    borderColor: "border-[#6B4A8A]",
  },
  {
    id: 4,
    title: "Level 4: MVP Build",
    date: "DEC 01 - DEC 15",
    status: null,
    icon: "🔧",
    iconBg: "bg-[#D4C4A8]",
    borderColor: "border-[#8A7A5A]",
  },
  {
    id: 5,
    title: "Final Boss: Demo Day",
    date: "JANUARY 2025",
    status: null,
    icon: "🏆",
    iconBg: "bg-[#C9A86C]",
    borderColor: "border-[#8A6A3A]",
  },
];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      className="w-full min-h-screen relative bg-[#FFD200] overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }}
    >
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

      {/* Timeline Title */}
      <div className="flex justify-center pt-32 md:pt-36 pb-8 md:pb-12">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-[superMario] text-black tracking-wide">
          Event Timeline
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-8 pb-20">
        {/* Center Line - visible on both mobile and desktop */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[#C4A000] md:-translate-x-1/2"></div>

        {/* Timeline Items */}
        <div className="relative">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={itemVariants}
                className={`relative flex items-center mb-12 md:mb-16 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Mobile Layout: Icon and content always on the right of the line */}
                <div className="md:hidden flex items-center w-full pl-16">
                  {/* Connection line to center */}
                  <div className="absolute left-8 w-8 h-0.5 bg-[#C4A000]"></div>

                  {/* Icon Box */}
                  <div
                    className={`relative flex-shrink-0 w-16 h-16 rounded-xl ${item.iconBg} border-4 ${item.borderColor} flex items-center justify-center text-2xl shadow-lg`}
                    style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.2)" }}
                  >
                    {item.icon}
                    {item.status === "done" && (
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#2ECC71] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                        Done
                      </span>
                    )}
                    {item.status === "live" && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#9B59B6] rounded-full animate-pulse"></span>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="ml-4">
                    <h3 className="text-lg font-[superMario] text-black italic">
                      {item.title}
                    </h3>
                    <p className="text-sm font-[space] text-black/70 uppercase tracking-wider">
                      {item.date}
                    </p>
                  </div>
                </div>

                {/* Desktop Layout: Alternating sides */}
                <div className="hidden md:flex items-center w-full">
                  {/* Left Side Content (for even items) */}
                  {isEven && (
                    <div className="w-1/2 pr-12 text-right flex items-center justify-end">
                      {/* Icon Box */}
                      <div
                        className={`relative flex-shrink-0 w-20 h-20 rounded-2xl ${item.iconBg} border-4 ${item.borderColor} flex items-center justify-center text-3xl shadow-lg`}
                        style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.2)" }}
                      >
                        {item.icon}
                        {item.status === "done" && (
                          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#2ECC71] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                            Done
                          </span>
                        )}
                        {item.status === "live" && (
                          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#9B59B6] rounded-full animate-pulse"></span>
                        )}
                      </div>
                      <div className="ml-4 text-left">
                        <h3 className="text-xl lg:text-2xl font-[superMario] text-black italic">
                          {item.title}
                        </h3>
                        <p className="text-sm font-[space] text-black/70 uppercase tracking-wider">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Center connector dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#C4A000] rounded-full border-2 border-[#A68900] z-10"></div>

                  {/* Connection line from center */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-[#C4A000] ${
                      isEven ? "left-1/2" : "right-1/2"
                    }`}
                  ></div>

                  {/* Right Side Content (for odd items) */}
                  {!isEven && (
                    <div className="w-1/2 pl-12 text-left flex items-center">
                      <div className="mr-4 text-right">
                        <h3 className="text-xl lg:text-2xl font-[superMario] text-black italic">
                          {item.title}
                        </h3>
                        <p className="text-sm font-[space] text-black/70 uppercase tracking-wider">
                          {item.date}
                        </p>
                      </div>
                      {/* Icon Box */}
                      <div
                        className={`relative flex-shrink-0 w-20 h-20 rounded-2xl ${item.iconBg} border-4 ${item.borderColor} flex items-center justify-center text-3xl shadow-lg`}
                        style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.2)" }}
                      >
                        {item.icon}
                        {item.status === "done" && (
                          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#2ECC71] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                            Done
                          </span>
                        )}
                        {item.status === "live" && (
                          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#9B59B6] rounded-full animate-pulse"></span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Empty space for the other side */}
                  {isEven && <div className="w-1/2"></div>}
                  {!isEven && <div className="w-1/2"></div>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative floating elements */}
      <motion.div
        className="hidden md:block absolute top-1/4 right-16 w-16 h-16 bg-[#4CAF50] rounded-2xl opacity-60 rotate-12"
        animate={{ rotate: [12, 25, 12], y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden md:block absolute bottom-1/3 right-24 w-12 h-12 bg-[#FFA726] rounded-xl opacity-50 -rotate-12"
        animate={{ rotate: [-12, -25, -12], y: [0, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden md:block absolute top-1/2 left-16 w-8 h-8 bg-[#FF5722] rounded-full opacity-40"
        animate={{ scale: [1, 1.2, 1], y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Section2;
