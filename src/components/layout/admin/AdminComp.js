import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default class Admin extends React.Component {
  render() {
    let contactInfo = JSON.parse(localStorage.getItem("contact"));
    let enquiryInfo = JSON.parse(localStorage.getItem("enquiry"));
    let loginInfo = localStorage.getItem("email");

    if (contactInfo === null) {
      return (
        <Container className="admin">
          <Row>
            <Col className="admin__col col-sm-12">
              <h2 className="sub__title ">Welcome!</h2>
              {loginInfo}
            </Col>
            <Col className="admin__col  col-sm-12">
              <h2>Enquiries from Clients</h2>
              <ul>
                <li>{enquiryInfo[0]}</li>
                <li>{enquiryInfo[1]}</li>
                <li>{enquiryInfo[2]}</li>
                <li>{enquiryInfo[3]}</li>
              </ul>
            </Col>

            <Col className="admin__col col-sm-12">
              <h2>Messages from Clients</h2>
              <ul>
                <li>No messages yet</li>
              </ul>
            </Col>
          </Row>
        </Container>
      );
    }

    if (enquiryInfo === null) {
      return (
        <Container className="admin">
          <Row>
            <Col className="admin__col col-sm-12">
              <h2 className="sub__title ">Welcome!</h2>
              {loginInfo}
            </Col>
            <Col className="admin__col  col-sm-12">
              <h2>Enquiries from Clients</h2>
              <ul>
                <li>No enquires yet</li>
              </ul>
            </Col>

            <Col className="admin__col col-sm-12">
              <h2>Messages from Clients</h2>
              <ul>
                <li>{contactInfo[0]}</li>
                <li>{contactInfo[1]}</li>
                <li>{contactInfo[2]}</li>
              </ul>
            </Col>
          </Row>
        </Container>
      );
    }
    return (
      <>
        <Col className="admin__col col-sm-12">
          <h2 className="sub__title ">Welcome!</h2>
          {loginInfo}
        </Col>
        <Col className="admin__col col-sm-12">
          <h2>Enquiries from Clients</h2>

          {enquiryInfo.map((value) => {
            return (
              <ul>
                <li>{value.enquiryInfo}</li>
                <li>{value.enquiryInfo}</li>
                <li>{value.enquiryInfo}</li>
                <li>{value.enquiryInfo}</li>
                <li>{value.enquiryInfo}</li>
              </ul>
            );
          })}
        </Col>
        <Col className="admin__col col-sm-12">
          <h2>Messages from Clients</h2>
          <ul>
            <li>{contactInfo[0]}</li>
            <li>{contactInfo[1]}</li>
            <li>{contactInfo[2]}</li>
          </ul>
        </Col>
      </>
    );
  }
}
