import React from "react";
import Clouds from "/assets/images/Clouds-gp.svg";
import Accordion from "../components/Accordion";

const Faq = () => {
  return (
    <div className="w-full bg-white relative flex flex-col items-center py-12 pb-44
     justify-start gap-12">
      {/* clouds */}
      <div className="absolute top-0 -translate-y-full scale-110">
        <img className="w-full" src={Clouds} alt="" />
      </div>

      {/* heading */}
      <div
        className="text-8xl md:text-9xl flex items-end gap-2 font-[superMario] text-green-500"
        style={{ filter: "drop-shadow(0px 12px 0px rgba(0,0,0,1))" }}
      >
        <p>FAQ</p>
        <p className="text-4xl lg:text-5xl mb-2 md:mb-4">s</p>
      </div>

      <Accordion />
    </div>
  );
};

export default Faq;
