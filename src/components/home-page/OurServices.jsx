import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhyUsSection.scss";
import "./OurServices.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCode,
  faFileText,
  faLineChart,
  faPaintBrush,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const OurServices = () => {
  return (
    <div className="services-section">
      <h2 className="our-services-header">Нашите Услуги</h2>
      <Container>
        <Row>
          <Col>
            <div className="service-icon">
              <FontAwesomeIcon icon={faFileText} />
            </div>
            <h3 className="service-card-h3">Маркетинг чрез съдържание</h3>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum a veritatis pariatur voluptatibus dolore suscipit, in
              id dolores sapiente hic quia maiores modi necessitatibus. Nostrum
              laborum qui porro voluptates adipisci vero, saepe fugiat earum
              expedita deleniti voluptatum officiis odit provident.
            </p>
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </Col>
          <Col>
            <div className="service-icon">
              <FontAwesomeIcon icon={faFileText} />
            </div>
            <h3 className="service-card-h3">Копирайтинг</h3>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum a veritatis pariatur voluptatibus dolore suscipit, in
              id dolores sapiente hic quia maiores modi necessitatibus. Nostrum
              laborum qui porro voluptates adipisci vero, saepe fugiat earum
              expedita deleniti voluptatum officiis odit provident.
            </p>
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </Col>
          <Col>
            <div className="service-icon">
              <FontAwesomeIcon icon={faLineChart} />
            </div>
            <h3 className="service-card-h3">SEO Оптимизация</h3>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum a veritatis pariatur voluptatibus dolore suscipit, in
              id dolores sapiente hic quia maiores modi necessitatibus. Nostrum
              laborum qui porro voluptates adipisci vero, saepe fugiat earum
              expedita deleniti voluptatum officiis odit provident.
            </p>
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="service-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <h3 className="service-card-h3">Facebook Реклама</h3>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum a veritatis pariatur voluptatibus dolore suscipit, in
              id dolores sapiente hic quia maiores modi necessitatibus. Nostrum
              laborum qui porro voluptates adipisci vero, saepe fugiat earum
              expedita deleniti voluptatum officiis odit provident.
            </p>
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </Col>
          <Col>
            <div className="service-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <h3 className="service-card-h3">Instagram реклама</h3>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum a veritatis pariatur voluptatibus dolore suscipit, in
              id dolores sapiente hic quia maiores modi necessitatibus. Nostrum
              laborum qui porro voluptates adipisci vero, saepe fugiat earum
              expedita deleniti voluptatum officiis odit provident.
            </p>
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </Col>
          <Col>
            <div className="service-icon">
              <FontAwesomeIcon icon={faGoogle} />
            </div>
            <h3 className="service-card-h3">Google реклама</h3>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum a veritatis pariatur voluptatibus dolore suscipit, in
              id dolores sapiente hic quia maiores modi necessitatibus. Nostrum
              laborum qui porro voluptates adipisci vero, saepe fugiat earum
              expedita deleniti voluptatum officiis odit provident.
            </p>
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="service-icon">
              <FontAwesomeIcon icon={faPaintBrush} />
            </div>
            <h3 className="service-card-h3">Графичен дизайн</h3>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum a veritatis pariatur voluptatibus dolore suscipit, in
              id dolores sapiente hic quia maiores modi necessitatibus. Nostrum
              laborum qui porro voluptates adipisci vero, saepe fugiat earum
              expedita deleniti voluptatum officiis odit provident.
            </p>
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </Col>
          <Col>
            <div className="service-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h3 className="service-card-h3">Изработка на уебсайт</h3>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum a veritatis pariatur voluptatibus dolore suscipit, in
              id dolores sapiente hic quia maiores modi necessitatibus. Nostrum
              laborum qui porro voluptates adipisci vero, saepe fugiat earum
              expedita deleniti voluptatum officiis odit provident.
            </p>
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </Col>
          <Col>
            <div className="service-icon">
              <FontAwesomeIcon icon={faPencil} />
            </div>
            <h3 className="service-card-h3">
              Редакторски и коректорски углуги
            </h3>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum a veritatis pariatur voluptatibus dolore suscipit, in
              id dolores sapiente hic quia maiores modi necessitatibus. Nostrum
              laborum qui porro voluptates adipisci vero, saepe fugiat earum
              expedita deleniti voluptatum officiis odit provident.
            </p>
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
