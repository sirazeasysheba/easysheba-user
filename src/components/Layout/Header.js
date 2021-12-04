import React, { useState } from "react";
import {
  faSearch,
  faPhone,
  faBell,
  faListAlt,
  faUser,
  faCog,
  faSignOutAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
  Dropdown,
  Row,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../media/icons/es logo.svg";
import profile from "../../media/dummy-profile-pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/actions/auth.actions";
import CartCanvas from "../../pages/CartCanvas";
import NotificationsModal from "../UI/NotificationsModal";
import Cart from "../UI/Cart";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [notificationsShow, setNotificationsShow] = useState(false);

  const handleNotificationsModalClose = () => setNotificationsShow(false);
  const handleNotificationsModalShow = () => setNotificationsShow(true);

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    toast("Login Successful!", {
      type: "success",
      position: "top-right",
      theme: "colored",
    });
    dispatch(signOut());
  };
  return (
    <>
      <Container fluid>
        <Row style={{ maxWidth: 1350 }}>
          <Navbar
            bg="light"
            expand="lg"
            fixed="top"
            className="header"
            style={{ zIndex: 50 }}
          >
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
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="fa-rotate-90"
                      />{" "}
                      09696-010506
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
                  <Button className="shadow-none search-btn">
                    {" "}
                    <FontAwesomeIcon icon={faSearch} className="search-btn " />
                  </Button>
                </Form>
                <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                  <li className="nav-item fw-bold me-2">
                    <NavLink
                      to="/all-services"
                      className="nav-link text-brand-primary"
                      style={{ color: "black" }}
                    >
                      All Services
                    </NavLink>
                  </li>
                  {auth.authenticate && (
                    <li className="nav-item fw-bold me-2">
                      <span className="nav-link">
                        <FontAwesomeIcon
                          icon={faBell}
                          style={{ color: "black", cursor: "pointer" }}
                          onClick={handleNotificationsModalShow}
                        />
                      </span>
                    </li>
                  )}
                  <li className="nav-item fw-bold me-2">
                    <span onClick={handleShow} className="nav-link">
                      <Cart count={Object.keys(cart.cartItems).length} />
                    </span>
                  </li>
                  {auth.authenticate ? (
                    <li className="nav-item top-menu-container fw-bold me-5 ">
                      <span className="nav-link">
                        <Dropdown>
                          <Dropdown.Toggle className="dashboard-btn profile">
                            <img src={profile} alt="" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu style={{ right: 0, left: "auto" }}>
                            <Dropdown.Item
                              style={{ fontSize: 12, fontWeight: 700 }}
                              disabled
                            >
                              Logged in
                            </Dropdown.Item>
                            <Dropdown.Item
                              style={{ fontSize: 12, fontWeight: 700 }}
                            >
                              <FontAwesomeIcon
                                icon={faUser}
                                style={{
                                  fontSize: 12,
                                  marginRight: 10,
                                }}
                                className="mt-2 text-muted"
                              />{" "}
                              <Link to="/profile" className="topbar-link">
                                Profile
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                              style={{ fontSize: 12, fontWeight: 700 }}
                            >
                              <FontAwesomeIcon
                                icon={faCog}
                                style={{
                                  fontSize: 12,
                                  marginRight: 10,
                                }}
                                className="mt-2 text-dark"
                              />{" "}
                              <Link to="/user/setting" className="topbar-link">
                                Setting
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                              style={{ fontSize: 12, fontWeight: 700 }}
                            >
                              <FontAwesomeIcon
                                icon={faListAlt}
                                style={{
                                  fontSize: 12,
                                  marginRight: 10,
                                }}
                                className="mt-2 text-dark"
                              />{" "}
                              <Link to="/orders" className="topbar-link">
                                Order History
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                              style={{ fontSize: 12, fontWeight: 700 }}
                              onClick={logout}
                            >
                              <FontAwesomeIcon
                                icon={faSignOutAlt}
                                style={{
                                  fontSize: 12,
                                  marginRight: 10,
                                }}
                                className="mt-2 text-danger"
                              />
                              Logout
                            </Dropdown.Item>
                          </Dropdown.Menu>
                          <ToastContainer />
                        </Dropdown>
                      </span>
                    </li>
                  ) : (
                    <li className="nav-item me-5 fw-bold">
                      <NavLink
                        to="/login"
                        className="nav-link"
                        style={{ color: "black" }}
                      >
                        Login
                      </NavLink>
                    </li>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <CartCanvas show={show} handleClose={handleClose} placement="end" />
          <NotificationsModal
            modalShow={notificationsShow}
            handleClose={handleNotificationsModalClose}
            title="Notifications"
          >
            <div className="d-flex justify-content-between align-items-center border mb-2 rounded p-3">
              <div>
                <p className="mb-0">Message from Admin</p>
                <small>{Date()}</small>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-danger cursor"
                />
              </div>
            </div>
          </NotificationsModal>
        </Row>
      </Container>
    </>
  );
};

export default Header;
