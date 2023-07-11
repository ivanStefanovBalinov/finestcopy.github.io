import React from "react";
import "./WhiteSection.scss";
import { Col, Container, Row } from "react-bootstrap";
import ServicePageParagraphs from "../../common/ParagraphComponents/ServicePageParagraphs";
import Lottie from "lottie-react";

const WhiteSection = ({
  sectionHeader,
  textArr,
  sectionImg = false,
  textColor,
  textAlign,
  sectionAnimation = false,
  animationBottomPosition,
  animationRightPosition,
  btn = false,
}) => {
  return (
    <div>
      <section className="white-section">
        <Container>
          <Row className="white-section-row">
            <Col lg="6">
              <div className="white-section-img-wrapper">
                {sectionImg && <img src={sectionImg} />}
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
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default WhiteSection;
