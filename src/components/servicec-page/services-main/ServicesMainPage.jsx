import React from "react";
import "./ServicesMain.scss";
import ServiceHeader from "../common/ServiceHeader";
import PurpleSection from "../common/PurpleSection";
import WhiteSection from "../common/WhiteSection";
import FooterMain from "../../Layout/Foooter/FooterMain";
import LightPurpleSection from "../common/LightPurpleSection";
import ServiceSectionHeader from "../../common/HeadersComponents/ServiceSectionHeader";
import servicesInfo from "../../../utils/servicesInfo";
import ServicePageParagraphs from "../../common/ParagraphComponents/ServicePageParagraphs";
import ServiceSectionButton from "../../common/ButtonComponents/ServiceSectionButton";

const ServicesMainPage = () => {
  return (
    <div className="page-header">
      <ServiceHeader />
      <PurpleSection />
      <WhiteSection />
      <LightPurpleSection
        header={
          <ServiceSectionHeader
            headerText={servicesInfo.mainServicePage.lightPurpleSection.header}
            colorType="section-header-purple center"
            headerAlign="center"
          />
        }
        paragraphs={
          <ServicePageParagraphs
            textAlign="center"
            textColor="section-text-color-purple "
            textArr={servicesInfo.mainServicePage.lightPurpleSection.paragraphs}
          />
        }
        button={
          <ServiceSectionButton
            path="/"
            title="read more"
            onHover="on-hover-purple"
            buttonAlign="center"
          />
        }
      />
      <FooterMain />
    </div>
  );
};

export default ServicesMainPage;
