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
  window.localStorage.removeItem("email");

  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  //<a href="/hotelSpecific/601928da1f74296b87f2eba9"><button class="btn btn__card">View Hotel</button></a>
  //<a href="/hotelSpecific/601928d01f74296f1ff2eba8"><button class="btn btn__card">View Hotel</button></a>
  //<a href="/hotelSpecific/601928d01f7429a7a4f2eba7"><button class="btn btn__card">View Hotel</button></a>
  //<a href="/hotelSpecific/601928d01f7429c7bbf2eba6"><button class="btn btn__card">View Hotel</button></a>
  //<a href="/hotelSpecific/601928d01f742981aef2eba5"><button class="btn btn__card">View Hotel</button></a>
  //<a href="/hotelSpecific/601928cf1f7429499ef2eba4"><button class="btn btn__card">View Hotel</button></a>
  //<a href="/hotelSpecific/601928cf1f7429f1f7f2eba3"><button class="btn btn__card">View Hotel</button></a>
  //<a href="/hotelSpecific/601928cf1f74296f87f2eba2"><button class="btn btn__card">View Hotel</button></a>
  //<a href="/hotelSpecific/601928cf1f74291e19f2eba1"><button class="btn btn__card">View Hotel</button></a>
  //<a href="/hotelSpecific/601928cf1f7429108ef2eba0"><button class="btn btn__card">View Hotel</button></a>
  //<a href="/hotelSpecific/601928cf1f7429da33f2eb9f"><button class="btn btn__card">View Hotel</button></a>
  //<a href="/hotelSpecific/601928cf1f74290246f2eb9e"><button class="btn btn__card">View Hotel</button></a>

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
    return (
      <div className="spinner">
        <Spinner role="status" className="spinner__animation" />
        <span className="sr-only">Loading content...</span>
      </div>
    );
  }

  return (
    <Container>
      <h1 className="main__title">Our Hotels</h1>
      <Search handleSearch={filterHotels} />
      <Row className="hotel">
        {filteredHotels.map((hotel) => {
          const { id, name, image, price, email } = hotel;

          return (
            <Col className="col-sm-12 col-md-6 col-lg-4" key={id}>
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
