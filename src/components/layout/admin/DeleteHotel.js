import { useState } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";

const idDelete = "/hotelSpecific/60143f142fb496650ac4d391";

export default function DeleteHotel() {
  const [setDeleteHotel] = useState(null);

  const urlDelete = BASE_URL + "establishments/" + idDelete;
  FETCH_OPTIONS.method = "DELETE";
  fetch(urlDelete, FETCH_OPTIONS)
    .then((r) => r.json())
    .then((j) => setDeleteHotel(j));
}
