import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({ [name]: value }, () => {
      this.validateFormData();
    });

    console.log(name, value);
  };

  isFormInvalid = () => {
    const { fullName, message, email } = this.state.formErrors;

    return fullName.length !== 0 || message.length !== 0 || email.length !== 0;
  };

  success = () => {
    this.props.history.push("/success");
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="form__container">
        <Row>
          <Col className="form__col--1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="form__icon bi bi-envelope-open"
              viewBox="0 0 16 16"
            >
              <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
            </svg>
            <p className="form__info">
              If you have any questions or just want to get in touch, use the
              contact form. We look forward to hearing from you!
            </p>
          </Col>
          <Col>
            <Form onSubmit={this.success.bind(this)}>
              <h1>Contact Us</h1>
              <Form.Group>
                <Form.Label htmlFor="fullName" className="form__label">
                  Full Name:
                </Form.Label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="form__control"
                  noValidate
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
                  Email Address:
                </Form.Label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form__control"
                  placeholder="example@example.com"
                  noValidate
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
                  Message:
                </Form.Label>
                <textarea
                  name="message"
                  id="message"
                  rows="8"
                  cols="80"
                  className="form__control"
                  noValidate
                  onChange={this.handleChange}
                  aria-required="true"
                />
                {formErrors.message.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.message}</i>
                  </span>
                )}
              </Form.Group>
              <Button
                type="submit"
                disabled={this.isFormInvalid()}
                value="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
