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
      className="w-full h-[90vh] relative flex justify-center items-center"
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
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex w-full justify-between">
        <img src={Pipe} className="h-96 rotate-180" alt="pipe-left" />
        <img src={Pipe} className="h-96" alt="pipe-right" />
      </div>

      {/* countdown card */}
      <div className="border-4 border-black h-[60%] w-1/2 rounded-2xl bg-white -rotate-3">
        <div
          className="h-full w-full p-5"
          style={{
            background: `url(${Pattern})`,
            backgroundSize: "cover",
          }}
        >
          <div className="bg-linear-to-r from-[#FF9B00] via-[#FFA900] to-[#FFBE00] h-full w-full rounded-lg border-3 border-black">
            <div
              className="h-full w-full flex gap-6 flex-col justify-center items-center relative"
              style={{
                background: `url(${Dots})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute top-6 left-6 p-4">
                <img src={Stars} className="w-12" alt="stars" />
              </div>
              <div className="font-[superMario] text-white text-4xl tracking-wide">
                Adventure starts in
              </div>
              <CountDown targetDate={"2026-01-10T00:00:00"} />
            </div>
          </div>
        </div>
      </div>

      {/* Wonder flower */}
      <div className="absolute -bottom-4 -right-32 w-1/2 flex justify-center items-end">
        <WonderFlower />
      </div>
    </div>
  );
};

export default Timer;
