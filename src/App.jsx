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
      <Hero />
      <Timer />
      <PrizePool />
      <Events />
      <Section1 />
      <Section2 />
      <Faq />
      <PastSponsors />
      <SponsorUs />
      <Footer />
    </div>
  );
};

export default App;
