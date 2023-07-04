import React from "react";
import "./HeadersStyles.scss";

const HeroHeader = ({ headerText, colorType }) => {
  return <h1 className={colorType}>{headerText}</h1>;
};

export default HeroHeader;
