import React from "react";
import Logo from "../../images/logo-y.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Map, Message, Pencil } from "../../components/constants/icons";

function Footer() {
  return (
    <div className="footer__content">
      <Row>
        <Col className="footer-left col-md-4 col-sm-6">
          <p className="about">
            <span> About the company</span> Ut congue augue non tellus bibendum,
            in varius tellus condimentum. In scelerisque nibh tortor, sed
            rhoncus odio condimentum in. Sed sed est ut sapien ultrices
            eleifend. Integer tellus est, vehicula eu lectus tincidunt,
            ultricies feugiat leo. Suspendisse tellus elit, pharetra in
            hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante
            sed, viverra massa.
          </p>
          <div className="icons">
            <Map />
            <Message />
            <Pencil />
          </div>
        </Col>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <p>Bergen street 1</p>
          </div>
          <div>
            <p> (+47) 51 66 00 00</p>
          </div>
          <div>
            <p>holidaze@company.com</p>
            <p className="name"> Holidaze &copy; 2021</p>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <img src={Logo} className="footer__logo" alt="company logo " />
          <ul className="footer__menu">
            <li>
              <a href="home"> Home</a>
            </li>
            <li>
              <a href="hotels"> Hotels</a>
            </li>
            <li>
              <a href="contact"> Contact</a>
            </li>
            <li>
              <a href="enquiry"> Enquiry</a>
            </li>
          </ul>
        </div>
      </Row>
    </div>
  );
}

export default Footer;
