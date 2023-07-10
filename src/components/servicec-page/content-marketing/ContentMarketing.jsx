import React from "react";
import "./ContentMarketing.scss";
import HeroSection from "../../common/HeroSection/HeroSection";
import contentMarketingInfo from "../../../utils/servicesInfo/content-marketing/content-marketing";
import heroImg from "../../../assets/img/hero-content-marketing.png";
import FooterMain from "../../Layout/Foooter/FooterMain";
import CalendlyComponent from "../../home-page/CalendlyComponent";
import ClientComments from "../../home-page/ClientComments";
import PurpleSection from "../common/PurpleSection";
import contentMarketingImg1 from "../../../assets/img/content-marketing-img1.png";
import contentMarketingImg2 from "../../../assets/img/content-marketing-ps.gif";
import WhiteSection from "../common/WhiteSection";

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
        sectionImg={contentMarketingImg1}
      />
      <WhiteSection
        sectionHeader={contentMarketingInfo.whiteSectionText.header}
        textArr={contentMarketingInfo.whiteSectionText.textArr}
        textColor="section-text-color-purple"
        textAlign="left"
        sectionImg={contentMarketingImg2}
      />
      <ClientComments />
      <CalendlyComponent />
      <FooterMain />
    </>
  );
};

export default ContentMarketing;
