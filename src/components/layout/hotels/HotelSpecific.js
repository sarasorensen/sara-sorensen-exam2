import React, { useState, useEffect } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../Heading";
import Spinner from "react-bootstrap/Spinner";

export function HotelSpecific() {
  <Heading title="Hotel Details" />;

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
    return <Spinner animation="border" className="spinner" />;
  }

  return (
    <Container>
      <Row>
        <h1 className="mail__title">Specific Hotel</h1>
        <Col md={6} className="detail-image">
          <h2>{detail.name}</h2>
          <p>
            <b>Id:</b> {detail.id}
          </p>
          <p>
            <b>Name:</b> {detail.name}
          </p>
          <img src={detail.image} alt="hotels" />
        </Col>
      </Row>
    </Container>
  );
}

export default HotelSpecific;
