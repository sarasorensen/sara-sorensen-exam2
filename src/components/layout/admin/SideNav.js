import React from "react";
import {
  Message,
  Pencil,
  Lock,
  DashBoard,
  Person,
  House,
} from "../../constants/icons";

export default function SideNav(props) {
  return (
    <div className="sidenav">
      <a href="#admin">
        <DashBoard /> Overview
      </a>
      <a href="#user">
        <Person />
        User
      </a>
      <a href="#newHotel">
        <House />
        New Hotel
      </a>
      <a href="#messages">
        <Message />
        Messages
      </a>
      <a href="#enquiries">
        {" "}
        <Pencil />
        Enquiries
      </a>
      <a href="/login">
        {" "}
        <Lock />
        Log Out
      </a>
    </div>
  );
}
