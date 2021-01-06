import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Stock = ({
  id,
  establishmentName,
  imageUrl,
  price,
  establishmentEmail,
}) => {
  return (
    <CardDeck>
      <Card className="hotel__card">
        <Card.Body id={id}>
          <Card.Img
            variant="top"
            className="hotel__card--img"
            src={imageUrl}
            alt="image of hotel"
          />
          <Card.Title>{establishmentName}</Card.Title>

          <p>
            Price: <span className="card__price">{price}</span>
          </p>
          <p>{establishmentEmail}</p>

          <Link to={"hotelSpecific/" + id}>
            <button className="btn__main">See more</button>
          </Link>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

Stock.propTypes = {
  id: PropTypes.number.isRequired,
  establishmentName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  establishmentEmail: PropTypes.string.isRequired,
};
export default Stock;
