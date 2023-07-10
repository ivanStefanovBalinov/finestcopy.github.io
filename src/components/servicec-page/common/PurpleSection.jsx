import React from "react";
import "./PurpleSection.scss";
import { Col, Container, Row } from "react-bootstrap";
import ServicePageParagraphs from "../../common/ParagraphComponents/ServicePageParagraphs";

const PurpleSection = ({
  sectionHeader,
  textArr,
  sectionImg,
  textColor,
  textAlign,
}) => {
  return (
    <section className="purple-section">
      <Container>
        <Row className="purple-section-row">
          <Col lg="6" className="text-column">
            <h1>{sectionHeader}</h1>
            <ServicePageParagraphs
              textArr={textArr}
              textColor={textColor}
              textAlign={textAlign}
            />
            <div>
              <a href="/">Read More</a>
            </div>
          </Col>
          <Col lg="6">
            <img src={sectionImg} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PurpleSection;
