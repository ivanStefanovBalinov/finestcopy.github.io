import React from "react";
import "./LightPurpleSection.scss";
import { Col, Container, Row } from "react-bootstrap";
const LightPurpleSection = ({
  header,
  paragraphs,
  button,
  image,
  justifyContent,
}) => {
  return (
    <section className="light-purple-section">
      <Container>
        <Row className="light-purple-section-row">
          <Col>
            {header}
            {paragraphs}
            {button}
            {image}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LightPurpleSection;
