import React from "react";
import "./ServicesMain.scss";
import ServiceHeader from "../common/ServiceHeader";
import PurpleSection from "../common/PurpleSection";
import WhiteSection from "../common/WhiteSection";
import FooterMain from "../../Layout/Foooter/FooterMain";
import LightPurpleSection from "../common/LightPurpleSection";
import servicesInfo from "../../../utils/servicesInfo";
import mockup from "../../../assets/img/mockup.png";
import CalendlyComponent from "../../home-page/CalendlyComponent";
import ClientComments from "../../home-page/ClientComments";
import WhyUS from "../common/WhyUS";
import "../../home-page/OurServices.scss";
import ProcessSection from "../common/ProcessComponentSection/ProcessSection";

const ServicesMainPage = () => {
  return (
    <div className="page-header">
      <ServiceHeader />
      {/* <PurpleSection /> */}
      {/* <WhiteSection /> */}
      <LightPurpleSection
        headerText={servicesInfo.mainServicePage.lightPurpleSection.header}
        headerColorType="section-header-purple center"
        headerAlign="center"
        textArrParagraphs={
          servicesInfo.mainServicePage.lightPurpleSection.paragraphs
        }
        textAlign="center"
        textColor="section-text-color-purple"
        button={true}
        buttonPath="/"
        buttonTitle="read more"
        buttonOnHover="on-hover-purple"
        buttonAlign="center"
        buttonMarginBottom="50px"
        image={mockup}
        imageAlt="Finest Copy"
        imageJustifyContent="center"
      />
      <WhyUS />
      <ProcessSection />
      <ClientComments />
      <CalendlyComponent />
      <FooterMain />
    </div>
  );
};

export default ServicesMainPage;
