import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../home-page/OurServices.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ cardIcon, cardHeader, info, path }) => {
  const navigate = useNavigate();

  return (
    <Col lg="4" onClick={() => navigate(path)}>
      <div className="service-icon">{cardIcon}</div>
      <div className="service-icon">
        <FontAwesomeIcon icon={cardIcon} />
      </div>
      <h3 className="service-card-h3">{cardHeader}</h3>
      <p className="service-text">{info}</p>
      <FontAwesomeIcon className="arrow" icon={faArrowRight} />
    </Col>
  );
};

export default ServiceCard;
