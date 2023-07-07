import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import whyUsInfo from "../../../utils/whyUsInfoCards";
import "./WhyUs.scss";
import WhyUsCardComponent from "./WhyUsCard/WhyUsCardComponent";
import ServiceSectionHeader from "../../common/HeadersComponents/ServiceSectionHeader";
const WhyUS = () => {
  return (
    <section className="why-us-wrapper">
      <Container>
        <Row>
          <ServiceSectionHeader
            headerAlign="center"
            colorType="section-header-purple center"
            headerText="Защо ние сме по-различни?"
          />
          {whyUsInfo.map((element) => (
            <Col>
              <WhyUsCardComponent
                cardHeader={element.title}
                cardIcon={element.iconCode}
                key={element.id}
                cardText={element.infoText}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyUS;
