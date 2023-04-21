import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./HomePage.scss";
import React from "react";

const HomePage = () => {
  return (
    <div className="home-page" id="home">
      <Navbar />
      <Footer />
    </div>
  );
};

export default HomePage;
