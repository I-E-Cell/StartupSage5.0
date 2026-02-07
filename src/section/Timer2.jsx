import React from "react";
import BambooBg from "/assets/images/bamboobg.png";
import Pipe from "/assets/images/Pipe.webp";
import Pattern from "/assets/images/pattern.webp";
import Dots from "/assets/images/Dots.webp";
import Stars from "/assets/images/Stars.svg";
import CountDown from "../components/CountDown";

function Timer2() {
  return (
    <div className="relative w-full -mt-2 md:-mt-44 -mb-20 md:-mb-45 z-30">
      {/* Decorative Bamboo Leaves - Peeking over Hero2 */}


      {/* Bamboo Background Container */}
      <div className="relative w-screen" style={{ marginLeft: 'calc(-50vw + 50%)' }}>
        {/* Bamboo Image - Force fill entire viewport */}
        <img
          src={BambooBg}
          alt="Bamboo Background"
          className="w-screen block scale-x-[1.5] scale-y-[1.8] md:scale-x-[1.15] md:scale-y-100 origin-center"
        />

        {/* Pipes on sides */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex w-full justify-between pointer-events-none z-20">
          <img src={Pipe} className="h-64 lg:h-80 xl:h-96 rotate-180" alt="pipe-left" />
          <img src={Pipe} className="h-64 lg:h-80 xl:h-96" alt="pipe-right" />
        </div>

        {/* Content area for timer - positioned over the bamboo */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {/* Countdown card */}
          <div className="border-2 md:border-4 border-black h-auto w-11/12 md:w-3/4 lg:w-1/2 rounded-2xl bg-white ">
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
                  <CountDown targetDate={"2026-03-06T00:00:00"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer2;