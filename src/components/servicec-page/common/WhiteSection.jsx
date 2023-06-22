import React from "react";
import "./WhiteSection.scss";
import { Col, Container, Row } from "react-bootstrap";

const WhiteSection = () => {
  return (
    <div>
      <section className="white-section">
        <Container>
          <Row className="white-section-row">
            <Col lg="6">
              <img
                src="https://images.creativemarket.com/0.1.0/ps/5697195/600/400/m2/fpnw/wm0/3-.jpg?1547460016&s=7c8c56a9e922fa65c14d99806cf8436a&fmt=webp"
                alt=""
              />
            </Col>
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
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default WhiteSection;
