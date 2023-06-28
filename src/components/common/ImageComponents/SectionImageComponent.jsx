import React from "react";
import "./ImageStyles.scss";
const SectionImageComponent = ({ image, imageAlt }) => {
  return <img className="section-image" src={image} alt={imageAlt} />;
};

export default SectionImageComponent;
