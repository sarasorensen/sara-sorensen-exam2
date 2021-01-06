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
import HotelSpecific from "./hotels/HotelSpecific";
import Footer from "./Footer";
import Success from "../layout/admin/success";
import Logo from "../../images/logo-y.png";
import { Person } from "../constants/icons";

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
              <Person />
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
          <Route path="/hotelSpecific" component={HotelSpecific} />
          <Route path="/success" component={Success} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default Layout;
