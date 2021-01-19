import React from "react";
import Card from "react-bootstrap/Card";
import Hotel from "../../../images/hotel.jpg";
import Book from "../../../images/book.jpg";
import Contact from "../../../images/contact.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Map, Message, Pencil } from "../../constants/icons";

const InfoBoxes = () => {
  return (
    <Row
      className="InfoBoxes__row"
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Col xs={12} md={6} lg={4}>
        <Card className="InfoBoxes">
          <Card.Img variant="top" className="InfoBoxes__img" src={Hotel} />
          <Card.Body>
            <Card.Text>
              <Map />
            </Card.Text>
            <Card.Link className="InfoBoxes__link" href="hotels">
              Our Hotels
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Card className="InfoBoxes">
          <Card.Img variant="top" className="InfoBoxes__img" src={Contact} />
          <Card.Body>
            <Card.Text>
              <Message />
            </Card.Text>
            <Card.Link className="InfoBoxes__link" href="contact">
              Contact Us
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Card className="InfoBoxes">
          <Card.Img variant="top" className="InfoBoxes__img" src={Book} />
          <Card.Body>
            <Card.Text>
              <Pencil />
            </Card.Text>
            <Card.Link className="InfoBoxes__link" href="hotels">
              Book Now
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default InfoBoxes;
