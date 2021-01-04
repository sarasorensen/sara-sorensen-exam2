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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="image-blurred-edge">
        <img src={Header} className="navbar__header" alt="company header " />
      </div>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/hotels" component={Hotels} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default Layout;
