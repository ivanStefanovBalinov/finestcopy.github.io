import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../assets/img/small-logo2.png";
import "./FooterMain.scss";
import SearchInput from "../../common/SearchInput";

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
      </Container>
      <h3>Footer</h3>
    </footer>
  );
};

export default FooterMain;
