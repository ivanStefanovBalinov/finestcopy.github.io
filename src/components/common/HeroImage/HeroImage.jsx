import React, { useState } from "react";
import "./HeroImage.scss";

const HeroImage = ({ primaryImg, secondaryImg, paddingLeft }) => {
  const [isPointed, setIsPointed] = useState(false);

  return (
    <div style={{ paddingLeft: paddingLeft }}>
      <div className="hero-img-col">
        <div
          className="img-wrapper"
          onMouseEnter={() => {
            setIsPointed(true);
          }}
          onMouseLeave={() => {
            setIsPointed(false);
          }}
        >
          <img src={isPointed ? secondaryImg : primaryImg} alt="hero-image" />
        </div>
        <div className={isPointed ? "element-1-animation" : "element-1"}></div>
        <div className={isPointed ? "element-2-animation" : "element-2"}></div>
        <div className={isPointed ? "element-3-animation" : "element-3"}></div>
        <div className={isPointed ? "element-4-animation" : "element-4"}></div>
        <div className={isPointed ? "element-5-animation" : "element-5"}></div>
        <div className={isPointed ? "element-6-animation" : "element-6"}></div>
      </div>
    </div>
  );
};

export default HeroImage;
