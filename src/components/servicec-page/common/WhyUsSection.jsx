import React from "react";
import "./WhyUsSection.scss";
import { Col, Container, Row } from "react-bootstrap";
import ServiceSectionHeader from "../../common/HeadersComponents/ServiceSectionHeader";
import whyUsInfo from "../../../utils/whyUsInfoCards";
import PrimaryCardComponent from "./primaryCardComponent/primaryCardComponent";
const WhyUsSection = () => {
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
              <PrimaryCardComponent
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

export default WhyUsSection;
