import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Email, Lock, PersonFill } from "../../constants/icons";

//local storage fix
const ValidatedLoginForm = () => (
  <Formik
    initialValues={{
      email: "",
      password: "",
    }}
    onSubmit={(values) => {
      alert("You are logged in");
      console.log("Logging info", values);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().email().required("Required"),
      password: Yup.string()
        .required("Password is required.")
        .min(8, "Password must be minimum 8 characters")
        .max(20, "Password must be less than 20 characters"),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
      } = props;

      return (
        <div className="form__container">
          <Row>
            <Col className="form__col--1">
              <PersonFill />
              <p className="form__info">
                If you have an existing admin user, please enter your email and
                password in this form.
              </p>
            </Col>
            <Col>
              <Form onSubmit={handleSubmit}>
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
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email && (
                    <div className="form__error">{errors.email}</div>
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
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && touched.password && (
                    <div className="form__error">{errors.password}</div>
                  )}
                </Form.Group>
                <div style={{ display: "flex" }}>
                  <button
                    className="btn__main form__btn "
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                  </button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
