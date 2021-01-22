import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "./ContactForm";
import { Envelope } from "../../constants/icons";

export default function Contact() {
  window.localStorage.removeItem("email");

  return (
    <div className="form__container">
      <Row>
        <Col className="form__col--1 col-sm-12   col-lg-6">
          <Envelope />
          <p className="form__info">
            If you have any questions or just want to get in touch, use the
            contact form. We look forward to hearing from you!
          </p>
        </Col>

        <ContactForm />
      </Row>
    </div>
  );
}
