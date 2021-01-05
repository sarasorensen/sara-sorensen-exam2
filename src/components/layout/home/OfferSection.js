import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../../images/header.jpg";

export function InfoSection() {
  return (
    <Row className="infoSection__container">
      <Col xs={12} md={6} lg={4}>
        <h2>Special Offer</h2>
        <p>We always wan't to offer our customers the best possible pricing.</p>
        <p>Order now, and get 15% discount.</p>

        <a className="infoSection__link " href="hotels.js">
          Book here
        </a>
      </Col>
      <Col xs={12} md={6} lg={4} className="infoSection__col">
        <img className="infoSection__img " src={Header} alt="text" />
      </Col>
    </Row>
  );
}

export default InfoSection;
