import React from "react";
import FooterChar from "/assets/images/footer-char.webp";
import FooterShape from "/assets/images/Footer.webp";
import StonedBtm from "/assets/images/StonedBtm.svg";
import Fb from "/assets/images/Fb.svg";
import X from "/assets/images/X.svg";
import Insta from "/assets/images/Insta.svg";
import Linkedin from "/assets/images/Linkedin.svg";
import Github from "/assets/images/Github.svg";
import Discord from "/assets/images/Discord.svg";
import Map from "/assets/images/Map.webp";

const Footer = () => {
  return (
    <div
      className="w-full bg-[#0064C8] relative flex flex-col items-center"
    >
      {/* stoned top */}
      <img src={StonedBtm} className="w-full" alt="stoned-bottom" />

      {/* social links */}
      <div className="flex gap-8 justify-center w-full">
        <a href="" target="_blank">
          <img className="w-8" src={Fb} alt="" />
        </a>
        <a href="" target="_blank">
          <img className="w-8" src={X} alt="" />
        </a>
        <a href="" target="_blank">
          <img className="w-8" src={Insta} alt="" />
        </a>
        <a href="" target="_blank">
          <img className="w-8" src={Linkedin} alt="" />
        </a>
        <a href="" target="_blank">
          <img className="w-8" src={Github} alt="" />
        </a>
        <a href="" target="_blank">
          <img className="w-8" src={Discord} alt="" />
        </a>
      </div>

      {/* map */}
      <div className="px-4 md:px-6 py-6 flex gap-6 justify-center items-center mt-8 md:mt-16 w-11/12 md:w-2/3 lg:w-1/3 relative">
        <img src={Map} className="absolute top-0" alt="" />
        <iframe
          class="rounded-sm w-full h-48 md:h-56 lg:h-64 z-50 border-3"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.64883570219!2d73.87434400449611!3d18.607325966357873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70090000001%3A0x160a20f3d0273495!2sArmy%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1700741837638!5m2!1sen!2sin"
        ></iframe>
      </div>

      {/* mario char image */}
      <img src={FooterChar} className="md:w-3/4 mx-auto" alt="footer-char" />

      {/* red footer bottom */}
      <div className="w-full bg-[#E60012] relative flex justify-center items-center border-none outline-none py-2 md:py-6">
        <div className="absolute top-0 -translate-y-full w-full">
          <img src={FooterShape} alt="footer-shape" />
        </div>
        <p className="font-[superMario] text-lg md:text-4xl text-white">
          -Creating Synergy
        </p>
      </div>
    </div>
  );
};

export default Footer;
