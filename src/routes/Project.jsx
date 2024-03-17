import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";
import work from "../assets/work.jpg"

const Project = () => {
  return <div>
    <Navbar />
    <HeroImg2
      imglink={work}
      title="Works"
      description="Here are the Mine Main Works." />
    <Work />
    <Footer />
  </div>;
};

export default Project;
