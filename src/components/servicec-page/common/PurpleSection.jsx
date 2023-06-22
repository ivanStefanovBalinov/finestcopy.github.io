import React from "react";
import "./PurpleSection.scss";
import { Col, Container, Row } from "react-bootstrap";

const PurpleSection = () => {
  return (
    <section className="purple-section">
      <Container>
        <Row className="purple-section-row">
          <Col lg="6" className="text-column">
            <h1>TARGETED DISPLAY ADS</h1>
            <p>
              Getting the most out of any campaign means making sure the right
              people are seeing your advertising materials.
            </p>
            <p>
              With targeted display ads you can make sure your HTML5 Ads catch
              the eye of genuine potential clients and – combined with a
              retargeting strategy – capture click-throughs which result in
              increased sales. By introducing dynamic retargeting banners, you
              can re-engage with visitors of your page to reinforce your
              offering and maximize the chance of completing a sale.
            </p>
            <p>
              This is especially powerful for e-commerce businesses or anyone
              aiming to drive engagement through their online presence.
            </p>
            <div>
              <a href="/">Read More</a>
            </div>
          </Col>
          <Col lg="6">
            <img
              src="https://cdn.pixabay.com/photo/2016/06/13/10/10/business-girl-1453917_960_720.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PurpleSection;
