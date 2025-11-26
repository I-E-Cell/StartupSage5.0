import React, { useState, useEffect } from "react";

const CountDown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetTime = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
          ),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const pad = (num) => String(num).padStart(2, "0");

  return (
    <div className="flex justify-center text-white font-bold text-sm md:text-lg lg:text-xl font-[superMario] gap-0 md:gap-2">
      <div className="py-1 md:py-2 px-2 md:px-4 flex flex-col gap-0 items-center justify-center">
        <p className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl">
          {pad(timeLeft.days)}:
        </p>
        <p className="uppercase text-xs md:text-sm lg:text-base">Days</p>
      </div>
      <div className="py-1 md:py-2 px-2 md:px-4 flex flex-col gap-0 items-center justify-center -ml-2 md:-ml-4">
        <p className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl">
          {pad(timeLeft.hours)}:
        </p>
        <p className="text-xs md:text-sm lg:text-base">Hours</p>
      </div>
      <div className="py-1 md:py-2 px-2 md:px-4 flex flex-col gap-0 items-center justify-center -ml-2 md:-ml-4">
        <p className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl">
          {pad(timeLeft.minutes)}:
        </p>
        <p className="text-xs md:text-sm lg:text-base">Minutes</p>
      </div>
      <div className="py-1 md:py-2 px-2 md:px-4 flex flex-col gap-0 items-center justify-center -ml-2 md:-ml-4">
        <p className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl">
          {pad(timeLeft.seconds)}
        </p>
        <p className="text-xs md:text-sm lg:text-base">Seconds</p>
      </div>
    </div>
  );
};

export default CountDown;