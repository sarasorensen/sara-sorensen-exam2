import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";
import { Message } from "../../constants/icons";

export default function Messages() {
  const url = BASE_URL + "contacts";

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, FETCH_OPTIONS)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setMessages(data);
      })
      .finally(() => setLoading(false));
  });

  if (loading) {
    return (
      <div>
        <Spinner role="status" className="spinner__box--animation" />
        <span className="sr-only">Loading content...</span>
      </div>
    );
  }

  return (
    <>
      {messages.map((item) => (
        <div key={item.id} className="messages ">
          <h3>{item.name}</h3>
          <p>Email: {item.email} </p>
          <p>
            <Message /> {item.message}
          </p>
        </div>
      ))}
    </>
  );
}
