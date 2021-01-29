import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";

export default function Messages() {
  const url = BASE_URL + "enquiries";

  let enquiryInfo = JSON.parse(localStorage.getItem("enquiryInfo"));

  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, FETCH_OPTIONS)
      .then(function (response) {
        return response.json();
      })
      .then(function (j) {
        setEnquiries(j);
      })
      .catch((error) => console.log(error))
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

  if (enquiryInfo === null) {
    return (
      <div id="enquiries" className="admin__col">
        <h2 className="admin__h2">Enquiries from Clients</h2>
        {enquiries.map((item) => (
          <div key={item.id} className="allEnquiries ">
            <h3>{item.name}</h3>
            <p>Email: {item.email} </p>
            <p>Check in: {item.checkin}</p>
            <p>Check Out: {item.checkout}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div id="enquiries" className="admin__col   ">
        <h2 className="admin__h2">Enquiries from Clients</h2>
        <div className="allEnquiries">
          <h3>{enquiryInfo.name}</h3>
          <p>Email: {enquiryInfo.email}</p>
          <p>Check In: {enquiryInfo.checkin}</p>
          <p>Check Out: {enquiryInfo.checkout}</p>
        </div>
        {enquiries.map((item) => (
          <div key={item.id} className="allEnquiries ">
            <h3>{item.name}</h3>
            <p>Email: {item.email} </p>
            <p>Check in: {item.checkin}</p>
            <p>Check Out: {item.checkout}</p>
          </div>
        ))}
      </div>
    </>
  );
}
