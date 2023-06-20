import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../assets/img/small-logo2.png";
import "./FooterMain.scss";
import SearchInput from "../../common/SearchInput";
import FOOTER_INFO from "../../../utils/footerInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FooterMain = () => {
  return (
    <footer>
      <Container>
        <Row className="logo-row">
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
          <Col md="auto">
            <h2>Услуги</h2>
            <ul>
              {FOOTER_INFO.colTwoServices.map((service) => {
                return (
                  <div key={service} className="footer-services">
                    <FontAwesomeIcon className="lamp-icon" icon={faLightbulb} />
                    <li>
                      <Link>{service}</Link>
                    </li>
                  </div>
                );
              })}
            </ul>
          </Col>
          <Col>
            <h2>Последно от блога</h2>
            <ul>
              {FOOTER_INFO.colThreeBlogPosts.map((blog) => {
                return (
                  <div key={blog} className="footer-blog">
                    <FontAwesomeIcon className="lamp-icon" icon={faLightbulb} />
                    <li>
                      <Link>{blog}</Link>
                    </li>
                  </div>
                );
              })}
            </ul>
          </Col>
          <Col>
            <ul>
              {FOOTER_INFO.colFourContacts.map((contact) => {
                return (
                  <div key={contact.info} className="footer-contacts">
                    {contact.icon} <Link>{contact.info}</Link>
                  </div>
                );
              })}
            </ul>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col>
            <p>&#169;Finest Copy 2017 - {new Date().getFullYear()} </p>
          </Col>
          <Col className="links">
            <div className="link-wrapper">
              <a href="https://www.facebook.com/finestcopy">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <div className="link-wrapper">
              <a href="https://www.linkedin.com/company/finestcopy/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterMain;
