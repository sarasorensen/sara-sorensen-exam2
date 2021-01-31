import React from "react";
import Logo from "../../images/logo-y.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Facebook, Twitter, LinkedIn } from "../../components/constants/icons";

function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col className="footer__left col-md-4 col-sm-6">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Col>
        <div className="footer__center col-md-4 col-sm-6">
          <a href="/">
            {" "}
            <img src={Logo} className="logo footer__logo" alt="company logo " />
          </a>

          <p>Bergen street 1</p>

          <p> (+47) 51 66 00 00</p>
          <p>holidaze@company.com</p>

          <p className="name"> Holidaze &copy; 2021</p>
        </div>
        <div className="footer__right col-md-4 col-sm-6">
          <ul className="footer__menu">
            <h3>Navigation</h3>
            <li>
              <a href="home"> Home</a>
            </li>
            <li>
              <a href="hotels"> Hotels</a>
            </li>
            <li>
              <a href="contact"> Contact</a>
            </li>
          </ul>

          <div className="icons">
            <a href="https://www.facebook.com/">
              {" "}
              <span className="sr-only">Facebook Logo</span>
              <Facebook />
            </a>
            <a href="https://twitter.com/twitter">
              {" "}
              <span className="sr-only">Twitter Logo</span>
              <Twitter />
            </a>
            <a href="https://www.linkedin.com/feed/">
              {" "}
              <span className="sr-only">LinkedIn Logo</span>
              <LinkedIn />
            </a>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default Footer;
