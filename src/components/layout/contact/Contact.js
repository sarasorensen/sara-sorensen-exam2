import React from "react";
import Form from "react-bootstrap/Form";
import Heading from "../Heading";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["firstName"] = "";
      input["lastName"] = "";
      input["email"] = "";
      input["message"] = "";
      this.setState({ input: input });

      document.getElementById("success").style.display = "block";
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["firstName"]) {
      isValid = false;
      errors["firstName"] = "Please enter your first name.";
    }

    if (!input["lastName"]) {
      isValid = false;
      errors["lastName"] = "Please enter your last name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["message"]) {
      isValid = false;
      errors["message"] = "Please enter your message.";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div>
        <Heading title="Contact Us" />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={this.state.input.firstName}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter first name"
              id="firstName"
            />

            <div className="text-danger">{this.state.errors.firstName}</div>
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={this.state.input.lastName}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter last name"
              id="lastName"
            />

            <div className="text-danger">{this.state.errors.lastName}</div>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email Address:</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter email"
              id="email"
            />

            <div className="text-danger">{this.state.errors.email}</div>
          </Form.Group>

          <Form.Group>
            <Form.Label>Message:</Form.Label>
            <textarea
              name="message"
              value={this.state.input.message}
              onChange={this.handleChange}
              placeholder="Enter message"
              className="form-control"
            />

            <div className="text-danger">{this.state.errors.message}</div>
          </Form.Group>

          <input type="submit" value="Submit" className="btn btn-success" />
          <div id="success" className="text-success">
            Form is submited
          </div>
        </Form>
      </div>
    );
  }
}

export default Contact;
