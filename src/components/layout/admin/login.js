import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
        <Form className="login" onSubmit={handleSubmit}>
          <h1>Log in</h1>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              name="email"
              type="text"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <div className="form__error">{errors.email}</div>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && touched.password && (
              <div className="form__error">{errors.password}</div>
            )}
          </Form.Group>
          <div style={{ display: "flex" }}>
            <button className="btn__main" type="submit" disabled={isSubmitting}>
              Login
            </button>
          </div>
        </Form>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
