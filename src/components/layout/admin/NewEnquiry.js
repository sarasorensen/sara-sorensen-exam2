import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";

export default function Messages() {
  const url = BASE_URL + "enquiries";

  const data = {
    name: "Carla",
    email: "Carla@gmal.no",
    establishmentId: "an-id",
    checkIn: "April 28 2021",
    checkOut: "April 29 2021",
  };

  FETCH_OPTIONS.method = "POST";

  FETCH_OPTIONS.body = JSON.stringify(data);

  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, FETCH_OPTIONS)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setEnquiries(data);
      })
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

  return (
    <>
      {enquiries.map((item) => (
        <div key={item.id} className="admin__box">
          <p>{item.name}</p>
          <p>{item.email} </p>
          <p>{item.checkIn}</p>
          <p>{item.checkOut}</p>
          <p>{item.establishmentId}</p>
        </div>
      ))}
    </>
  );
}
