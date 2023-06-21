import React from "react";
import "./CalendlyComponent.scss";
import { InlineWidget, PopupWidget } from "react-calendly";

const CalendlyComponent = () => {
  return (
    <section className="calendly-wrapper">
      <h2 className="calendly-header">Насрочете среща</h2>
      <div className="calendly-box">
        <InlineWidget
          styles={{ height: "750px", paddingBottom: "50px" }}
          url="https://calendly.com/betina-finestcopy/1-1"
          pageSettings={{
            textColor: "#2d1768",
          }}
        />
      </div>
    </section>
  );
};

export default CalendlyComponent;
