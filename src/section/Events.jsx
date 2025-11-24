import React from "react";
import Stones from "/assets/images/Stones.webp";
import EventContainer from "/assets/images/EventContainer.webp";
import Event1 from "/assets/images/Event1.webp";
import Event2 from "/assets/images/Event2.webp";
import Event3 from "/assets/images/Event3.webp";
import Event4 from "/assets/images/Event4.webp";

const Events = () => {
  return (
    <div
      className="relative w-full pb-96 bg-black text-white"
      style={{
        background: `url(${Stones})`,
        backgroundSize: "25%",
        backgroundRepeat: "repeat",
      }}
    >
      {/* gradients */}
      <div className="bg-linear-to-b from-black to-transparent absolute top-0 w-full h-44" />
      <div className="bg-linear-to-t from-black to-transparent absolute bottom-0 w-full h-44" />

      {/* heading */}
      <div className="relative font-[superMario] text-white text-9xl pt-32 flex justify-center items-center">
        Events
      </div>

      {/* events container */}
      <div className="relative flex flex-col mt-24 gap-32 w-full">
        {/* top most text */}
        <marquee
          direction="left"
          behavior="scroll"
          scrollamount="10"
          className="w-full text-white font-[superMario] text-8xl absolute top-0 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-full opacity-15 -rotate-3"
        >
          Go Deep Underground Go Deep Underground Go Deep Underground
        </marquee>
        {/* event1 */}
        <div className="flex items-end w-full">
          <div className="relative w-[40%] ml-24 rotate-3 flex justify-center items-center">
            <img
              src={EventContainer}
              className=" absolute -bottom-12 w-full"
              alt=""
            />
            <div className="z-10 text-gray-900 flex flex-col items-center gap-6">
              <div className="font-[superMario] text-4xl">NextNiche</div>
              <p className="w-full px-8 text-center">
                An 18 hour long Business Hackathon where creativity meets
                problem-solving. Compete with the brightest minds, tackle
                real-world challenges, and bring ideas to life. Push your
                limits, collaborate, and turn bold ideas into reality! An 18
                hour long Business Hackathon where creativity meets
                problem-solving. Compete with the brightest minds.
              </p>
            </div>
          </div>
          <div className="w-[60%]">
            <img src={Event1} className="-ml-24" alt="" />
          </div>
        </div>

        {/* event2 */}
        <div className="flex items-end w-full">
          <div className="relative w-[40%] ml-24 rotate-3 flex justify-center items-center">
            <img
              src={EventContainer}
              className=" absolute -bottom-12 w-full"
              alt=""
            />
            <div className="z-10 text-gray-900 flex flex-col items-center gap-6">
              <div className="font-[superMario] text-4xl">NextNiche</div>
              <p className="w-full px-8 text-center">
                An 18 hour long Business Hackathon where creativity meets
                problem-solving. Compete with the brightest minds, tackle
                real-world challenges, and bring ideas to life. Push your
                limits, collaborate, and turn bold ideas into reality! An 18
                hour long Business Hackathon where creativity meets
                problem-solving. Compete with the brightest minds.
              </p>
            </div>
          </div>
          <div className="w-[60%]">
            <img src={Event2} className="-ml-24" alt="" />
          </div>
        </div>

        {/* event3 */}
        <div className="flex items-end w-full">
          <div className="relative w-[40%] ml-24 rotate-3 flex justify-center items-center">
            <img
              src={EventContainer}
              className=" absolute -bottom-12 w-full"
              alt=""
            />
            <div className="z-10 text-gray-900 flex flex-col items-center gap-6">
              <div className="font-[superMario] text-4xl">NextNiche</div>
              <p className="w-full px-8 text-center">
                An 18 hour long Business Hackathon where creativity meets
                problem-solving. Compete with the brightest minds, tackle
                real-world challenges, and bring ideas to life. Push your
                limits, collaborate, and turn bold ideas into reality! An 18
                hour long Business Hackathon where creativity meets
                problem-solving. Compete with the brightest minds.
              </p>
            </div>
          </div>
          <div className="w-[60%]">
            <img src={Event3} className="-ml-24" alt="" />
          </div>
        </div>

        {/* event4 */}
        <div className="flex items-end w-full">
          <div className="relative w-[40%] ml-24 rotate-3 flex justify-center items-center">
            <img
              src={EventContainer}
              className=" absolute -bottom-12 w-full"
              alt=""
            />
            <div className="z-10 text-gray-900 flex flex-col items-center gap-6">
              <div className="font-[superMario] text-4xl">NextNiche</div>
              <p className="w-full px-8 text-center">
                An 18 hour long Business Hackathon where creativity meets
                problem-solving. Compete with the brightest minds, tackle
                real-world challenges, and bring ideas to life. Push your
                limits, collaborate, and turn bold ideas into reality! An 18
                hour long Business Hackathon where creativity meets
                problem-solving. Compete with the brightest minds.
              </p>
            </div>
          </div>
          <div className="w-[60%]">
            <img src={Event4} className="-ml-24" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
