import React from "react";
import "./ImageStyles.scss";
const SectionImageComponent = ({ image, imageAlt, justifyContent }) => {
  return (
    <div style={{ display: "flex", justifyContent: justifyContent }}>
      <img className="section-image" src={image} alt={imageAlt} />
    </div>
  );
};

export default SectionImageComponent;
