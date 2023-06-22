import React from "react";
import "./ServicesMain.scss";
import ServiceHeader from "../common/ServiceHeader";
import PurpleSection from "../common/PurpleSection";
import WhiteSection from "../common/WhiteSection";
import FooterMain from "../../Layout/Foooter/FooterMain";

const ServicesMainPage = () => {
  return (
    <div className="page-header">
      <ServiceHeader />
      <PurpleSection />
      <WhiteSection />
      <FooterMain />
    </div>
  );
};

export default ServicesMainPage;
