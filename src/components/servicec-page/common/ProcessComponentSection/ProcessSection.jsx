import React from "react";
import "./ProcessSection.scss";
import ServiceSectionHeader from "../../../common/HeadersComponents/ServiceSectionHeader";

const ProcessSection = () => {
  return (
    <section>
      <ServiceSectionHeader
        colorType="section-header-purple center"
        headerText="OUR PROCESS"
        headerAlign="center"
      />
      <div className="arrow-header"></div>
    </section>
  );
};

export default ProcessSection;
