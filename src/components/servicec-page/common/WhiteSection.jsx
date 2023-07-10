import React from "react";
import "./WhiteSection.scss";
import { Col, Container, Row } from "react-bootstrap";
import ServicePageParagraphs from "../../common/ParagraphComponents/ServicePageParagraphs";

const WhiteSection = ({
  sectionHeader,
  textArr,
  sectionImg,
  textColor,
  textAlign,
  btn = false,
}) => {
  return (
    <div>
      <section className="white-section">
        <Container>
          <Row className="white-section-row">
            <Col lg="6">
              <div className="white-section-img-wrapper">
                <img src={sectionImg} />
              </div>
            </Col>
            <Col lg="6" className="text-column">
              <h1>{sectionHeader}</h1>
              <ServicePageParagraphs
                textArr={textArr}
                textColor={textColor}
                textAlign={textAlign}
              />
              {btn && (
                <div>
                  <a href="/">Научи повече</a>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default WhiteSection;
