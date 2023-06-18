import Footer from "../footer/Footer";
import Navbar from "../Layout/navbar/Navbar";
import Carousel from "./Carousel";
import "./HomePage.scss";
import React from "react";
import PartnersSlider from "./PartnersSlider";
import WhyUsSection from "./WhyUsSection";
import OurServices from "./OurServices";
import FooterMain from "../Layout/Foooter/FooterMain";

const HomePage = () => {
  return (
    <div className="home-page" id="home">
      <Navbar />
      <Carousel />
      <PartnersSlider />
      <WhyUsSection />
      <OurServices />
      <FooterMain />
    </div>
  );
};

export default HomePage;
