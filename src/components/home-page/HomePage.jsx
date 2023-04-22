import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Carousel from "./Carousel";
import "./HomePage.scss";
import React from "react";
import PartnersSlider from "./PartnersSlider";

const HomePage = () => {
  return (
    <div className="home-page" id="home">
      <Navbar />
      <Carousel />
      <PartnersSlider />
    </div>
  );
};

export default HomePage;
