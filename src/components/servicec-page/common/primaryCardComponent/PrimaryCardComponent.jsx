import React from "react";
import "./PrimaryCardComponents.scss";

const PrimaryCardComponent = ({ cardIcon, cardHeader, cardText }) => {
  return (
    <div className="primary-card-wrapper">
      <div className="card-icon-wrapper">{cardIcon}</div>
      <h2>{cardHeader}</h2>
      <p>{cardText}</p>
    </div>
  );
};

export default PrimaryCardComponent;
