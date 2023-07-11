import React from "react";
import "./Copywriting.scss";
import HeroSection from "../../common/HeroSection/HeroSection";
import PurpleSection from "../common/PurpleSection";
import WhiteSection from "../common/WhiteSection";
import ClientComments from "../../home-page/ClientComments";
import CalendlyComponent from "../../home-page/CalendlyComponent";
import copywritingInfo from "../../../utils/servicesInfo/copywriting/copywritingInfo";
import heroImg from "../../../assets/img/copywriting-hero-img.png";
import heroImg2 from "../../../assets/img/copywriting-hero-img2.png";
import FooterMain from "../../Layout/Foooter/FooterMain";
import LightPurpleSection from "../common/LightPurpleSection";
import sectionImage from "../../../assets/img/copywriting-purple-section-img.png";
import sectionAnimation from "../../../assets/json-animations/copywriting-white-section-animation.json";
const Copywriting = () => {
  return (
    <>
      <HeroSection
        className="content-marketing-hero-section"
        firstHeaderText={copywritingInfo.heroSection.firstHeaderText}
        secondHeaderText={copywritingInfo.heroSection.secondHeaderText}
        textArr={copywritingInfo.heroSection.textArr}
        paddingLeftImgCol="50px"
        primaryImg={heroImg}
        secondaryImg={heroImg2}
        btnTitle="Запитване"
        btnOnHover="on-hover-purple"
        textColor="section-text-color-purple"
        textAlign="left"
      />
      <PurpleSection
        sectionHeader={copywritingInfo.purpleSectionText.header}
        textArr={copywritingInfo.purpleSectionText.textArr}
        textColor="section-text-color-white"
        textAlign="left"
        sectionImg={sectionImage}
        imagePositionLeft="54%"
      />
      <WhiteSection
        sectionHeader={copywritingInfo.whiteSectionText.header}
        textArr={copywritingInfo.whiteSectionText.textArr}
        textColor="section-text-color-purple"
        textAlign="left"
        sectionAnimation={sectionAnimation}
      />
      <LightPurpleSection
        headerText={copywritingInfo.lightPurpleSection.header}
        headerAlign="center"
        headerColorType="section-header-purple"
        cardElements={true}
        cardsInfoArr={copywritingInfo.lightPurpleSection.cardsInfoArr}
      />
      <ClientComments />
      <CalendlyComponent />
      <FooterMain />
    </>
  );
};

export default Copywriting;
