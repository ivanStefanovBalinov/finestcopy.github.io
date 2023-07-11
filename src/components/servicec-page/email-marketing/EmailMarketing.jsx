import React from "react";
import "./EmailMarketing.scss";
import HeroSection from "../../common/HeroSection/HeroSection";
import PurpleSection from "../common/PurpleSection";
import WhiteSection from "../common/WhiteSection";
import ClientComments from "../../home-page/ClientComments";
import CalendlyComponent from "../../home-page/CalendlyComponent";
import FooterMain from "../../Layout/Foooter/FooterMain";
import copywritingInfo from "../../../utils/servicesInfo/copywriting/copywritingInfo";
import heroImg1 from "../../../assets/img/email-marketing-hero-img1.png";
import heroImg2 from "../../../assets/img/email-marketing-hero-img2.png";

const EmailMarketing = () => {
  return (
    <>
      <HeroSection
        className="content-marketing-hero-section"
        firstHeaderText={copywritingInfo.heroSection.firstHeaderText}
        secondHeaderText={copywritingInfo.heroSection.secondHeaderText}
        textArr={copywritingInfo.heroSection.textArr}
        paddingLeftImgCol="50px"
        primaryImg={heroImg1}
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
        sectionImg={""}
      />
      <WhiteSection
        sectionHeader={copywritingInfo.whiteSectionText.header}
        textArr={copywritingInfo.whiteSectionText.textArr}
        textColor="section-text-color-purple"
        textAlign="left"
        sectionAnimation={""}
        animationBottomPosition="5%"
        animationRightPosition="4%"
      />
      <ClientComments />
      <CalendlyComponent />
      <FooterMain />
    </>
  );
};

export default EmailMarketing;
