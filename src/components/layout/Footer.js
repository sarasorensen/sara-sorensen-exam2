import React from "react";
import Logo from "../../images/logo-y.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Facebook, Twitter, LinkedIn } from "../../components/constants/icons";

function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col className="footer-left col-md-4 col-sm-6">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Col>
        <div className="footer-center col-md-4 col-sm-6">
          <a href="/">
            {" "}
            <img src={Logo} className="footer__logo" alt="company logo " />
          </a>

          <p>Bergen street 1</p>

          <p> (+47) 51 66 00 00</p>
          <p>holidaze@company.com</p>

          <p className="name"> Holidaze &copy; 2021</p>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
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

            <div className="icons">
              <a href="https://www.facebook.com/">
                {" "}
                <Facebook />
              </a>
              <a href="https://twitter.com/twitter">
                {" "}
                <Twitter />
              </a>
              <a href="https://www.linkedin.com/feed/">
                {" "}
                <LinkedIn />
              </a>
            </div>
          </ul>
        </div>
      </Row>
    </div>
  );
}

export default Footer;
