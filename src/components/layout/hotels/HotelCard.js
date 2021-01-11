import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function HotelItem({ id, name, image, price, email }) {
  return (
    <CardDeck>
      <Link to={"hotelSpecific/" + id}>
        <Card className="hotel__card">
          <Card.Body>
            <Card.Img variant="top" className="hotel__card--img" src={image} />
            <Card.Title>{name}</Card.Title>{" "}
            <span className="card__price">{price}</span>
            <p>{email}</p>
          </Card.Body>
        </Card>
      </Link>
    </CardDeck>
  );
}

HotelItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default HotelItem;
