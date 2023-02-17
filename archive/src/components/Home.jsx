import React from "react";
import About from "./About";
import Details from "./Details";
import Faq from "./Faq";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Team from "./Team";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Team />
      <Details />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
