import React from "react";
import Heading from "../Heading";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EnquiryForm from "./EnquiryForm";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";

var hotelName = localStorage.getItem("hotel");
var image = localStorage.getItem("image");

export default function Enquiry() {
  <Heading title="Enquiry" />;
  window.localStorage.removeItem("email");

  const url = BASE_URL + "enquiries";

  // the data we want to send
  const data = {
    name: "Bob The Sheep",
    email: "bob@sheepstuff.no",
    id: "an-id",
    checkIn: "May 28 2020",
    checkOut: "May 29 2020",
  };

  FETCH_OPTIONS.method = "POST";

  FETCH_OPTIONS.body = JSON.stringify(data);

  // send every
  fetch(url, FETCH_OPTIONS)
    .then((r) => r.json())
    .then((j) => console.log(j));

  return (
    <div className="form__container">
      <Row>
        <Col className="form__col--1 col-sm-12   col-lg-6">
          <h1 className="enquiry__name">{hotelName}</h1>

          <img className="enquiry__hotel" src={image} alt={hotelName} />

          <p className="form__info">
            Thank you for choosing Holidaze to book your hotel with. Don't worry
            about making any mistakes when booking your hotel, as this can be
            changed later via email support.
          </p>
        </Col>

        <EnquiryForm />
      </Row>
    </div>
  );
}
