import React from "react";
import "./ProcessSection.scss";
import ServiceSectionHeader from "../../../common/HeadersComponents/ServiceSectionHeader";
import { Col, Container, Row } from "react-bootstrap";
import SmallHeaderComponent from "../../../common/HeadersComponents/SmallHeaderComponent";
import ourProcessInfo from "../../../../utils/ourProcessInfo";

const ProcessSection = () => {
  return (
    <section>
      <ServiceSectionHeader
        colorType="section-header-purple center"
        headerText="OUR PROCESS"
        headerAlign="center"
      />
      <div className="arrow-header">
        {ourProcessInfo.map((process) => (
          <div className="process-title">
            <SmallHeaderComponent
              headerText={process.header}
              faIcon={process.icon}
            />
          </div>
        ))}
      </div>
      <Container>
        <Row>
          {ourProcessInfo.map((process) => (
            <Col>
              <p className="process-paragraph">{process.textInfo}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProcessSection;
