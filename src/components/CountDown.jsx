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
    <div className="flex justify-center text-white font-bold text-xl font-[superMario]">
      <div className="py-2 px-4 flex flex-col gap-0 items-center justify-center">
        <p className="text-8xl">
          {pad(timeLeft.days)}:
        </p>
        <p className="uppercase">Days</p>
      </div>
      <div className="py-2 px-4 flex flex-col gap-0 items-center justify-center -ml-4">
        <p className="text-8xl">
          {pad(timeLeft.hours)}:
        </p>
        <p>Hours</p>
      </div>
      <div className="py-2 px-4 flex flex-col gap-0 items-center justify-center -ml-4">
        <p className="text-8xl">
          {pad(timeLeft.minutes)}:
        </p>
        <p>Minutes</p>
      </div>
      <div className="py-2 px-4 flex flex-col gap-0 items-center justify-center -ml-4">
        <p className="text-8xl">
          {pad(timeLeft.seconds)}
        </p>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default CountDown;