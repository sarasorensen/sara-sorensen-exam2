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

  render() {
    return (
      <Container className="success">
        <Row>
          <Col>
            <div>
              <CheckMark />
              <h1 className="main__title">Thank You!</h1>
              <p>
                We will get back to you shortly, please check your email for
                this.
              </p>

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
