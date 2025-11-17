import React from "react";
import Navbar from "./Navbar";
import Loginbtn from "../components/buttons/Loginbtn";
import Signupbtn from "../components/buttons/Signupbtn";
import treasure from "/treasure.svg";
import moon from "/moon.svg";

function Hero() {
  return (
    <>
      <div className="flex w-full h-full flex-col gap-y-2 justify-center items-start font-semibold relative">
        <div className="mb-4 self-center">
            <p>[SharkTank AIT]</p>
        </div>
        <div className="ml-[20%]">
            <p>[NextNiche]</p>
        </div>
        <div>
            <div className="flex flex-row">
                <p className="text-8xl">Startup Saga 5.0</p>
                <img src={treasure} className="h-32" alt="" />
            </div>
            <div className="flex flex-row w-full items-center gap-x-8">
                <p className="text-8xl text-nowrap">Coming</p>
                <img src={moon} className="h-32" alt="" />
                <p className="text-8xl text-nowrap">Coming</p>
                <p className="pl-[5%] pt-6">[Expo]</p>
            </div>
        </div>
        <div className="ml-[35%] mt-6">[StandUp]</div>
      </div>
      <div className="flex flex-row justify-between w-full mb-16 border-b py-4">
        <div>
          <p>/ Play the Game, Earn the Profits!</p>
        </div>
        <div className="flex flex-row gap-3">
          <Loginbtn label="Login" />
          <Signupbtn label="Sign UP" />
        </div>
      </div>
    </>
  );
}

export default Hero;
