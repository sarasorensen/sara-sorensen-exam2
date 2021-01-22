import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Email, Lock, PersonFill } from "../../constants/icons";

const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<Per>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      formErrors: {
        email: "",
        password: "",
      },
    };
  }

  validateFormData = () => {
    let formErrors = { ...this.state.formErrors };

    formErrors.password =
      this.state.password.length < 7
        ? "Password must have at least 8 characters"
        : "";
    formErrors.email = emailRegex.test(this.state.email)
      ? ""
      : "Invalid email address";
    this.setState({ formErrors });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    this.validateFormData();
  };

  isFormInvalid = () => {
    const { email, password } = this.state.formErrors;

    return password.length !== 0 || email.length !== 0;
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.history.push("/admin");

    console.log("Login info", this.state);

    const email = this.state.email;

    localStorage.setItem("email", email);
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="form__container">
        <Row>
          <Col className="form__col--1 col-sm-12   col-lg-6">
            <PersonFill />
            <p className="form__info">
              If you have an existing admin user, please enter your email and
              password in this form.
            </p>
          </Col>
          <Col className="col-sm-11   col-lg-6">
            <Form onSubmit={this.onSubmit.bind(this)}>
              <h1 className="main__title">Log in</h1>
              <Form.Group className="form__group">
                <Form.Label className="form__label" htmlFor="email">
                  <Email />
                  Email
                </Form.Label>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  className="form__control"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
                {formErrors.email.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.email}</i>
                  </span>
                )}
              </Form.Group>
              <Form.Group className="form__group">
                <Form.Label className="form__label" htmlFor="password">
                  <Lock />
                  Password
                </Form.Label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="form__control"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                {formErrors.password.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.password}</i>
                  </span>
                )}
              </Form.Group>
              <div style={{ display: "flex" }}>
                <button
                  to={"/admin"}
                  className="btn__main form__btn "
                  type="submit"
                  disabled={this.isFormInvalid()}
                >
                  Login
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
