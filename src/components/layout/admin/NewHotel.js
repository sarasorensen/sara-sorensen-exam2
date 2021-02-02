import Spinner from "react-bootstrap/Spinner";
import React, { useState, useEffect } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

export default function NewHotel() {
  const [hotels, setNewHotel] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = BASE_URL + "establishments";

    const newEstablishment = {
      name: "Emma's Hotel",
      email: "sara@email.com",
      image: "../../../images/header.jpg",
      price: 150,
      maxGuests: 10,
      lat: 150,
      lng: 150,
      description:
        "A wonderful hotel surrounded by nature, a nice escape from the busy everyday life.",
      address: "Willow Road 25",
      selfCatering: true,
      id: 12890138,
    };

    FETCH_OPTIONS.method = "POST";
    FETCH_OPTIONS.body = JSON.stringify(newEstablishment);

    fetch(url, FETCH_OPTIONS)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <Spinner role="status" className="spinner__animation" />
        <span className="sr-only">Loading content...</span>
      </div>
    );
  }

  return (
    <>
      <CardDeck>
        <Card className="hotel__card">
          <Card.Body>
            <Card.Img
              variant="top"
              className="hotel__img"
              src={hotels.image}
              alt={hotels.name}
            />
            <ul className="hotel__ul">
              <li>
                <Card.Title className="hotel__title">{hotels.name}</Card.Title>{" "}
              </li>
              <li>
                Price: <span className="hotel__price">{hotels.price}$</span>
              </li>
              <li>
                <p>{hotels.email}</p>
              </li>
            </ul>
            <Link to={"hotelSpecific/" + hotels.id}>
              <button className="btn btn__card">View Hotel</button>
            </Link>
          </Card.Body>
        </Card>
      </CardDeck>
      ); }
    </>
  );
}
