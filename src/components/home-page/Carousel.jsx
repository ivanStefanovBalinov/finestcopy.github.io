import React from "react";
import "./Carousel.scss";
import { Col, Container, Row } from "react-bootstrap";
import CarouselImg from "../../assets/img/carousel.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousel = () => {
  return (
    <div className="carousel">
      <Container>
        <Row>
          <Col>
            <div className="text-area">
              <h3>Finest Copy Digital Marketing Solution</h3>
              <h2>Правилната дестинация за ефективни маркетинг решения</h2>
              <p>
                Създаваме вашия дигитален облик с модерни технологични средсва
                за печелившо онлайн присъствие.
              </p>
              <button>Запитване</button>
            </div>
          </Col>
          <Col>
            <div className="carousel-img">
              <img src={CarouselImg} alt="carousel" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Carousel;
