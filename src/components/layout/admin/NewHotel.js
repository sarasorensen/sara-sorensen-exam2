import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";

export default function NewHotel() {
  const url = BASE_URL + "establishments";
  const newEstablishment = {
    name: "Sara's Hotel",
    email: "sara@email.com",
    image: "../../../images/header.jpg",
    price: 150,
    maxGuests: 10,
    lat: 150,
    lng: 150,
    description:
      "A wonderful hotel surrounded by nature, a nice escape from the busy everyday life.",
    address: "Willow Road 25",
    selfCatering: true,
    id: 12890138,
  };

  FETCH_OPTIONS.method = "POST";
  FETCH_OPTIONS.body = JSON.stringify(newEstablishment);
  fetch(url, FETCH_OPTIONS)
    .then((r) => r.json())
    .then((j) => console.log(j));
}
