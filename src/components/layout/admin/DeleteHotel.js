import React from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";

const idDelete = "/hotelSpecific/600eab1accba8d02463df1f8";

export default function DeleteHotel() {
  const urlDelete = BASE_URL + "establishments/" + idDelete;
  FETCH_OPTIONS.method = "DELETE";
  fetch(urlDelete, FETCH_OPTIONS)
    .then((r) => r.json())
    .then((j) => console.log(j));
}
