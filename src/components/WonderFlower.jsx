import React from "react";
import { motion } from "framer-motion";
import Flower from "/assets/images/WonderFlower.svg";
import StarTl from "/assets/images/WonderStar-tl.svg";
import StarTl2 from "/assets/images/WonderStar-tl2.svg";
import StarTr from "/assets/images/WonderStar-tr.svg";
import StarTr2 from "/assets/images/WonderStar-tr2.svg";
import StarBl from "/assets/images/WonderStar-bl.svg";
import StarBr from "/assets/images/WonderStar-br.svg";
import StarBr2 from "/assets/images/WonderStar-br2.svg";

const WonderFlower = () => {

  const stars = [
    { src: StarTl, className: "absolute -top-8 left-3" },
    { src: StarTl2, className: "absolute -top-3" },
    { src: StarTr, className: "absolute -top-12 right-12" },
    { src: StarTr2, className: "absolute -top-6 right-6" },
    { src: StarBl, className: "absolute -bottom-6 -left-4" },
    { src: StarBr, className: "absolute bottom-4 right-0" },
    { src: StarBr2, className: "absolute bottom-0 right-12" },
  ];

  return (
    <div className="relative w-1/2">
      <img className="w-80" src={Flower} alt="" />
      {stars.map((star, index) => (
        <motion.img
          key={index}
          className={star.className}
          src={star.src}
          alt=""
          animate={{
            opacity: [0, 1, 0],
            filter: [
              "drop-shadow(0 0 0px rgba(255,255,255,0))",
              "drop-shadow(0 0 12px rgba(255,255,255,0.8))",
              "drop-shadow(0 0 0px rgba(255,255,255,0))",
            ],
          }}
          transition={{
            duration: Math.random() * 2 + 1.5,   // random 1.5–3.5s
            delay: Math.random() * 3,           // random stagger
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default WonderFlower;
