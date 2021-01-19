import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-datepicker/dist/react-datepicker.css";
import { House, Person, Email } from "../../constants/icons";

const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<Per>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

var hotelName = localStorage.getItem("hotel");
var image = localStorage.getItem("image");
var price = localStorage.getItem("price");
let sessionTotalPrice = sessionStorage.getItem("totalPrice");

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
      this.state.checkin.length < 0 ? "Check in date must be selected" : "";
    formErrors.checkout =
      this.state.checkout.length < 0 ? "Check out date must be selected" : "";
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

  handleDate = (e) => {
    const CheckIn = this.setState({
      checkin: e.target.value,
    });

    console.log("check In " + CheckIn);
    //console.log("check in" + checkIn);
    //let checkOut = Date.parse(data.checkout);
    //console.log("check out" + checkOut);
    //let days = Math.floor((checkOut - checkIn) / (1000 * 60 * 60 * 24));

    //let totalPrice = price * days;
    // console.log("total" + totalPrice);

    // sessionStorage.setItem("totalPrice", totalPrice);
  };

  success = (event) => {
    event.preventDefault();
    this.props.history.push("/success");
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="form__container">
        <Row>
          <Col className="form__col--1">
            <h1 className="enquiry__name">{hotelName}</h1>

            <img className="enquiry__hotel" src={image} alt={hotelName} />

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
                  placeholder="2021-01-01T10:30"
                  className="form__control"
                  noValidate
                  value={this.state.checkin}
                  onChange={this.handleDate}
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
                  placeholder="2021-01-01T10:30"
                  className="form__control"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.checkout.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.checkout}</i>
                  </span>
                )}
              </Form.Group>
              <p>
                TotalPrice = {sessionTotalPrice} Price:{" "}
                <span className="card__price--color"> {price}$</span>
              </p>
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
