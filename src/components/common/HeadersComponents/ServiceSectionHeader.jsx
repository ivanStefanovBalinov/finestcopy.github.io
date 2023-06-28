import React from "react";
import "./HeadersStyles.scss";

const ServiceSectionHeader = ({ headerText, colorType, headerAlign }) => {
  return <h1 className={(colorType, headerAlign)}>{headerText}</h1>;
};

export default ServiceSectionHeader;
