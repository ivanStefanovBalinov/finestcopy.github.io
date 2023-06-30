import React from "react";
import "./HeadersStyles.scss";

const ServiceSectionHeader = ({ headerText, colorType, headerAlign }) => {
  return <h2 className={`${colorType}, ${headerAlign}`}>{headerText}</h2>;
};

export default ServiceSectionHeader;
