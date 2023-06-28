import React from "react";
import "./ServiceSectionButton.scss";

const ServiceSectionButton = ({ path, onHover, title, buttonAlign }) => {
  return (
    <div
      className={"service-button-wrapper"}
      style={{ display: "flex", justifyContent: buttonAlign }}
    >
      <a href={path} className={onHover}>
        {title}
      </a>
    </div>
  );
};

export default ServiceSectionButton;
