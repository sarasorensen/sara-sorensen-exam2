import React, { useState, useEffect } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../constants/api";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Heading from "../layout/Heading";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EnquiryForm from "./EnquiryForm";

export default function Enquiry() {
  <Heading title="Enquiry" />;
  window.localStorage.removeItem("email");

  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const url = BASE_URL + "establishments/" + id;

  useEffect(() => {
    fetch(url, FETCH_OPTIONS)
      .then((response) => response.json())
      .then((json) => setDetail(json))
      .catch((error) => console.log("error hotel specific" + error))
      .finally(() => setLoading(false));
  });

  if (loading) {
    return (
      <div className="spinner__box">
        <Spinner role="status" className="spinner__box--animation" />
        <span className="sr-only">Loading content...</span>
      </div>
    );
  }

  return (
    <div className="form__container">
      <Row>
        <Col className="form__col--1 col-sm-12   col-lg-6">
          <h1 className="enquiry__name">{detail.hotelName}</h1>

          <img
            className="enquiry__hotel"
            src={detail.image}
            alt={detail.hotelName}
          />

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
