import React from "react";
import Card from "react-bootstrap/Card";
import Hotel from "../../../images/hotel.jpg";
import Book from "../../../images/book.jpg";
import Contact from "../../../images/contact.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//<Link to={"gamedetails/" + id}>  </Link>

const InfoBoxes = () => {
  return (
    <Row
      className="home__row"
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
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="InfoBoxes__icon bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
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
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="InfoBoxes__icon bi bi-chat-text-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
              </svg>{" "}
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
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="InfoBoxes__icon bi bi-pencil-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
              </svg>
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
