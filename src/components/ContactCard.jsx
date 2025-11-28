import React from "react";
import Ribbon from "/assets/images/Ribbon.svg";
import Stars from "/assets/images/ThreeStars.svg";
import Glow from "/assets/images/Glow.svg";
import BtnUnion from "/assets/images/BtnUnion.svg";
import BtnBg from "/assets/images/BtnBg.svg";

const ContactCard = ({ position, name, contact }) => {
  return (
    <div className="w-[350px] h-48 bg-[#C83FD3] rounded-3xl relative tracking-wider flex justify-center items-center border-4 border-white text-white font-[lilita]">
      {/* ribbon, stars and position */}
      <div className="absolute z-10 top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
        <div className="relative w-full flex justify-center items-center">
          <img src={Ribbon} alt="" />
          <p className="font-[lilita] uppercase absolute text-lg">
            {position}
          </p>
          <img
            src={Stars}
            className="absolute top-1/3 -translate-y-full left-1/2 -translate-x-1/2"
            alt=""
          />
        </div>
      </div>

      {/* card glow */}
      <img
        src={Glow}
        className="absolute top-0 -translate-y-full left-1/2 -translate-x-1/2 opacity-40"
        alt=""
      />
      {/* btn bg */}
      <img
        src={BtnBg}
        className="absolute bottom-0 left-0 w-full opacity-40"
        alt="btn-bg"
      />

      {/* bottom stripes */}
      <div className="absolute top-0 left-0 w-full opacity-10 rounded-t-2xl overflow-hidden">
        <img src={BtnUnion} className="w-full" alt="btn-union" />
      </div>

      {/* content */}
      <div className="flex flex-col justify-center items-center gap-0">
        <h1 className="text-4xl">{name}</h1>
        <p className="text-2xl">{contact}</p>
      </div>
    </div>
  );
};

export default ContactCard;
