import Heading from "../Heading";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";
import HotelCard from "../hotels/HotelCard";

import Search from "../home/Search";

function Hotels() {
  <Heading title="Hotels" />;

  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = BASE_URL + "establishments";
    fetch(url, FETCH_OPTIONS)
      .then((response) => response.json())
      .then((json) => {
        setHotels(json);
        setFilteredHotels(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const filterHotels = function (e) {
    const searchValue = e.target.value.toLowerCase();

    const filteredArray = hotels.filter(function (h) {
      const lowerCaseName = h.name.toLowerCase();

      if (lowerCaseName.includes(searchValue)) {
        return true;
      }
      return false;
    });

    setFilteredHotels(filteredArray);
  };

  if (loading) {
    return <Spinner animation="border" className="spinner" />;
  }

  return (
    <Container>
      <h1 className="main__title">Our Hotels</h1>
      <Search handleSearch={filterHotels} />
      <Row className="hotels">
        {filteredHotels.map((hotel) => {
          const { id, name, image, price, email } = hotel;

          return (
            <Col sm={6} md={4} key={id}>
              <HotelCard
                id={id}
                name={name}
                image={image}
                price={price}
                email={email}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default Hotels;
