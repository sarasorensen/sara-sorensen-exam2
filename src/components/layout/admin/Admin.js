import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Heading from "../Heading";
import Messages from "./Messages";
import AllEnquiries from "./AllEnquiries";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LoginData from "./LoginData";
import SideNav from "./SideNav";
import NewHotelForm from "./NewHotelForm";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

export default function Admin() {
  <Heading title="Administrator dashboard" />;

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //let formInput = localStorage.getItem("formInput");

  useEffect(() => {
    const url = BASE_URL + "establishments";
    fetch(url, FETCH_OPTIONS)
      .then((response) => {
        // check if the call was successful
        if (response.status === 200) {
          return response.json();
        } else {
          // unsuccessful call
          setError("A server error occured.");
        }
      })
      .then((json) => {
        setHotels(json);
        setError(null);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  });

  if (loading) {
    return (
      <div className="spinner">
        <Spinner role="status" className="spinner__animation" />
        <span className="sr-only">Loading content...</span>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  const removeItem = function (hotel) {
    console.log(hotel.id);

    const id = hotel.id;
    const urlDelete = BASE_URL + "establishments/" + id;
    FETCH_OPTIONS.method = "DELETE";

    fetch(urlDelete, FETCH_OPTIONS)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          setError("A server error occured.");
        }
      })
      .then((json) => {
        setHotels(json);
        setError(null);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  function List({ hotels, fallback }) {
    if (!hotels || hotels.length === 0) {
      return fallback;
    } else {
      return (
        <>
          <h2>All Hotels</h2>

          {hotels.map((hotel) => {
            const { id, name, image, price, email } = hotel;

            return (
              <div className="admin__map col-sm-12 col-md-6 col-lg-4" key={id}>
                <CardDeck>
                  <Card className="hotel__card">
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        className="hotel__img"
                        src={image}
                        alt={name}
                      />
                      <ul className="hotel__ul">
                        <li>
                          <Card.Title className="hotel__title">
                            {name}
                          </Card.Title>{" "}
                        </li>
                        <li>
                          Price: <span className="hotel__price">{price}$</span>
                        </li>
                        <li>
                          <p>{email}</p>
                        </li>
                      </ul>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          removeItem(id);
                        }}
                        className="btn btn__card"
                      >
                        Delete Hotel
                      </button>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </div>
            );
          })}
        </>
      );
    }
  }

  return (
    <Container id="admin" className="admin">
      <h1 className="main__title">Admin</h1>
      <Row>
        <div className="admin__col">
          <SideNav />
        </div>

        <div className="admin__col">
          <LoginData />
        </div>

        <div className="admin__hotels">
          <List hotels={hotels} fallback={"Loading..."} />
        </div>

        <div id="newHotel" className="admin__col">
          <NewHotelForm fallback={"Loading..."} />
        </div>

        <div id="messages" className="admin__col">
          <Messages />
        </div>

        <div id="enquiries" className="admin__col">
          <AllEnquiries />
        </div>
      </Row>
    </Container>
  );
}
