import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form";
import contactimg from "../assets/Chat.jpg"

const Contact = () => {
  return <div>
    <Navbar />
    <HeroImg2
      title="Contact"
      description="Let's have a Chatt"
      imglink={contactimg} />
    <Form />
    <Footer />
  </div>;
};

export default Contact;
