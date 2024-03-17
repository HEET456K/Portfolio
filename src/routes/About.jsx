import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
import about from "../assets/about.jpg"

const About = () => {
  return <div>
    <Navbar />
    <HeroImg2
      imglink={about}
      title="About."
      description="I'M FRIENDLY 
      FULL-STACK DEVELOPER" />
    <AboutContent />
    <Footer />
  </div>;
};

export default About;
