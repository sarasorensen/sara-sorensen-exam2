import { Link } from "react-router-dom";
import { hotelsJson } from "../../json/establishments";
import { useParams } from "react-router-dom";
import { Stock } from "../hotels/Stock";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";
import Heading from "../Heading";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

export function HotelSpecific() {
  <Heading title="Hotel Details" />;

  let { id } = useParams();

  const [hotelResult, setHotelResult] = useState(undefined);

  useEffect(() => {
    fetch(URL).then((result) => {
      setHotelResult(result.data[id]);
    });
  }, [id]);

  return (
    <Container>
      <Row>
        <h1 className="main__title">Specific</h1>
        <Col sm={6} md={4} key={id}>
          <p>{id}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default HotelSpecific;
