import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../assets/img/small-logo2.png";
import "./FooterMain.scss";
import SearchInput from "../../common/SearchInput";
import FOOTER_INFO from "../../../data/footerInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FooterMain = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <img src={logo} alt="Finest-Copy" className="footer-logo" />
          </Col>
          <Col>
            <SearchInput />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{FOOTER_INFO.colOneInfo}</p>
          </Col>
          <Col>
            <h2>Услуги</h2>
            <ul>
              {FOOTER_INFO.colTwoServices.map((service) => {
                return (
                  <div>
                    <FontAwesomeIcon icon={faLightbulb} />
                    <li key={service}>
                      <Link>{service}</Link>
                    </li>
                  </div>
                );
              })}
            </ul>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      <h3>Footer</h3>
    </footer>
  );
};

export default FooterMain;
