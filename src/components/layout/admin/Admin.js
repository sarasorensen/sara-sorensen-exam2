import React from "react";
import Messages from "./Messages";
import AllEnquiries from "./AllEnquiries";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import { Access } from "../../constants/icons";

export default function Admin() {
  let loginInfo = localStorage.getItem("email");

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
    <Container className="admin">
      <Row>
        <Col className=" col-sm-12">
          <h1 className="main__title ">Admin Page</h1>
        </Col>

        <Col className="admin__col col-sm-12">
          <h2 className="sub__title ">Welcome!</h2>
          {loginInfo}
        </Col>

        <Col className="admin__col col-sm-12">
          <h2>Messages from Clients</h2>

          <Messages />
        </Col>

        <Col className="admin__col col-sm-12">
          <h2>Enquiries from Clients</h2>

          <AllEnquiries />
        </Col>
      </Row>
    </Container>
  );
}
