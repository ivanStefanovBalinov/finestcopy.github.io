import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceImage from "../../../assets/img/services1.png";
import "./ServiceHeader.scss";

const ServiceHeader = () => {
  return (
    <div className="service-header-wrapper">
      <Container>
        <Row className="header-row">
          <Col lg="7">
            <div className="header-wrapper">
              <h1 className="header-light">Lorem ipsum </h1>
              <h1 className="header-dark">Lorem ipsum </h1>
            </div>
            <div className="header-text-wrapper">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                voluptatibus rem doloribus cumque? Explicabo eius veritatis
                cumque odit porro odio.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                labore laboriosam cum eligendi totam iusto laudantium assumenda
                commodi recusandae blanditiis? Minus, voluptatibus
                exercitationem officia labore consequatur, sapiente soluta illum
                cumque, nulla repellat aperiam saepe? Dolore animi porro
                reiciendis cum quae.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo, et?
              </p>
            </div>
            <div className="header-buttons-wrapper">
              <a href="/" className="book-button">
                book a call
              </a>
              <a href="/" className="portfolio-button">
                see portfolio
              </a>
            </div>
          </Col>
          <Col lg="5">
            <img src={serviceImage} alt="services" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceHeader;
