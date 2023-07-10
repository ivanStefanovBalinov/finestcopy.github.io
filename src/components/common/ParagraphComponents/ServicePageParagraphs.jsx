import React from "react";
import "./ParagraphStyles.scss";

const ServicePageParagraphs = ({ textArr, textColor, textAlign }) => {
  return (
    <>
      {textArr.map((paragraph, index) => (
        <p key={index + 1} className={`${textAlign}  ${textColor}`}>
          {paragraph}
        </p>
      ))}
    </>
  );
};

export default ServicePageParagraphs;
