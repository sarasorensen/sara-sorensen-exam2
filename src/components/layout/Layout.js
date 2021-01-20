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
import Login from "../layout/admin/Login";
import HotelSpecific from "./hotels/HotelSpecific";
import Enquiry from "./admin/Enquiry";
import Footer from "./Footer";
import Success from "../layout/admin/Success";
import Logo from "../../images/logo-y.png";
import { Person } from "../constants/icons";

function Layout() {
  return (
    <Router>
      <Navbar expand="lg">
        <NavLink className="navbar__logo left-align" to="/" exact>
          <img src={Logo} alt="company logo " />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            <NavLink to="/" exact className="navbar__link order-md-0 mx-auto">
              Home
            </NavLink>
            <NavLink to="/hotels" className="navbar__link ">
              Hotels
            </NavLink>
            <NavLink to="/contact" className="navbar__link ">
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
          <Route path="/hotelSpecific/:id" component={HotelSpecific} />
          <Route path="/success" component={Success} />
          <Route path="/enquiry" component={Enquiry} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default Layout;
