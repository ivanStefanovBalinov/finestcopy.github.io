import React from "react";
import "./infoCardComponent.scss";

const infoCardComponent = ({ cardHeader, cardIcon, cardText }) => {
  return (
    <div className="why-us-card-wrapper">
      <div className="why-us-icon-wrapper">{cardIcon}</div>
      <h2>{cardHeader}</h2>
      <p>{cardText}</p>
    </div>
  );
};

export default infoCardComponent;
