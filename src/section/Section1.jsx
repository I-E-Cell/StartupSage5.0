import React from "react";
import WaveY from "/assets/images/WaveY.svg";
import { motion } from "framer-motion";
import WonderCoin from "/assets/images/wonder-coin.svg";

// Timeline icons - using emoji placeholders, replace with actual icons/images
const timelineData = [
  {
    id: 1,
    title: "Mini Event 1: Arcade",
    date: "Feb 22",
    status: null,
    icon: "💡",
    iconBg: "bg-[#E8E8E8]",
    borderColor: "border-[#2D5A27]",
  },
  {
    id: 2,
    title: "Mini Event 2: Among Us",
    date: "Feb 28",
    status: null,
    icon: "📝",
    iconBg: "bg-[#7ECFC0]",
    borderColor: "border-[#5A4A8A]",
  },
  {
    id: 3,
    title: "Mini Event 3: Defence Tech Discussion",
    date: "LIVE NOW",
    status: "live",
    icon: "⭐",
    iconBg: "bg-[#C490E4]",
    borderColor: "border-[#6B4A8A]",
  },
  {
    id: 4,
    title: "Mini Event 4: E Chai Ventures",
    date: "Feb 29",
    status: null,
    icon: "🔧",
    iconBg: "bg-[#D4C4A8]",
    borderColor: "border-[#8A7A5A]",
  },
  {
    id: 5,
    title: "Event 1: NextNiche Hackathon",
    date: "Mar 6 - Mar 7",
    status: null,
    icon: "🏆",
    iconBg: "bg-[#C9A86C]",
    borderColor: "border-[#8A6A3A]",
  },
  {
    id: 5,
    title: "Event 2: Shark Tank AIT",
    date: "Mar 8",
    status: null,
    icon: "🏆",
    iconBg: "bg-[#C9A86C]",
    borderColor: "border-[#8A6A3A]",
  },
  {
    id: 5,
    title: "Event 3: Startup Expo",
    date: "Mar 8",
    status: null,
    icon: "🏆",
    iconBg: "bg-[#C9A86C]",
    borderColor: "border-[#8A6A3A]",
  },
];

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
      id="timeline"
      className="w-full min-h-screen bg-[#FFD200] relative border-none outline-none overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }}
    >
      {/* Top wave decoration */}
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

      {/* Timeline Title */}
      <div className="flex justify-center pt-32 md:pt-36 pb-8 md:pb-12">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-[superMario] text-black tracking-wide">
          Event Timeline
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-8 pb-20">
        {/* Center Line - visible on both mobile and desktop */}
        <div className="absolute left-[45px] md:left-1/2 top-0 bottom-0 w-1 bg-[#C4A000] md:-translate-x-1/2"></div>

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
                  isEven
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Mobile Layout: Icon tilted and placed on the timeline line */}
                <div className="md:hidden flex items-center w-full">
                  {/* Icon Box - tilted and centered on the line */}
                  <div
                    className={`relative flex-shrink-0 ${
                      item.status === "live" ? "w-20 h-20 -rotate-6" : "w-14 h-14 rotate-6"
                    } rounded-xl ${item.iconBg} border-4 ${item.borderColor} flex items-center justify-center ${
                      item.status === "live" ? "text-3xl" : "text-xl"
                    } shadow-lg z-10`}
                    style={{ 
                      boxShadow: "4px 4px 0px rgba(0,0,0,0.2)",
                      marginLeft: item.status === "live" ? "8px" : "8px"
                    }}
                  >
                    {item.icon}
                    {item.status === "done" && (
                      <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#2ECC71] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase whitespace-nowrap rotate-0">
                        Done
                      </span>
                    )}
                    {item.status === "live" && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#9B59B6] rounded-full animate-pulse border-2 border-white"></span>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="ml-4">
                    <h3
                      className={`font-[superMario] text-black italic ${
                        item.status === "live" ? "text-lg" : "text-sm"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`font-[space] text-black/70 uppercase tracking-wider ${
                        item.status === "live"
                          ? "text-sm underline decoration-2"
                          : "text-xs"
                      }`}
                    >
                      {item.date}
                    </p>
                  </div>
                </div>

                {/* Desktop Layout: Alternating sides */}
                <div className="hidden md:flex items-center w-full">
                  {/* Left Side Content (for even items: 0, 2, 4) */}
                  {isEven ? (
                    <>
                      <div className="w-1/2 pr-8 flex items-center justify-end">
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
                        {/* Text Content */}
                        <div className="ml-4 text-left">
                          <h3 className="text-xl lg:text-2xl font-[superMario] text-black italic">
                            {item.title}
                          </h3>
                          <p className="text-sm font-[space] text-black/70 uppercase tracking-wider">
                            {item.date}
                          </p>
                        </div>
                      </div>
                      {/* Right side empty for even items */}
                      <div className="w-1/2"></div>
                    </>
                  ) : (
                    <>
                      {/* Left side empty for odd items */}
                      <div className="w-1/2"></div>
                      {/* Right Side Content (for odd items: 1, 3) */}
                      <div className="w-1/2 pl-8 flex items-center justify-start">
                        {/* Text Content */}
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
                    </>
                  )}

                  {/* Center connector dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#C4A000] rounded-full border-2 border-[#A68900] z-10"></div>

                  {/* Connection line from center to item */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-6 h-1 bg-[#C4A000] ${
                      isEven ? "right-1/2 mr-2" : "left-1/2 ml-2"
                    }`}
                  ></div>
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

export default Section1;
