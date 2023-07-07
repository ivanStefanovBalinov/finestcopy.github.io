import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeroHeader from "../HeadersComponents/HeroHeader";
import ServicePageParagraphs from "../ParagraphComponents/ServicePageParagraphs";
import ServiceSectionButton from "../ButtonComponents/ServiceSectionButton";
import HeroImage from "../HeroImage/HeroImage";

const HeroSection = ({
  className,
  firstHeaderText,
  secondHeaderText,
  textArr,
  textColor,
  textAlign,
  btnPath,
  btnOnHover,
  btnTitle,
  btnAlign,
  btnMarginBottom,
  primaryImg,
  secondaryImg,
  paddingLeftImgCol,
}) => {
  return (
    <section className={className}>
      <Container>
        <Row>
          <Col>
            <HeroHeader colorType="light" headerText={firstHeaderText} />
            <HeroHeader colorType="dark" headerText={secondHeaderText} />
            <ServicePageParagraphs
              textArr={textArr}
              textColor={textColor}
              textAlign={textAlign}
            />
            <ServiceSectionButton
              path={btnPath}
              onHover={btnOnHover}
              title={btnTitle}
              buttonAlign={btnAlign}
              marginBottom={btnMarginBottom}
            />
          </Col>
          <Col>
            <HeroImage
              primaryImg={primaryImg}
              secondaryImg={secondaryImg}
              paddingLeft={paddingLeftImgCol}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
