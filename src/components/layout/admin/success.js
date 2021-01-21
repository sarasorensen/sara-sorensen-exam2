import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CheckMark } from "../../constants/icons";

export default class Success extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false };
  }

  toggleClass() {
    this.setState({ addClass: !this.state.addClass });
  }

  render() {
    let fullName = localStorage.getItem("Full Name");
    let email = localStorage.getItem("Email");
    let message = localStorage.getItem("Message");
    let checkIn = localStorage.getItem("check in");
    let checkOut = localStorage.getItem("check out");

    return (
      <Container className="success">
        <Row>
          <Col>
            <div>
              <CheckMark />
              <h1 className="main__title">Thank You {fullName}!</h1>
              <p>
                We will get back to you shortly, please check your email for
                this.
              </p>
              <div className="toggle" onClick={this.toggleClass.bind(this)}>
                {this.state.addClass ? (
                  <ul>
                    <li>
                      <b>Message:</b> {message}
                    </li>
                    <li>
                      <b>Email:</b> {email}
                    </li>
                    <li>
                      <b>Check in date:</b> {checkIn}
                    </li>
                    <li>
                      <b>Check out date:</b> {checkOut}
                    </li>
                  </ul>
                ) : (
                  "View your input"
                )}
              </div>
            </div>
            <div>
              <NavLink to="/" className="success__link">
                Back to Homepage
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
