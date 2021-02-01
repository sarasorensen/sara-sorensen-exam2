import React from "react";
import Heading from "../Heading";
import Messages from "./Messages";
import AllEnquiries from "./AllEnquiries";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { LogedIn } from "../../constants/icons";
//import { Access } from "../../constants/icons";
import SideNav from "./SideNav";
import NewHotelForm from "./NewHotelForm";

export default function Admin() {
  <Heading title="Administrator dashboard" />;
  let loginInfo = localStorage.getItem("email");

  // if (loginInfo === null) {
  //   return (
  //    <Container className="admin">
  //      <Row>
  //       <Col className="admin__error">
  //        <div>
  //         <Access />
  //       <h2 className="main__title">You don't have access!</h2>
  //      <p>Sorry, you have to be logged in to view this page.</p>
  //      <Link to="/login" className="success__link">
  //      Log in Here
  //    </Link>
  //   </div>
  //  </Col>
  //  </Row>
  //   </Container>
  //   );
  //  //   }

  return (
    <Container id="admin" className="admin">
      <h1 className="main__title">Admin</h1>
      <Row>
        <div className="admin__col">
          <SideNav />
        </div>
        <div className="admin__col">
          <div id="user" className="admin__logInfo">
            <LogedIn />
            <div>
              <p>You are logged in as:</p>
              <p>sarasorensen97@hotmail.com</p>
              <p>{loginInfo}</p>
            </div>
          </div>
        </div>

        <div id="newHotel" className="admin__col">
          <h2>New Hotel</h2>
          <p className="admin__text">
            The link below takes you to the source file, where you can download
            the code needed for a new establishment. Or you can use the form.
          </p>
          <a href="https://github.com/sarasorensen/sara-sorensen-exam2/blob/master/src/components/layout/admin/NewHotel.js">
            Source Link
          </a>

          <NewHotelForm />
        </div>

        <div id="messages" className="admin__col">
          <Messages />
        </div>

        <div id="enquiries" className="admin__col">
          <AllEnquiries />
        </div>
      </Row>
    </Container>
  );
}
