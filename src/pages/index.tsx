import { type NextPage } from "next";
import About from "../components/About";
import Details from "../components/Details";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Team from "../components/Team";

const Home: NextPage = () => {
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
