import React from "react";
import {
  faCartPlus,
  faSearch,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../media/icons/es logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link to="/" className="navbar-brand mx-5">
            {" "}
            <img src={logo} alt="" style={{ width: 140 }} />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="my-2 my-lg-0" navbarScroll>
              <li className="nav-item fw-bold me-2">
                <NavLink to="/" className="nav-link">
                  <FontAwesomeIcon icon={faPhone} /> 01966-050506
                </NavLink>
              </li>
            </Nav>
            <Form className="d-flex top-search-box">
              <FormControl
                type="search"
                placeholder="Find your service here"
                aria-label="Search"
                className="search-box me-2 shadow-none"
              />
              <Button variant="outline-success" className="shadow-none">
                {" "}
                <FontAwesomeIcon icon={faSearch} className="search-btn " />
              </Button>
            </Form>
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <li className="nav-item fw-bold me-2">
                <NavLink to="/all-services" className="nav-link">
                  All Services
                </NavLink>
              </li>
              <li className="nav-item fw-bold me-2">
                <NavLink to="/cart" className="nav-link">
                  <FontAwesomeIcon icon={faCartPlus} />
                </NavLink>
              </li>
              <li className="nav-item me-5 fw-bold">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
