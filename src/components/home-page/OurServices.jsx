import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhyUsSection.scss";
import "./OurServices.scss";
import React from "react";
import ServiceCard from "../serviceCard/ServiceCard";
import SERVICE_CARDS_INFO from "../../data/servicesCardInfo";

const OurServices = () => {
  return (
    <div className="services-section">
      <h2 className="our-services-header">Нашите Услуги</h2>
      <Container>
        <Row>
          {SERVICE_CARDS_INFO.map((cardInfo, index) => {
            if (index < 3) {
              return (
                <ServiceCard
                  cardIcon={cardInfo.iconCode}
                  cardHeader={cardInfo.title}
                  info={cardInfo.infoText}
                  key={cardInfo.id}
                />
              );
            }
            return null;
          })}
        </Row>
        <Row>
          {SERVICE_CARDS_INFO.map((cardInfo, index) => {
            if (index < 6 && index > 2) {
              return (
                <ServiceCard
                  cardIcon={cardInfo.iconCode}
                  cardHeader={cardInfo.title}
                  info={cardInfo.infoText}
                  key={cardInfo.id}
                />
              );
            }
            return null;
          })}
        </Row>
        <Row>
          {SERVICE_CARDS_INFO.map((cardInfo, index) => {
            if (index > 5) {
              return (
                <ServiceCard
                  cardIcon={cardInfo.iconCode}
                  cardHeader={cardInfo.title}
                  info={cardInfo.infoText}
                  key={cardInfo.id}
                />
              );
            }
            return null;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
