import React, { useState, useEffect } from "react";
import Heading from "../Heading";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL } from "../../constants/api";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export function GameDetails() {
  <Heading title="Game Details" />;

  const [detail, SetDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  const URL = BASE_URL + "/" + id;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => SetDetail(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  });

  if (loading) {
    return <Spinner animation="border" className="spinner" />;
  }

  return <p>Test</p>;
}

export default GameDetails;
