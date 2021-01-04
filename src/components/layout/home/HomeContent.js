import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const HomeContent = ({ id, name, image, rating, released }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <p>{rating}</p>
        <p>{released}</p>
        <Link to={"gamedetails/" + id}>
          <Button>See more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

HomeContent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  released: PropTypes.string.isRequired,
};

export default HomeContent;
