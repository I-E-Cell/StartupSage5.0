import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Map from "/assets/images/Map.webp";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="relative bg-[#0064C8] w-full min-h-screen md:h-[140vh] px-4 md:px-12 lg:px-24 flex flex-col gap-12 md:gap-24 pb-12">
      <Navbar />

      {/* main heading */}
      <div className="flex flex-col gap-6 md:gap-12 justify-center items-center mt-8 md:mt-0">
        <Heading />
        {/* tagline */}
        <p
          className="text-base md:text-xl lg:text-2xl font-bold text-white uppercase font-[superMario] tracking-widest text-center px-4"
          style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,1))" }}
        >
          From Ore to Empire
        </p>
        <Button />
        {/* event dates */}
        <div
          className="w-11/12 md:w-3/4 lg:w-1/2 h-64 md:h-80 lg:h-96 px-4 md:px-8 lg:px-10 py-4 md:py-6 text-5xl md:text-7xl lg:text-9xl font-[superMario] text-gray-900 flex gap-3 md:gap-6 justify-center items-center"
          style={{
            background: `url(${Map})`,
            backgroundSize: "95%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <p>10</p>
            <p className="text-2xl md:text-4xl lg:text-5xl">Jan</p>
          </div>
          <p>-</p>
          <div className="flex flex-col justify-center items-center">
            <p>15</p>
            <p className="text-2xl md:text-4xl lg:text-5xl">Jan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
