import React from "react";
import Header from "../../../images/header2.jpg";

function HomeHeader() {
  return (
    <div className="wrapper">
      <img src={Header} className="navbar__header" alt="company header " />
    </div>
  );
}

export default HomeHeader;
