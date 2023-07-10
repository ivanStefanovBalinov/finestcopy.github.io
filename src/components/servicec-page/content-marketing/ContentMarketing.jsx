import React from "react";
import "./ContentMarketing.scss";
import HeroSection from "../../common/HeroSection/HeroSection";
import contentMarketingInfo from "../../../utils/servicesInfo/content-marketing/content-marketing";
import heroImg from "../../../assets/img/hero-content-marketing.png";
import FooterMain from "../../Layout/Foooter/FooterMain";
import CalendlyComponent from "../../home-page/CalendlyComponent";
import ClientComments from "../../home-page/ClientComments";
import PurpleSection from "../common/PurpleSection";

const ContentMarketing = () => {
  return (
    <>
      <HeroSection
        className="content-marketing-hero-section"
        firstHeaderText={contentMarketingInfo.heroSection.firstHeaderText}
        secondHeaderText={contentMarketingInfo.heroSection.secondHeaderText}
        textArr={contentMarketingInfo.heroSection.textArr}
        paddingLeftImgCol="50px"
        primaryImg={heroImg}
        secondaryImg={heroImg}
        btnTitle="Запитване"
        btnOnHover="on-hover-purple"
        textColor="section-text-color-purple"
        textAlign="left"
      />
      <PurpleSection
        sectionHeader={contentMarketingInfo.purpleSectionText.header}
        textArr={contentMarketingInfo.purpleSectionText.textArr}
        textColor="section-text-color-white"
        textAlign="left"
      />
      <ClientComments />
      <CalendlyComponent />
      <FooterMain />
    </>
  );
};

export default ContentMarketing;
