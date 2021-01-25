import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";

export default function Messages() {
  const url = BASE_URL + "enquiries";

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
      <div>
        <Spinner role="status" className="spinner__box--animation" />
        <span className="sr-only">Loading content...</span>
      </div>
    );
  }

  return (
    <>
      {enquiries.map((item) => (
        <div key={item.id} className="allEnquiries ">
          <h3>{item.name}</h3>
          <p>Email: {item.email} </p>
          <p>Check in: {item.checkIn}</p>
          <p>Check Out: {item.checkOut}</p>
        </div>
      ))}
    </>
  );
}
