import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./home/Home";
import Hotels from "./hotels/Hotels";
import Contact from "./contact/Contact";
import Login from "../layout/admin/login";
import Success from "../layout/admin/success";
import Logo from "../../images/logo-y.png";
import Footer from "./Footer";

function Layout() {
  return (
    <Router>
      <div></div>
      <Navbar expand="lg">
        <NavLink to="/" exact>
          <Navbar.Brand>
            <img src={Logo} className="navbar__logo" alt="company logo " />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            <NavLink to="/" exact className="navbar__link">
              Home
            </NavLink>
            <NavLink to="/hotels" className="navbar__link">
              Hotels
            </NavLink>
            <NavLink to="/contact" className="navbar__link">
              Contact
            </NavLink>
            <NavLink to="/login" className="navbar__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="navigation__icon bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/hotels" component={Hotels} />
          <Route path="/login" component={Login} />
          <Route path="/success" component={Success} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default Layout;
