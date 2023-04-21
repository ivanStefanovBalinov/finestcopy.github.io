import { Link } from "react-router-dom";
import "./Footer.scss";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          &copy; FINEST COPY // ALL RIGHTS RESERVED //{" "}
          <a href="/">PRIVACY POLICY</a>
        </p>
      </div>
      <div className="beta-portal">
        <Link to="/home">Beta Version</Link>
      </div>
    </div>
  );
};

export default Footer;
