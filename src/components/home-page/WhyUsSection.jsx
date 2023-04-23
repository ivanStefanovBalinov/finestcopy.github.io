import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhyUsSection.scss";
import flatIcon1 from "../../assets/img/typewriter.png";
import flatIcon2 from "../../assets/img/rocket.png";
import flatIcon3 from "../../assets/img/bar-chart.png";

const WhyUsSection = () => {
  return (
    <div className="why-us">
      <Container>
        <Row>
          <Col>
            <h2 className="why-us-header">изберете нас</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="why-us-h">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia, assumenda?
            </h3>
            <p className="why-us-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              deleniti atque distinctio numquam officiis vitae! <br />
              Et nemo, facere dolorem cupiditate fuga, est quo tempora
              architecto illo accusamus ducimus labore asperiores natus
              reiciendis a necessitatibus eum, iure minus! Iste magnam maxime
              nihil impedit sunt est ducimus nulla quo ab facilis quam iure
              perspiciatis aut et id vel nisi libero molestias, reiciendis
              consequatur ex.
              <br /> Consequuntur ipsum nam porro omnis officia necessitatibus
              obcaecati explicabo dicta, voluptate vitae nesciunt exercitationem
              quam laborum hic cupiditate! Ex, placeat animi repellat voluptas
              sit asperiores, pariatur rem aut fugiat, ullam accusamus? Dolor
              ipsum et cupiditate voluptatum atque nisi!
            </p>
          </Col>
          <Col className="img-wrapper">
            <div className="img-box">
              <img className="flat-icons" src={flatIcon1} alt="partnership" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="img-wrapper">
            <div className="img-box">
              <img className="flat-icons" src={flatIcon2} alt="partnership" />
            </div>
          </Col>
          <Col>
            <h3 className="why-us-h">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia, assumenda?
            </h3>
            <p className="why-us-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              deleniti atque distinctio numquam officiis vitae! <br />
              Et nemo, facere dolorem cupiditate fuga, est quo tempora
              architecto illo accusamus ducimus labore asperiores natus
              reiciendis a necessitatibus eum, iure minus! Iste magnam maxime
              nihil impedit sunt est ducimus nulla quo ab facilis quam iure
              perspiciatis aut et id vel nisi libero molestias, reiciendis
              consequatur ex.
              <br /> Consequuntur ipsum nam porro omnis officia necessitatibus
              obcaecati explicabo dicta, voluptate vitae nesciunt exercitationem
              quam laborum hic cupiditate! Ex, placeat animi repellat voluptas
              sit asperiores, pariatur rem aut fugiat, ullam accusamus? Dolor
              ipsum et cupiditate voluptatum atque nisi!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="why-us-h">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia, assumenda?
            </h3>
            <p className="why-us-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              deleniti atque distinctio numquam officiis vitae! <br />
              Et nemo, facere dolorem cupiditate fuga, est quo tempora
              architecto illo accusamus ducimus labore asperiores natus
              reiciendis a necessitatibus eum, iure minus! Iste magnam maxime
              nihil impedit sunt est ducimus nulla quo ab facilis quam iure
              perspiciatis aut et id vel nisi libero molestias, reiciendis
              consequatur ex.
              <br /> Consequuntur ipsum nam porro omnis officia necessitatibus
              obcaecati explicabo dicta, voluptate vitae nesciunt exercitationem
              quam laborum hic cupiditate! Ex, placeat animi repellat voluptas
              sit asperiores, pariatur rem aut fugiat, ullam accusamus? Dolor
              ipsum et cupiditate voluptatum atque nisi!
            </p>
          </Col>
          <Col className="img-wrapper">
            <div className="img-box">
              <img className="flat-icons" src={flatIcon3} alt="partnership" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyUsSection;
