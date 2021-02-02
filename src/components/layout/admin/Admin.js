import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Heading from "../Heading";
import Messages from "./Messages";
import AllEnquiries from "./AllEnquiries";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { LogedIn } from "../../constants/icons";
//import { Access } from "../../constants/icons";
import SideNav from "./SideNav";
import NewHotelForm from "./NewHotelForm";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

export default function Admin() {
  <Heading title="Administrator dashboard" />;
  let loginInfo = localStorage.getItem("email");

  // if (loginInfo === null) {
  //   return (
  //    <Container className="admin">
  //      <Row>
  //       <Col className="admin__error">
  //        <div>
  //         <Access />
  //       <h2 className="main__title">You don't have access!</h2>
  //      <p>Sorry, you have to be logged in to view this page.</p>
  //      <Link to="/login" className="success__link">
  //      Log in Here
  //    </Link>
  //   </div>
  //  </Col>
  //  </Row>
  //   </Container>
  //   );
  //  //   }

  const [hotels, setHotels] = useState([]);
  const [deleteHotel, setDeleteHotel] = useState([]);

  const id = "";
  //FETCH_OPTIONS.method = "DELETE";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //const url = BASE_URL + "establishments";
    const url = BASE_URL + "establishments/" + id;

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
        setDeleteHotel(json);
        setError(null);
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

  if (error) {
    return <div>{error}</div>;
  }

  const removeItem = function () {
    console.log("clicked");
  };

  return (
    <Container id="admin" className="admin">
      <h1 className="main__title">Admin</h1>
      <Row>
        <div className="admin__col">
          <SideNav />
        </div>
        <div className="admin__col">
          <div id="user" className="admin__logInfo">
            <LogedIn />
            <div>
              <p>You are logged in as:</p>
              <p>sarasorensen97@hotmail.com</p>
              <p>{loginInfo}</p>
            </div>
          </div>
        </div>
        <div className="admin__hotels">
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
                      <button onClick={removeItem} className="btn btn__card">
                        Delete Hotel
                      </button>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </div>
            );
          })}
        </div>

        <div id="newHotel" className="admin__col">
          <h2>New Hotel</h2>
          <p className="admin__text">
            The link below takes you to the source file, where you can download
            the code needed for a new establishment. Or you can use the form.
          </p>
          <a href="https://github.com/sarasorensen/sara-sorensen-exam2/blob/master/src/components/layout/admin/NewHotel.js">
            Source Link
          </a>

          <NewHotelForm />
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
