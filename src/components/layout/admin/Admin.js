import React from "react";
import SideNav from "./SideNav";
import Messages from "./Messages";
import NewHotelForm from "./NewHotelForm";
import AllEnquiries from "./AllEnquiries";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LogedIn, Message } from "../../constants/icons";
//import { Access } from "../../constants/icons";

export default function Admin() {
  let loginInfo = localStorage.getItem("email");

  const enquiryInfo = JSON.parse(localStorage.getItem("enquiry"));

  const contactInfo = JSON.parse(localStorage.getItem("contact"));

  //if (loginInfo === null) {
  //  return (
  //   <Container className="admin__error">
  //     <Row>
  //       <Col>
  //        <div>
  //          <Access />
  //          <h2 className="main__title">You don't have access!</h2>
  //        <p>Sorry, you have to be logged in to view this page.</p>
  //        <NavLink to="/login" className="success__link">
  //          Log in Here
  //        </NavLink>
  //      </div>
  //    </Col>
  //  </Row>
  //  </Container>
  // );
  // }

  return (
    <Container id="admin" className="admin">
      <h1>Admin</h1>
      <SideNav />

      <Row className="admin__row">
        <Col id="user" className="admin__log left col-sm-12 ">
          <LogedIn />
          <p className="admin__login">You are logged in as:</p>
          <p className="admin__email">sarasorensen97@hotmail.com</p>
          <p className="admin__email">{loginInfo}</p>
        </Col>

        <Col id="newHotel" className="admin__log col-sm-12 ">
          <NewHotelForm />
        </Col>

        <Col id="messages" className="admin__col col-sm-12">
          <h2 className="admin__h2">Messages from Clients</h2>
          <div className="messages">
            <h3>{contactInfo.name}</h3>
            <p>Email: {contactInfo.email}</p>
            <p>
              <Message /> {contactInfo.message}
            </p>
          </div>
          <Messages />
        </Col>

        <Col id="enquiries" className="admin__col col-sm-12">
          <h2 className="admin__h2">Enquiries from Clients</h2>
          <div className="allEnquiries">
            <h3>{enquiryInfo.name}</h3>
            <p>Email: {enquiryInfo.email}</p>
            <p>Check In: {enquiryInfo.checkIn}</p>
            <p>Check Out: {enquiryInfo.checkOut}</p>
          </div>
          <AllEnquiries />
        </Col>
      </Row>
    </Container>
  );
}
