import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const MenuHeader = () => {
  const category = useSelector((state) => state.category);

  return (
    <div className="menuHeader">
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <li className="nav-item">
                <NavLink
                  to="/all-services"
                  className="nav-link text-brand-primary"
                  style={{ fontSize: 14, color: "black", fontWeight: 700 }}
                >
                  All Services
                </NavLink>
              </li>
              {category.categories &&
                category.categories?.slice(0, 6).map((cat, index) => (
                  <li className="nav-item dropdown ms-2" key={index}>
                    <span
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ fontSize: 13, color: "black" }}
                    >
                      {cat.name}
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="ms-1 menubar-icon"
                      />
                    </span>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      {cat.children &&
                        cat.children.map((child, _index) => (
                          <li key={_index}>
                            <Link
                              to={`/services/${child.slug}`}
                              className="dropdown-item"
                              style={{ fontSize: 13, color: "black" }}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuHeader;
