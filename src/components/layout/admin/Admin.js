import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Access } from "../../constants/icons";

export default class Admin extends React.Component {
  render() {
    let contactInfo = JSON.parse(localStorage.getItem("contact"));
    let enquiryInfo = JSON.parse(localStorage.getItem("enquiry"));
    let loginInfo = localStorage.getItem("email");

    if (loginInfo === null) {
      return (
        <Container className="admin__error">
          <Row>
            <Col>
              <div>
                <Access />
                <h2 className="main__title">You don't have access!</h2>
                <p>Sorry, you have to be logged in to view this page.</p>
                <NavLink to="/login" className="success__link">
                  Log in Here
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      );
    }

    if (contactInfo === null) {
      return (
        <Container className="admin">
          <Row>
            <Col className="admin__col col-sm-12">
              <h1 className="main__title ">Admin Page</h1>
            </Col>

            <Col className="admin__col col-sm-12">
              <h2 className="sub__title ">Welcome!</h2>
              {loginInfo}
            </Col>

            <Col className="admin__col  col-sm-12">
              <h2>Add Establishment</h2>
              <p>Test</p>
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
              <h1 className="main__title ">Admin Page</h1>
            </Col>

            <Col className="admin__col col-sm-12">
              <h2 className="sub__title ">Welcome!</h2>
              {loginInfo}
            </Col>

            <Col className="admin__col  col-sm-12">
              <h2>Add Establishment</h2>
              <p>Test</p>
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
      <Container className="admin">
        <Row>
          <Col className="admin__col col-sm-12">
            <h1 className="main__title ">Admin Page</h1>
          </Col>

          <Col className="admin__col col-sm-12">
            <h2 className="sub__title ">Welcome!</h2>
            {loginInfo}
          </Col>

          <Col className="admin__col  col-sm-12">
            <h2>Add Establishment</h2>
            <p>Test</p>
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
              <li>{contactInfo[0]}</li>
              <li>{contactInfo[1]}</li>
              <li>{contactInfo[2]}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}
