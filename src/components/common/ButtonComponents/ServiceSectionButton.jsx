import React from "react";
import "./ServiceSectionButton.scss";

const ServiceSectionButton = ({
  path,
  onHover,
  title,
  buttonAlign,
  marginBottom,
}) => {
  return (
    <div
      className="service-button-wrapper"
      style={{
        display: "flex",
        justifyContent: buttonAlign,
        marginBottom: marginBottom,
      }}
    >
      <a href={path} className={onHover}>
        {title}
      </a>
    </div>
  );
};

export default ServiceSectionButton;
