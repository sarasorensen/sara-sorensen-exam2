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
import Logo from "../../images/logo-y.png";
import Header from "../../images/header.jpg";

function Layout() {
  return (
    <Router>
      <Navbar expand="lg">
        <NavLink to="/" exact>
          <Navbar.Brand>
            <img src={Logo} className="navbar__logo" alt="company logo " />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact className="nav-link  text-right">
              Home
            </NavLink>
            <NavLink to="/hotels" className="nav-link  text-right">
              Hotels
            </NavLink>
            <NavLink to="/contact" className="nav-link  text-right">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <img src={Header} className="navbar__header" alt="company header " />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/hotels" component={Hotels} />
        </Switch>
      </Container>
    </Router>
  );
}

export default Layout;
