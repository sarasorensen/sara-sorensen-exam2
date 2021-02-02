import Spinner from "react-bootstrap/Spinner";
import React, { useState, useEffect } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";

function DeleteHotel() {
  const [setDeletedHotel] = useState([]);
  const [loading, setLoading] = useState(true);

  const idDelete = "60143f2a2fb4965bfbc4d392";
  const urlDelete = BASE_URL + "establishments/" + idDelete;
  FETCH_OPTIONS.method = "DELETE";

  useEffect(() => {
    fetch(urlDelete, FETCH_OPTIONS)
      .then((response) => response.json())
      .then((json) => {
        setDeletedHotel(json);
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

  return;
}
export default DeleteHotel;
