import React from "react";
import HeroSection from "../components/Navbar/HeroSection/HeroSection";
import InfoSection from "../components/Navbar/InfoSection/InfoSection";

import { homeObjOne, homeObjTwo } from "../components/Navbar/InfoSection/Data";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
