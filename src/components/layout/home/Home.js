import React, { useState, useEffect } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";
import Heading from "../Heading";
import Spinner from "react-bootstrap/Spinner";
import HomeHeader from "./HomeHeader";
import Search from "./Search";
import HotelCard from "../hotels/HotelCard";
import InfoBoxes from "./InfoBoxes";
import OfferSection from "./OfferSection";

export function Home() {
  <Heading title="Home" />;

  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [showDropdown, setshowDropdown] = useState(false);
  const [loading, setLoading] = useState(true);

  const openDropdown = () => {
    setshowDropdown(true);
  };
  const closeDropdown = () => {
    setshowDropdown(false);
  };

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
    setIsSearched(true);
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
    <div className="wrapper">
      <HomeHeader />
      <div className="home">
        <div className="home__content">
          <h1>Find your dream hotel in Bergen</h1>
          <Search
            handleSearch={filterHotels}
            onChange={
              showDropdown !== true && isSearched === false
                ? openDropdown
                : closeDropdown
            }
          />
          <div
            className={
              showDropdown !== true && isSearched === false
                ? " [ d-none ] "
                : " [ d-block dropdown ] "
            }
          >
            {filteredHotels.map((hotel) => {
              const { id, name, image } = hotel;
              return (
                <div sm={6} md={4} key={id} className="dropdown__card">
                  {" "}
                  <HotelCard id={id} image={image} name={name} />{" "}
                </div>
              );
            })}
          </div>

          <InfoBoxes />

          <OfferSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
