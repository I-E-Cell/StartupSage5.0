import React from "react";
import Loginbtn from "../components/buttons/Loginbtn";
import Signupbtn from "../components/buttons/Signupbtn";
import treasure from "/treasure.svg";
import moon from "/moon.svg";

function Hero() {
  return (
    <>
      <div className="w-full flex flex-col gap-6 justify-center items-start font-semibold">

        <div className="ml-[40vw] mt-6 self-start">
          <p>[NextNiche]</p>
        </div>
        <div className="ml-[15vw] mt-6 self-start">
          <p>[SharkTank AIT]</p>
        </div>

        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex flex-row items-center gap-4 flex-wrap">
            <p className="text-[clamp(2.0rem,7.5vw,6rem)] font-jetbrains-regular leading-none tracking-tight">Startup Saga <span className="font-rainy font-light">5.0</span></p>
            <img src={treasure} className="lg:h-24 h-17 mt-2 max-w-24 object-contain" alt="treasure" />
          </div>

          <div className="flex flex-row items-center gap-4 flex-wrap">
            <p className="text-[clamp(2.3rem,7.5vw,6rem)] leading-none font-rainy ">Coming</p>
            <img src={moon} className="lg:h-24 h-17 mt-2 max-w-24 object-contain" alt="moon" />
            <p className="text-[clamp(2.3rem,7.5vw,6rem)] font-jetbrains-regular leading-none tracking-tight">Soon</p>
            <p className="mt-6 lg:mt-2 md:ml-0 ml-[30vw] ">[Expo]</p>
          </div>
        </div>

        <div className="mt-6 ml-[55vw]">[StandUp]</div>
      </div>

      <div className="flex flex-row justify-between items-center mt-18 md:mt-4 w-full mb-16 border-b py-4">
        <div>
          <p className="lg:text-xl text-sm font-jetbrains-regular">/ Play the Game, Earn the Profits!</p>
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
