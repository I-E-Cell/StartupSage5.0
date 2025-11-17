import React from "react";
import Navbar from "./Navbar";
import Loginbtn from "../components/buttons/Loginbtn";
import Signupbtn from "../components/buttons/Signupbtn";
import treasure from "/treasure.svg";
import moon from "/moon.svg";

function Hero() {
  return (
    <>
      <div className="flex w-full h-full flex-col lg:gap-y-2 gap-y-12 justify-center items-start font-semiboldx">
        <div className="lg:mb-4  self-center">
            <p>[SharkTank AIT]</p>
        </div>
        <div className="lg:ml-[20%]">
            <p>[NextNiche]</p>
        </div>
        <div className="w-fit">
            <div className="w-fit">
                <div className="w-fit flex flex-row items-center">

                    <p className="text-[clamp(2.3rem,7.5vw,12rem)] text-nowrap">Startup Saga 5.0</p>
                    <img src={treasure} className="lg:h-22 h-17 mt-4" alt="" />
                </div>
            </div>
            <div className="w-fit">
                <div className="w-fit flex flex-row items-center">

                    <p className="text-[clamp(2.3rem,7.5vw,12rem)] text-nowrap">Coming</p>
                    <img src={moon} className="lg:h-22 h-17 mt-4" alt="" />
                    <p className="text-[clamp(2.3rem,7.5vw,12rem)] text-nowrap">Soon</p>
                    <p className="mt-8">[Expo]</p>
                </div>
            </div>

        </div>
        <div className="ml-[35%] mt-6">[StandUp]</div>
      </div>
      <div className="flex flex-row justify-between items-center w-full mb-16 border-b py-4">
        <div>
          <p className="lg:text-xl text-sm ">/ Play the Game, Earn the Profits!</p>
        </div>
        <div className="flex flex-row gap-3">
          <Loginbtn label="Brochure" />
          <Signupbtn label="Contact Us" />
        </div>
      </div>
    </>
  );
}

export default Hero;
