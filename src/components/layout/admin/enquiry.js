import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-datepicker/dist/react-datepicker.css";
import { House, Person, Email } from "../../constants/icons";

const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<Per>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export default class ContactComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      checkin: "",
      checkout: "",
      formErrors: {
        fullName: "",
        email: "",
        checkin: "",
        checkout: "",
      },
    };
  }

  validateFormData = () => {
    let formErrors = { ...this.state.formErrors };

    formErrors.fullName =
      this.state.fullName.length < 2 ? "Minimum 2 characters required" : "";
    formErrors.checkin =
      this.state.checkin.length < 1 ? "Check in date must be selected" : "";
    formErrors.checkout =
      this.state.checkout.length < 1 ? "Check out date must be selected" : "";
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
    const { fullName, email, checkin, checkout } = this.state.formErrors;

    return (
      fullName.length !== 0 ||
      email.length !== 0 ||
      checkin.length !== 0 ||
      checkout.length !== 0
    );
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
            <House />
            <p className="form__info">
              Thank you for choosing Holidaze to book your hotel with. Don't
              worry about making any mistakes when booking your hotel, as this
              can be changed later via email support.
            </p>
          </Col>
          <Col>
            <Form onSubmit={this.success.bind(this)}>
              <h1 className="main__title">Enquiry</h1>
              <Form.Group className="form__group">
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
              <Form.Group className="form__group">
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
              <Form.Group className="form__group">
                <Form.Label htmlFor="checkin" className="form__label">
                  Check In
                </Form.Label>
                <input
                  name="checkin"
                  id="datetime-local"
                  label="Next appointment"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className="form__control"
                  noValidate
                  onChange={this.handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                {formErrors.checkin.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.checkin}</i>
                  </span>
                )}
              </Form.Group>
              <Form.Group className="form__group">
                <Form.Label htmlFor="checkout" className="form__label">
                  Check Out
                </Form.Label>

                <input
                  name="checkout"
                  id="datetime-local"
                  label="Next appointment"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className="form__control"
                  noValidate
                  onChange={this.handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {formErrors.checkout.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.checkout}</i>
                  </span>
                )}
              </Form.Group>
              <button
                className="btn__main form__btn "
                type="submit"
                disabled={this.isFormInvalid()}
                value="submit"
              >
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
