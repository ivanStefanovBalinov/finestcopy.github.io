import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import whyUsInfo from "../../../utils/whyUsInfoCards";
import ServiceCard from "../../serviceCard/ServiceCard";
import "./WhyUs.scss";
const WhyUS = () => {
  return (
    <section className="why-us-wrapper">
      <Container>
        <Row>
          {whyUsInfo.map((element) => (
            <Col>
              <ServiceCard
                cardHeader={element.title}
                cardIcon={element.iconCode}
                key={element.id}
                info={element.infoText}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyUS;
