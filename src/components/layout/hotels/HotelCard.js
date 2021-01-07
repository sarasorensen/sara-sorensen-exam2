import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function HotelItem({ id, name, image, price, email }) {
  return (
    <CardDeck>
      <Card className="hotel__card">
        <Card.Img variant="top" className="hotel__card--img" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>
            Price: <span className="card__price">{price}</span>
          </p>
          <p>{email}</p>
          <Link to={"hotelSpecific/" + id}>
            <button className="btn__main">View</button>
          </Link>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}

HotelItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default HotelItem;
