import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";
import { Message } from "../../constants/icons";

export default function Messages() {
  let contactInfo = JSON.parse(localStorage.getItem("contact"));

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = BASE_URL + "contacts";
    fetch(url, FETCH_OPTIONS)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setMessages(data);
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

  const clicked = function (item) {
    console.log("clicked");
    //window.open("mailto" + {item.email});
  };

  if (contactInfo === null) {
    return (
      <div id="messages" className="admin__col">
        <h2 className="admin__h2">Messages from Clients</h2>

        {messages.map((item) => (
          <div key={item.id} className="admin__box">
            <h3>{item.name}</h3>
            <a value={item.email} href={"mailto:" + item.email}>
              {item.email}
            </a>
            <p>
              <Message /> {item.message}
            </p>
            <button onClick={clicked} className="btn btn__messages">
              Reply
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div id="messages" className="admin__col">
        <h2 className="admin__h2">Messages from Clients</h2>
        <div className="admin__box">
          <h3>{contactInfo.name}</h3>
          <a href={"mailto:" + contactInfo.email}>{contactInfo.email}</a>
          <p>
            <Message /> {contactInfo.message}
          </p>
        </div>
        {messages.map((item) => (
          <div key={item.id} className="admin__box">
            <h3>{item.name}</h3>
            <a href={"mailto:" + item.email}>{item.email}</a>
            <p>
              <Message /> {item.message}
            </p>
            <button onClick={clicked} className="btn btn__messages">
              Reply
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
