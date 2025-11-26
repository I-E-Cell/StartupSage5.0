import React from "react";
import Pipe from "/assets/images/Pipe.webp";
import Castle from "/assets/images/Castle.webp";
import Pattern from "/assets/images/pattern.webp";
import Dots from "/assets/images/Dots.webp";
import Stars from "/assets/images/Stars.svg";
import CountDown from "../components/CountDown";
import WaveW from "/assets/images/WaveW.svg";
import WonderFlower from "../components/WonderFlower";
const Timer = () => {
  return (
    <div
      className="w-full min-h-screen md:h-[90vh] relative flex justify-center items-center px-4 py-8"
      style={{
        background: `url(${Castle})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* top blue element */}
      <div className="absolute top-0">
        <img className="w-full" src={WaveW} alt="" />
      </div>

      {/* pipes */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex w-full justify-between">
        <img src={Pipe} className="h-64 lg:h-80 xl:h-96 rotate-180" alt="pipe-left" />
        <img src={Pipe} className="h-64 lg:h-80 xl:h-96" alt="pipe-right" />
      </div>

      {/* countdown card */}
      <div className="border-2 md:border-4 border-black h-auto md:h-[60%] w-11/12 md:w-3/4 lg:w-1/2 rounded-2xl bg-white -rotate-1 md:-rotate-3">
        <div
          className="h-full w-full p-3 md:p-5"
          style={{
            background: `url(${Pattern})`,
            backgroundSize: "cover",
          }}
        >
          <div className="bg-linear-to-r from-[#FF9B00] via-[#FFA900] to-[#FFBE00] h-full w-full rounded-lg border-2 md:border-3 border-black">
            <div
              className="h-full w-full flex gap-4 md:gap-6 flex-col justify-center items-center relative py-8 md:py-0"
              style={{
                background: `url(${Dots})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute top-4 md:top-6 left-4 md:left-6 p-2 md:p-4">
                <img src={Stars} className="w-8 md:w-10 lg:w-12" alt="stars" />
              </div>
              <div className="font-[superMario] text-white text-xl md:text-3xl lg:text-4xl tracking-wide text-center px-4">
                Adventure starts in
              </div>
              <CountDown targetDate={"2026-01-10T00:00:00"} />
            </div>
          </div>
        </div>
      </div>

      {/* Wonder flower */}
      <div className="absolute -bottom-4 -right-16 md:-right-32 w-1/2 md:w-1/3 hidden md:flex justify-center items-end">
        <WonderFlower />
      </div>
    </div>
  );
};

export default Timer;
