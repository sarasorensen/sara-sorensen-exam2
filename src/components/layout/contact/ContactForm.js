import React from "react";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Person, Email, Message, Envelope } from "../../constants/icons";

const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<Per>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export default class ContactComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      message: "",
      formErrors: {
        fullName: "",
        email: "",
        message: "",
      },
    };
  }

  validateFormData = () => {
    let formErrors = { ...this.state.formErrors };

    formErrors.fullName =
      this.state.fullName.length < 2 ? "Minimum 2 characters required" : "";
    formErrors.message =
      this.state.message.length < 10
        ? "Message must have at least 10 characters"
        : "";
    formErrors.email = emailRegex.test(this.state.email)
      ? ""
      : "Invalid email address";
    this.setState({ formErrors });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    console.log(e.target.value);

    this.validateFormData();
  };

  isFormInvalid = () => {
    const { fullName, message, email } = this.state.formErrors;

    return fullName.length !== 0 || message.length !== 0 || email.length !== 0;
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ redirect: "/admin" });

    const contactInfo = {
      name: this.state.fullName,
      email: this.state.email,
      message: this.state.message,
    };

    localStorage.setItem("contact", JSON.stringify(contactInfo));
  };

  render() {
    const { formErrors } = this.state;

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <Container className="form">
        <Row>
          <Col className="form__col--1 col-sm-12 col-lg-6">
            <Envelope />
            <p className="form__info">
              If you have any questions or just want to get in touch, use the
              contact form. We look forward to hearing from you!
            </p>
          </Col>
          <Col className="form__col--2 col-sm-11 col-lg-6">
            <Form onSubmit={this.onSubmit.bind(this)}>
              <h1 className="main__title">Contact Us</h1>
              <Form.Group>
                <Form.Label htmlFor="fullName" className="form__label">
                  <Person />
                  Full Name:
                </Form.Label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="form__control"
                  noValidate
                  value={this.state.fullName}
                  onChange={this.handleChange}
                  aria-required="true"
                  required
                />
                {formErrors.fullName.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.fullName}</i>
                  </span>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="email" className="form__label">
                  <Email />
                  Email Address:
                </Form.Label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form__control"
                  placeholder="example@example.com"
                  noValidate
                  value={this.state.email}
                  onChange={this.handleChange}
                  aria-required="true"
                  required
                />
                {formErrors.email.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.email}</i>
                  </span>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="message" className="form__label">
                  <Message />
                  Message:
                </Form.Label>
                <textarea
                  name="message"
                  id="message"
                  rows="8"
                  cols="80"
                  className="form__control"
                  noValidate
                  value={this.state.message}
                  onChange={this.handleChange}
                  aria-required="true"
                />
                {formErrors.message.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.message}</i>
                  </span>
                )}
              </Form.Group>
              <button
                className="btn"
                type="submit"
                disabled={this.isFormInvalid()}
                value="submit"
              >
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
