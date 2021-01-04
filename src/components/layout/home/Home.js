import React, { useState, useEffect } from "react";
import Heading from "../Heading";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL } from "../../constants/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeContent from "./HomeContent";
import Search from "./Search";

export function Home() {
  <Heading title="Home" />;

  const [items, result] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => {
        result(json.results);
        console.log(json.results);
        setFilteredItems(json.results);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const filterCards = function (e) {
    const searchValue = e.target.value.toLowerCase();
    const filteredArray = items.filter(function (i) {
      const lowerCaseName = i.name.toLowerCase();

      if (lowerCaseName.startsWith(searchValue)) {
        return true;
      }
      return false;
    });

    setFilteredItems(filteredArray);
  };

  if (loading) {
    return <Spinner animation="border" className="spinner" />;
  }

  return (
    <>
      <Search handleSearch={filterCards} />
      <Row>
        {filteredItems.map((item) => {
          const { id, name, background_image, rating, released } = item;

          return (
            <Col sm={6} md={3} key={id}>
              <HomeContent
                id={id}
                name={name}
                image={background_image}
                rating={rating}
                released={released}
              ></HomeContent>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Home;
