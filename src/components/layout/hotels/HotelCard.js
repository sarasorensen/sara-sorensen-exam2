import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function HotelItem({ id, name, image, price, email }) {
  return (
    <CardDeck>
      <Card className="hotel__card">
        <Card.Body>
          <Card.Img
            variant="top"
            className="hotel__card--img "
            src={image}
            alt={name}
          />
          <ul className="hotel__card--ul">
            <li>
              <Card.Title className="hotel__card--title">{name}</Card.Title>{" "}
            </li>
            <li>
              <div className="hotel__card--price">
                Price: <span className="card__price--color">{price}$</span>
              </div>
            </li>
            <li>
              <p>{email}</p>
            </li>

            <Link to={"hotelSpecific/" + id}>
              <button className="btn__main ">View Hotel</button>
            </Link>
          </ul>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}

HotelItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default HotelItem;
