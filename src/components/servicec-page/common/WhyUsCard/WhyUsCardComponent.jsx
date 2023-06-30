import React from "react";
import "./WhyUsCardComponent.scss";

const WhyUsCardComponent = ({ cardHeader, cardIcon, cardText }) => {
  return (
    <div className="why-us-card-wrapper">
      <div className="why-us-icon-wrapper">{cardIcon}</div>
      <h2>{cardHeader}</h2>
      <p>{cardText}</p>
    </div>
  );
};

export default WhyUsCardComponent;
