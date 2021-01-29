import React from "react";
import Messages from "./Messages";
import AllEnquiries from "./AllEnquiries";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { LogedIn, Message } from "../../constants/icons";
// import { Access } from "../../constants/icons";
import SideNav from "./SideNav";

export default function Admin() {
  let loginInfo = localStorage.getItem("email");

  let enquiryInfo = JSON.parse(localStorage.getItem("enquiry"));

  let contactInfo = JSON.parse(localStorage.getItem("contact"));

  // if (loginInfo === null) {
  //   return (
  //    <Container className="admin__error">
  //      <Row>
  //       <Col>
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

  console.log(contactInfo);
  if (enquiryInfo === null) {
    return (
      <Container className="admin__error">
        <Row>
          <div className="admin__col">
            <SideNav />
          </div>

          <div className="admin__col">
            <div id="user" className="admin__log">
              <LogedIn />
              <div className="admin__log--text">
                <p className="admin__login">You are logged in as:</p>
                <p>sarasorensen97@hotmail.com</p>
                <p>{loginInfo}</p>
              </div>
            </div>
          </div>

          <div id="newHotel" className="admin__col   ">
            <h2 className="admin__h2">New Hotel</h2>
            <p>
              The link below takes you to the source file, where you can
              download the code needed for a new establishment.
            </p>
            <a href="https://github.com/sarasorensen/sara-sorensen-exam2/blob/master/src/components/layout/admin/NewHotel.js">
              Source Link
            </a>
          </div>

          <div id="messages" className="admin__col   ">
            <h2 className="admin__h2">Messages from Clients</h2>
            <div className="messages">
              <h3>{contactInfo.name}</h3>
              <p>Email: {contactInfo.email}</p>
              <p>
                <Message /> {contactInfo.message}
              </p>
            </div>
            <Messages />
          </div>

          <div id="enquiries" className="admin__col   ">
            <h2 className="admin__h2">Enquiries from Clients</h2>

            <AllEnquiries />
          </div>
        </Row>
      </Container>
    );
  } else if (contactInfo === null) {
    return (
      <Container className="admin__error">
        <Row>
          <div className="admin__col">
            <SideNav />
          </div>
          <div className="admin__col">
            <div id="user" className="admin__log">
              <LogedIn />
              <div className="admin__log--text">
                <p className="admin__login">You are logged in as:</p>
                <p>sarasorensen97@hotmail.com</p>
                <p>{loginInfo}</p>
              </div>
            </div>
          </div>

          <div id="newHotel" className="admin__col   ">
            <h2 className="admin__h2">New Hotel</h2>
            <p>
              The link below takes you to the source file, where you can
              download the code needed for a new establishment.
            </p>
            <a href="https://github.com/sarasorensen/sara-sorensen-exam2/blob/master/src/components/layout/admin/NewHotel.js">
              Source Link
            </a>
          </div>

          <div id="messages" className="admin__col   ">
            <h2 className="admin__h2">Messages from Clients</h2>

            <Messages />
          </div>

          <div id="enquiries" className="admin__col   ">
            <h2 className="admin__h2">Enquiries from Clients</h2>
            <div className="allEnquiries">
              <h3>{enquiryInfo.name}</h3>
              <p>Email: {enquiryInfo.email}</p>
              <p>Check In: {enquiryInfo.checkIn}</p>
              <p>Check Out: {enquiryInfo.checkOut}</p>
            </div>
            <AllEnquiries />
          </div>
        </Row>
      </Container>
    );
  }

  return (
    <Container id="admin" className="admin">
      <Row>
        <div className="admin__col">
          <SideNav />
        </div>
        <div className="admin__col">
          <div id="user" className="admin__log">
            <LogedIn />
            <div className="admin__log--text">
              <p className="admin__login">You are logged in as:</p>
              <p>sarasorensen97@hotmail.com</p>
              <p>{loginInfo}</p>
            </div>
          </div>
        </div>

        <div id="newHotel" className="admin__col  ">
          <h2 className="admin__h2">New Hotel</h2>

          <p>
            The link below takes you to the source file, where you can download
            the code needed for a new establishment.
          </p>
          <a href="https://github.com/sarasorensen/sara-sorensen-exam2/blob/master/src/components/layout/admin/NewHotel.js">
            Source Link
          </a>
        </div>

        <div id="messages" className="admin__col   ">
          <h2 className="admin__h2">Messages from Clients</h2>
          <div className="messages">
            <h3>{contactInfo.name}</h3>
            <p>Email: {contactInfo.email}</p>
            <p>
              <Message /> {contactInfo.message}
            </p>
          </div>
          <Messages />
        </div>

        <div id="enquiries" className="admin__col   ">
          <h2 className="admin__h2">Enquiries from Clients</h2>
          <div className="allEnquiries">
            <h3>{enquiryInfo.name}</h3>
            <p>Email: {enquiryInfo.email}</p>
            <p>Check In: {enquiryInfo.checkIn}</p>
            <p>Check Out: {enquiryInfo.checkOut}</p>
          </div>
          <AllEnquiries />
        </div>
      </Row>
    </Container>
  );
}
