import React, { useState, useEffect, useRef } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";
//import onClickOutside from 'react-onclickoutside'
import Heading from "../Heading";
import Spinner from "react-bootstrap/Spinner";
import HomeHeader from "./HomeHeader";
import Search from "./Search";
import HomeCard from "./HomeCard";
import InfoBoxes from "./InfoBoxes";

export function Home() {
  <Heading title="Home" />;

  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
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

  const node = useRef();
  const [showDropdown, setDropdown] = useState(false);
  const [Open] = useState(true);

  const Close = () => {
    setDropdown(false);
  };

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      setIsSearched(true);
      return;
    }
    setIsSearched(false);
    setDropdown(false);
  };

  useEffect(() => {
    if (Open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [Open]);

  const filterHotels = function (e) {
    setIsSearched(true);
    const searchValue = e.target.value.toLowerCase();

    const filteredArray = hotels.filter(function (h) {
      const lowerCaseName = h.name.toLowerCase();

      if (searchValue.length === 0) {
        setIsSearched(false);
      }

      if (lowerCaseName.includes(searchValue)) {
        return true;
      }
      return false;
    });

    setFilteredHotels(filteredArray);
  };

  if (loading) {
    return (
      <div className="spinner__box">
        <Spinner role="status" className="spinner__box--animation" />
        <span className="sr-only">Loading content...</span>
      </div>
    );
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
              showDropdown !== true && isSearched === false ? Open : Close
            }
          />

          <div
            ref={node}
            className={
              showDropdown !== true && isSearched === false
                ? "d-none "
                : "d-block dropdown "
            }
          >
            {filteredHotels.map((hotel) => {
              const { id, name, image, price } = hotel;
              return (
                <div>
                  <div sm={6} md={4} key={id}>
                    {" "}
                    <HomeCard
                      className="dropdown__card"
                      id={id}
                      image={image}
                      name={name}
                      price={price}
                    />{" "}
                  </div>
                </div>
              );
            })}
          </div>

          <InfoBoxes />
        </div>
      </div>
    </div>
  );
}

export default Home;
