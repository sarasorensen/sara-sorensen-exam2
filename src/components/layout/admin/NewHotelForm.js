import React from "react";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<Per>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export default class ContactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelName: "",
      email: "",
      image: "",
      price: "",
      maxGuests: "",
      lat: "",
      lng: "",
      description: "",
      address: "",
      selfCatering: "",
      formErrors: {
        hotelName: "",
        email: "",
        image: "",
        price: "",
        maxGuests: "",
        lat: "",
        lng: "",
        description: "",
        address: "",
      },
    };
  }
  validateFormData = () => {
    let formErrors = { ...this.state.formErrors };
    formErrors.hotelName =
      this.state.hotelName.length < 2 ? "Minimum 2 characters required" : "";
    formErrors.email = emailRegex.test(this.state.email)
      ? ""
      : "Invalid email address";
    formErrors.image =
      this.state.image.length < 2 ? "Minimum 2 characters required" : "";
    formErrors.price =
      this.state.price.length < 1 ? "Minimum 1 character required" : "";
    formErrors.maxGuests =
      this.state.maxGuests.length < 1 ? "Minimum 1 character required" : "";
    formErrors.lat =
      this.state.lat.length < 1 ? "Minimum 1 character required" : "";
    formErrors.lng =
      this.state.lng.length < 1 ? "Minimum 1 character required" : "";
    formErrors.description =
      this.state.description.length < 1 ? "Minimum 1 character required" : "";
    formErrors.address =
      this.state.address.length < 1 ? "Minimum 1 character required" : "";
    this.setState({ formErrors });
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    this.validateFormData();
  };
  isFormInvalid = () => {
    const {
      hotelName,
      email,
      image,
      price,
      maxGuests,
      lat,
      lng,
      description,
      address,
    } = this.state.formErrors;
    return (
      hotelName.length !== 0 ||
      email.length !== 0 ||
      image.length !== 0 ||
      price.length !== 0 ||
      maxGuests.length !== 0 ||
      lat.length !== 0 ||
      lng.length !== 0 ||
      description.length !== 0 ||
      address.length !== 0
    );
  };
  onSubmit = (event, newData) => {
    event.preventDefault();
    this.setState({ redirect: "/admin" });

    const formInput = {
      name: this.state.hotelName,
      email: this.state.email,
      image: this.state.image,
      maxGuests: this.state.maxGuests,
      price: this.state.price,
      lat: this.state.lat,
      lng: this.state.lng,
      description: this.state.description,
      address: this.state.address,
      selfCatering: this.state.selfCatering,
    };

    localStorage.setItem("formInput", JSON.stringify(formInput));
  };

  render() {
    window.localStorage.removeItem("email");
    const { formErrors } = this.state;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <Container className="form">
        <Form method="POST" onSubmit={this.onSubmit.bind(this)}>
          <h2>Create Establishment</h2>
          <Form.Group>
            <Form.Label htmlFor="hotelName" className="form__label">
              Hotel Name:
            </Form.Label>
            <input
              type="text"
              name="hotelName"
              id="hotelName"
              className="form__control"
              noValidate
              value={this.state.hotelName}
              onChange={this.handleChange}
              aria-required="true"
              required="required"
            />
            {formErrors.hotelName.length > 0 && (
              <span className="[ form__error ]">
                <i>{formErrors.hotelName}</i>
              </span>
            )}
          </Form.Group>
          <Form.Group>
            <Row>
              <Col className="col-sm-6">
                <Form.Label htmlFor="email" className="form__label">
                  Hotel Email Address:
                </Form.Label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form__inline"
                  placeholder="example@example.com"
                  required="required"
                  value={this.state.email}
                  onChange={this.handleChange}
                  aria-required="true"
                />
                {formErrors.email.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.email}</i>
                  </span>
                )}
              </Col>
              <Col className="col-sm-6">
                <Form.Label htmlFor="image" className="form__label">
                  Image Url
                </Form.Label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  className="form__inline "
                  placeholder="http://imageurl.com"
                  required="required"
                  value={this.state.image}
                  onChange={this.handleChange}
                  aria-required="true"
                />
                {formErrors.image.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.image}</i>
                  </span>
                )}
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col className="col-sm-6">
                <Form.Label htmlFor="maxGuests" className="form__label">
                  Max Guests
                </Form.Label>
                <input
                  type="text"
                  name="maxGuests"
                  id="maxGuests"
                  className="form__inline"
                  placeholder="1"
                  required="required"
                  value={this.state.maxGuests}
                  onChange={this.handleChange}
                  aria-required="true"
                />
                {formErrors.maxGuests.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.maxGuests}</i>
                  </span>
                )}
              </Col>
              <Col className="col-sm-6">
                <Form.Label htmlFor="price" className="form__label">
                  Price
                </Form.Label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="form__inline"
                  placeholder="1"
                  required="required"
                  value={this.state.price}
                  onChange={this.handleChange}
                  aria-required="true"
                />
                {formErrors.price.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.price}</i>
                  </span>
                )}
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col className="col-sm-6">
                <Form.Label htmlFor="lat" className="form__label">
                  Lattitude
                </Form.Label>
                <input
                  type="text"
                  name="lat"
                  id="lat"
                  className="form__inline "
                  placeholder="80.9032"
                  required="required"
                  value={this.state.lat}
                  onChange={this.handleChange}
                  aria-required="true"
                />
                {formErrors.lat.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.lat}</i>
                  </span>
                )}
              </Col>
              <Col className="col-sm-6">
                <Form.Label htmlFor="lng" className="form__label">
                  Longitude
                </Form.Label>
                <input
                  type="text"
                  name="lng"
                  id="lng"
                  className="form__inline"
                  placeholder="3.9032"
                  required="required"
                  value={this.state.lng}
                  onChange={this.handleChange}
                  aria-required="true"
                />
                {formErrors.lng.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.lng}</i>
                  </span>
                )}
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="description" className="form__label">
              description
            </Form.Label>
            <input
              type="text"
              name="description"
              id="description"
              className="form__control"
              placeholder="description"
              required="required"
              value={this.state.description}
              onChange={this.handleChange}
              aria-required="true"
            />
            {formErrors.description.length > 0 && (
              <span className="[ form__error ]">
                <i>{formErrors.description}</i>
              </span>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="address" className="form__label">
              Address
            </Form.Label>
            <input
              type="text"
              name="address"
              id="address"
              className="form__control"
              placeholder="address 123"
              required="required"
              value={this.state.address}
              onChange={this.handleChange}
              aria-required="true"
            />
            {formErrors.address.length > 0 && (
              <span className="[ form__error ]">
                <i>{formErrors.address}</i>
              </span>
            )}
          </Form.Group>
          <Form.Group>
            <Row>
              <Col className="col-sm-6">
                <Form.Label
                  htmlFor="selfCatering"
                  className="radio__label radio-inline"
                >
                  Self Catering
                </Form.Label>
                <Form.Label className="radio__1">
                  <input
                    className="radio__check"
                    id="radio__1"
                    type="radio"
                    name="radio"
                    value={this.state.selfCatering.true}
                  />
                  True
                </Form.Label>
                <Form.Label className="radio__2">
                  <input
                    className="radio__check"
                    id="radio__2"
                    type="radio"
                    name="radio"
                    value={this.state.selfCatering.false}
                  />
                  False
                </Form.Label>
              </Col>
            </Row>
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
      </Container>
    );
  }
}
