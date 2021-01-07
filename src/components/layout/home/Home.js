import React from "react";
import Heading from "../Heading";
import HomeHeader from "./HomeHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Search from "./Search";
import InfoBoxes from "./InfoBoxes";
import OfferSection from "./OfferSection";

export function Home() {
  <Heading title="Home" />;

  return (
    <div className="wrapper">
      <HomeHeader />
      <div className="home">
        <div className="home__content">
          <h1>Find your dream hotel in Bergen</h1>
          <Search />
          <Row>
            <Col>
              <p>test</p>
            </Col>
          </Row>

          <InfoBoxes />

          <OfferSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
