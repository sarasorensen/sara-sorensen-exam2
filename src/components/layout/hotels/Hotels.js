import React from "react";
import Heading from "../Heading";
import { hotelsJson } from "../../json/establishments";
import { Stock } from "../hotels/Stock";
//import Spinner from "react-bootstrap/Spinner";
//import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";
//import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Image from "react-bootstrap/Image";
//detail,
export function Hotels() {
  <Heading title="Hotels" />;

  return (
    <Container>
      <h1 className="main__title">Our Hotels</h1>
      <Row className="hotels">
        {hotelsJson.map((item) => {
          const {
            id,
            establishmentName,
            imageUrl,
            price,
            establishmentEmail,
          } = item;
          return (
            <Col sm={6} md={4} key={id}>
              <Stock
                id={id}
                establishmentName={establishmentName}
                imageUrl={imageUrl}
                price={price}
                establishmentEmail={establishmentEmail}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Hotels;
