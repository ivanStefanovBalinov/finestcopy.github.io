import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Carousel from "./Carousel";
import "./HomePage.scss";
import React from "react";
import PartnersSlider from "./PartnersSlider";
import WhyUsSection from "./WhyUsSection";
import OurServices from "./OurServices";

const HomePage = () => {
  return (
    <div className="home-page" id="home">
      <Navbar />
      <Carousel />
      <PartnersSlider />
      <WhyUsSection />
      <OurServices />
    </div>
  );
};

export default HomePage;
