import React, { useState, useEffect } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";
import { useParams, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
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
    <div className="specific">
      <Row>
        <Card className="specific__card">
          <Card.Img src={detail.image} variant="top" alt={detail.name} />
          <Card.Body className="specific__card--details">
            <h1 className="main__title--card">{detail.name}</h1>
            <ul>
              <li>Max {detail.maxGuests} guests</li>
              <li>
                Price per night is{" "}
                <span className="card__price"> {detail.price}$</span>
              </li>

              <li> {detail.description}</li>
              <li>
                {" "}
                If you have any questions, please contact:{" "}
                <a href={"mailto:" + detail.email}>{detail.email}</a>
              </li>
            </ul>
            <Link to={"/enquiry"}>
              <button className="btn__main">Book Hotel</button>
            </Link>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default HotelSpecific;
