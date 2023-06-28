import React from "react";
import "./HeadersStyles.scss";

const HeroHeader = ({ headerText, colorType }) => {
  if (colorType === "dark") {
    return <h1 className="dark">{headerText}</h1>;
  }
  return <h1 className="light">{headerText}</h1>;
};

export default HeroHeader;
