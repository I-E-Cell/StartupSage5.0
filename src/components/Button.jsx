import React from "react";
import BtnBg from "/assets/images/BtnBg.svg";
import BtnUnion from "/assets/images/BtnUnion.svg";

const Button = ({ title = "Register on Unstop", text = "text-2xl" }) => {
  return (
    <div
      className={`relative uppercase flex justify-center items-center px-6 font-bold tracking-wider py-3 bg-[#FFA722] rounded-full border-4 border-white text-white cursor-pointer hover:scale-[0.98] duration-300 overflow-hidden font-[lilita] ${text}`}
    >
      <img
        src={BtnBg}
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        alt="btn-bg"
      />
      <img
        src={BtnUnion}
        className="absolute top-0 left-0 w-full opacity-10 pointer-events-none"
        alt="btn-union"
      />

      <div className="flex justify-center items-center">{title}</div>
    </div>
  );
};

export default Button;
