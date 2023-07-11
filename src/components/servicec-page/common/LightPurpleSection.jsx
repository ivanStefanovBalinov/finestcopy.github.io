import React from "react";
import "./LightPurpleSection.scss";
import { Col, Container, Row } from "react-bootstrap";
import ServicePageParagraphs from "../../common/ParagraphComponents/ServicePageParagraphs";
import ServiceSectionHeader from "../../common/HeadersComponents/ServiceSectionHeader";
import ServiceSectionButton from "../../common/ButtonComponents/ServiceSectionButton";
import SectionImageComponent from "../../common/ImageComponents/SectionImageComponent";
import PrimaryCardComponent from "./primaryCardComponent/PrimaryCardComponent";

const LightPurpleSection = ({
  headerText,
  headerAlign,
  headerColorType,
  textArrParagraphs,
  textColor,
  textAlign,
  button,
  buttonPath,
  buttonTitle,
  buttonOnHover,
  buttonAlign,
  buttonMarginBottom,
  image,
  imageAlt,
  imageJustifyContent,
  cardElements,
  cardsInfoArr,
}) => {
  return (
    <section className="light-purple-section">
      <Container>
        <Row className="light-purple-section-row">
          <Col>
            <ServiceSectionHeader
              headerText={headerText}
              headerAlign={headerAlign}
              colorType={headerColorType}
            />
            {textArrParagraphs && (
              <ServicePageParagraphs
                textArr={textArrParagraphs}
                textAlign={textAlign}
                textColor={textColor}
              />
            )}
            {button && (
              <ServiceSectionButton
                path={buttonPath}
                title={buttonTitle}
                onHover={buttonOnHover}
                buttonAlign={buttonAlign}
                marginBottom={buttonMarginBottom}
              />
            )}
            {image && (
              <SectionImageComponent
                image={image}
                imageAlt={imageAlt}
                justifyContent={imageJustifyContent}
              />
            )}
            {cardElements && (
              <Row className="cards-row">
                {cardsInfoArr.map((cardInfo, index) => {
                  if (index < 3) {
                    return (
                      <Col lg="4">
                        <PrimaryCardComponent
                          cardIcon={cardInfo.iconCode}
                          cardHeader={cardInfo.title}
                          cardText={cardInfo.text}
                          key={index + 1}
                        />
                      </Col>
                    );
                  } else if (index >= 3) {
                    return (
                      <Col lg="4">
                        <PrimaryCardComponent
                          cardIcon={cardInfo.iconCode}
                          cardHeader={cardInfo.title}
                          cardText={cardInfo.text}
                          key={index + 1}
                        />
                      </Col>
                    );
                  }
                })}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LightPurpleSection;
