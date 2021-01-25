import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function HomeItem({ id, name, image, price, email }) {
  return (
    <CardDeck>
      <Card className="home__card">
        <Card.Body>
          <Card.Img
            variant="top"
            className="home__card--img"
            src={image}
            alt={name}
          />
          <ul>
            <li>
              <Card.Title>{name}</Card.Title>{" "}
            </li>
            <li>
              <p className="card__price">
                Price: <span className="card__price--color">{price}$</span>
              </p>
            </li>
            <li>
              <p>{email}</p>
            </li>

            <Link to={"hotelSpecific/" + id}>
              <button className=" card__btn">View Hotel</button>
            </Link>
          </ul>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}

HomeItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default HomeItem;
