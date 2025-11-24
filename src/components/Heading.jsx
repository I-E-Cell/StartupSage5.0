import React from "react";
import "../App.css"

const Heading = ({ 
  lines = [
    { text: "STARTUP", colors: ["mario-blue", "mario-yellow", "mario-red", "mario-green", "mario-yellow", "mario-blue", "mario-red"] },
    { text: "SAGA", colors: ["mario-red", "mario-green", "mario-yellow", "mario-blue"] }
  ]
}) => {
  return (
    <div
      className={`font-[superMario] text-stroke leading-none tracking-tighter text-7xl md:text-9xl flex flex-col items-center`}
      style={{ filter: "drop-shadow(0px 16px 0px rgba(0,0,0,1))",  }}
    >
      {lines.map((line, lineIdx) => (
        <div key={lineIdx}>
          {line.text.split("").map((letter, letterIdx) => (
            <span key={letterIdx} className={`text-${line.colors[letterIdx]}`}>
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Heading;