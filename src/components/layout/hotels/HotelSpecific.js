import React, { useState, useEffect } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";
import { useParams, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../Heading";
import Spinner from "react-bootstrap/Spinner";
import { Wifi, Cup, Location } from "../../constants/icons";

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

  const click = () => {
    console.log("clicked button");
  };

  return (
    <Container className="specific">
      <Row>
        <Col className="specific__col--1">
          <img
            src={detail.image}
            className="specific__card--img"
            alt={detail.name}
          />
        </Col>
        <Col className="specific__card--details">
          <h1 className="main__title--card">{detail.name}</h1>

          <p>Max {detail.maxGuests} guests</p>

          <p>
            {" "}
            Price per night is{" "}
            <span className="card__price--color"> {detail.price}$</span>
          </p>

          <p>{detail.description}</p>

          <p>
            {" "}
            If you have any questions, please contact:{" "}
            <a className="card__link" href={"mailto:" + detail.email}>
              {detail.email}
            </a>
          </p>
          <Row className="d-flex jc-center text-center specific__row--icons">
            <Col>
              <Wifi />
              <p>Wifi included</p>
            </Col>
            <Col>
              <Cup />
              <p>Breakfast included</p>
            </Col>
            <Col>
              <Location />
              <p>Central Location</p>
            </Col>
          </Row>
          <Link to={"/enquiry"}>
            <button className="btn__main  float-right" onClick={click}>
              Book Hotel
            </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default HotelSpecific;
