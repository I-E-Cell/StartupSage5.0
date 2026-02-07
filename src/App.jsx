import React, { useEffect, useState } from "react";
import Hero from "./section/Hero";
import Loader from "./components/Loader";
import Timer from "./section/Timer";
import Section1 from "./section/Section1";
import Section2 from "./section/Section2";
import "./App.css";
import PrizePool from "./section/PrizePool";
import SponsorUs from "./section/SponsorUs";
import Footer from "./section/Footer";
import Events from "./section/Events";
import PastSponsors from "./section/PastSponsors";
import Faq from "./section/Faq";
import Navbar from "./components/Navbar";
import Hero2 from "./section/Hero2";
import Timer2 from "./section/Timer2";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="h-screen w-screen font-[space] overflow-x-hidden relative">
      {/* {isLoading && <Loader />} */}
      <Navbar />
      {/* <Hero /> */}
      <Hero2/>
      <Timer2/>
      {/* <Timer /> */}
      <PrizePool />
      <Events />
      <Section1 />
      {/* <Section2 /> */}
      <Faq />
      <PastSponsors />
      <SponsorUs />
      <Footer />
    </div>
  );
};

export default App;
