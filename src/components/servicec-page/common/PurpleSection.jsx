import React from "react";
import "./PurpleSection.scss";
import { Col, Container, Row } from "react-bootstrap";
import ServicePageParagraphs from "../../common/ParagraphComponents/ServicePageParagraphs";
import Lottie from "lottie-react";

const PurpleSection = ({
  sectionHeader,
  textArr,
  sectionImg,
  imagePositionLeft,
  textColor,
  textAlign,
  sectionAnimation = false,
  animationBottomPosition,
  animationRightPosition,
  btn = false,
}) => {
  return (
    <section className="purple-section">
      <Container>
        <Row className="purple-section-row">
          <Col lg="6" className="text-column">
            <h2>{sectionHeader}</h2>
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
          <Col lg="6">
            <div className="purple-section-img-wrapper">
              {sectionImg && (
                <img src={sectionImg} style={{ left: imagePositionLeft }} />
              )}
              {sectionAnimation && (
                <div
                  className="animation-wrapper"
                  style={{
                    bottom: animationBottomPosition,
                    right: animationRightPosition,
                  }}
                >
                  <Lottie
                    animationData={sectionAnimation}
                    loop={true}
                    autoPlay={true}
                  />
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PurpleSection;
