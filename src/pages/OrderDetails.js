import React, { useState } from "react";
import {
  Breadcrumb,
  Col,
  Collapse,
  Container,
  Form,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import demo from "../media/ac.jpg";
import { ReactComponent as CopyIcon } from "../media/copy.svg";
import Stepper from "react-stepper-horizontal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPhone } from "@fortawesome/free-solid-svg-icons";
const OrderDetails = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div style={{ marginTop: 100, marginBottom: 50, fontSize: 13 }}>
      <Container>
        <Breadcrumb className="bread">
          <Breadcrumb.Item>
            {" "}
            <Link
              to="/"
              className="breadcrumb-item text-decoration-none"
              style={{ color: "#333333" }}
            >
              Home
            </Link>{" "}
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {" "}
            <Link
              to="/orders"
              className="breadcrumb-item text-decoration-none"
              style={{ color: "#333333" }}
            >
              Orders
            </Link>{" "}
          </Breadcrumb.Item>

          <Breadcrumb.Item active className="text-dark fw-bold">
            {" "}
            Order Details
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="order-details-tab-container">
          <Tab.Container id="left-tabs-example" defaultActiveKey="details">
            <Row>
              <Nav variant="pills">
                <Row className="w-50 mx-2 mb-3 border-bottom">
                  <Col md={3} className="px-0">
                    <Nav.Item className="active-toggle-btn">
                      <Nav.Link eventKey="details" className="tab-links ">
                        Details
                      </Nav.Link>
                    </Nav.Item>{" "}
                  </Col>
                  <Col md={4} className="px-0">
                    <Nav.Item className="active-toggle-btn">
                      <Nav.Link
                        eventKey="service-provider"
                        className="tab-links "
                      >
                        Service Provider
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col md={2} className="px-0">
                    <Nav.Item className="active-toggle-btn">
                      <Nav.Link eventKey="faq" className="tab-links ">
                        FAQ
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col md={3} className="px-0">
                    {" "}
                    <Nav.Item className="active-toggle-btn">
                      <Nav.Link eventKey="support" className="tab-links">
                        Support
                      </Nav.Link>
                    </Nav.Item>{" "}
                  </Col>
                </Row>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="details">
                  <div className="mt-4">
                    <div className="shadow-lg mx-3 rounded p-4">
                      <h6 className="fw-bold">TimeLine</h6>
                      <div className="mx-5" style={{ maxWidth: 700 }}>
                        <Stepper
                          steps={[
                            { title: "Order Placed" },
                            { title: "Order Confirmed" },
                            { title: "Order Processing" },
                            { title: "Order Completed" },
                          ]}
                          activeStep={1}
                        />
                      </div>
                    </div>
                    <Row className="mt-3 mx-2">
                      <Col md={3}>
                        <div className="shadow-lg rounded p-3">
                          <img
                            src={demo}
                            alt=""
                            style={{ width: "100%", borderRadius: 10 }}
                          />
                          <p className="text-muted mt-3">
                            <CopyIcon
                              onClick={() =>
                                navigator.clipboard.writeText(
                                  "Copy this text to clipboard"
                                )
                              }
                              style={{ cursor: "pointer" }}
                            />{" "}
                            D-563248
                          </p>
                          <h6 className="fw-bold">Desktop Services</h6>
                          <h4 className="fw-bold">৳ 1,780</h4>
                          <Link to="/">
                            <button className="primary-btn fw-bold w-100 mt-3 mb-3">
                              CANCEL ORDER
                            </button>{" "}
                          </Link>
                        </div>
                      </Col>
                      <Col md={5}>
                        <div className="shadow-lg rounded px-4  py-3">
                          <div className="d-flex justify-content-between">
                            <h6 className="fw-bold">Schedule</h6>
                            <button className="change-btn">
                              <FontAwesomeIcon icon={faEdit} /> Change
                            </button>
                          </div>
                          <div className="d-flex mt-3 fw-bold">
                            <div
                              className="pe-5"
                              style={{
                                borderRight: "4px solid #f5f5f6",
                              }}
                            >
                              <h5> 03</h5>
                              <h5> Nov</h5>
                            </div>
                            <div>
                              <h6 className="ms-5" style={{ lineHeight: 2 }}>
                                Wednesday <br /> 9:00 PM-10:00 PM
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="shadow-lg rounded px-4 mt-5  py-3">
                          <h6 className="fw-bold">Ordered By</h6>
                          <p>Md. Arifur Rahman</p>
                          <p>+8801821069661</p>
                          <p>4,4,Khilgaon</p>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="shadow-lg rounded px-4 py-3">
                          <h5 className="fw-bold mb-3">Bill & Payment </h5>
                          <div className="d-flex justify-content-between align-items-center border-bottom">
                            <div>
                              <p className="mb-0">
                                {" "}
                                Table & Work Station Ma...
                              </p>
                              <p className="text-muted fw-bold">
                                Wall Mount Home Work St.. x1
                              </p>
                            </div>
                            <p>৳ 7500</p>
                          </div>
                          <div
                            className="d-flex justify-content-between mt-2"
                            style={{ fontSize: 12 }}
                          >
                            <p className="mb-1">Subtotal</p>
                            <p className="mb-1">৳ 7500</p>
                          </div>
                          <div
                            className="d-flex justify-content-between mb-0"
                            style={{ fontSize: 12 }}
                          >
                            <p className="mb-1">Delivery Charge</p>
                            <p className="mb-1">0</p>
                          </div>
                          <div
                            className="d-flex justify-content-between text-success border-bottom"
                            style={{ fontSize: 12 }}
                          >
                            <p className="mb-1">Discount</p>
                            <p className="mb-1"> 0</p>
                          </div>
                          <div
                            className="d-flex justify-content-between mt-2 fw-bold"
                            style={{ fontSize: 12 }}
                          >
                            <p className="mb-1">Amount to be paid</p>
                            <p className="mb-1">৳ 7,500</p>
                          </div>
                          <small
                            className="text-muted d-block"
                            style={{ fontSize: 10 }}
                          >
                            *Prices are VAT exclusive
                          </small>
                          <small
                            className="text-muted"
                            style={{ fontSize: 10 }}
                          >
                            *Price may vary depending on product availability
                          </small>
                          <Form className="d-flex my-3">
                            <Form.Group
                              className="mb-3 app-form"
                              controlId="formBasicEmail"
                              style={{ maxWidth: 200 }}
                            >
                              <Form.Control
                                type="text"
                                placeholder="Type your promo code"
                                className="app-form shadow-none"
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3 "
                              controlId="formBasicEmail"
                            >
                              <button className="shadow-none add-promo-btn-2">
                                Add Promo
                              </button>
                            </Form.Group>
                          </Form>
                          <Link to="/order-payment">
                            <button className="primary-btn fw-bold w-100 mt-3 mb-3">
                              PAY NOW
                            </button>{" "}
                          </Link>
                        </div>
                      </Col>
                      <div
                        className="mt-5 py-3 text-center d-flex justify-content-center align-items-center"
                        style={{ backgroundColor: "#fafbfc" }}
                      >
                        <h6>Have any queries regarding this order?</h6>
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="fa-rotate-90 ms-3 me-2"
                          style={{ fontSize: 20 }}
                        />
                        <h5 className="fw-bold">09696-010506</h5>
                      </div>
                    </Row>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="service-provider">
                  <div className="mt-3">
                    <h5 className="fw-bold mb-3">Service Provider</h5>
                    <div className="shadow-lg rounded border d-flex p-3 w-50">
                      <img
                        src={demo}
                        alt=""
                        style={{
                          height: 100,
                          borderRadius: 10,
                          marginRight: 20,
                        }}
                      />
                      <div>
                        <h6 className="fw-bold">Bright Computer</h6>
                        <div className="d-flex">
                          <FontAwesomeIcon
                            icon={faPhone}
                            className="fa-rotate-90 me-2"
                            style={{ marginTop: 4 }}
                          />
                          <p className="fw-bold">09696-010506</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="mt-5 py-3 text-center d-flex justify-content-center align-items-center"
                      style={{ backgroundColor: "#fafbfc" }}
                    >
                      <h6>Have any queries regarding this order?</h6>
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="fa-rotate-90 ms-3 me-2 "
                        style={{ fontSize: 18, fontWeight: 300 }}
                      />
                      <h5 className="fw-bold">09696-010506</h5>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="faq">
                  <div className="mt-3">
                    <div className="mb-3">
                      {open ? (
                        <span className="span-plus-minus">-</span>
                      ) : (
                        <span className="span-plus-minus">+</span>
                      )}
                      <button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        className="faq-btn mb-2"
                      >
                        What if I want to reschedule the order?
                      </button>
                      <Collapse in={open}>
                        <div
                          id="example-collapse-text"
                          style={{ fontSize: 16, marginLeft: 23 }}
                        >
                          You can reschedule your order by calling service
                          provider. You can check your new schedule time and
                          date from order details page.
                        </div>
                      </Collapse>
                    </div>
                    <div className="mb-3">
                      {open1 ? (
                        <span className="span-plus-minus">-</span>
                      ) : (
                        <span className="span-plus-minus">+</span>
                      )}
                      <button
                        onClick={() => setOpen1(!open1)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open1}
                        className="faq-btn mb-2"
                      >
                        What if I want to reschedule the order?
                      </button>
                      <Collapse in={open1}>
                        <div
                          id="example-collapse-text"
                          style={{ fontSize: 16, marginLeft: 23 }}
                        >
                          You can reschedule your order by calling service
                          provider. You can check your new schedule time and
                          date from order details page.
                        </div>
                      </Collapse>
                    </div>
                    <div className="mb-3">
                      {open2 ? (
                        <span className="span-plus-minus">-</span>
                      ) : (
                        <span className="span-plus-minus">+</span>
                      )}
                      <button
                        onClick={() => setOpen2(!open2)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open2}
                        className="faq-btn mb-2"
                      >
                        What if I want to reschedule the order?
                      </button>
                      <Collapse in={open2}>
                        <div
                          id="example-collapse-text"
                          style={{ fontSize: 16, marginLeft: 23 }}
                        >
                          You can reschedule your order by calling service
                          provider. You can check your new schedule time and
                          date from order details page.
                        </div>
                      </Collapse>
                    </div>
                    <div className="mb-3">
                      {open3 ? (
                        <span className="span-plus-minus">-</span>
                      ) : (
                        <span className="span-plus-minus">+</span>
                      )}
                      <button
                        onClick={() => setOpen3(!open3)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open3}
                        className="faq-btn mb-2"
                      >
                        What if I want to reschedule the order?
                      </button>
                      <Collapse in={open3}>
                        <div
                          id="example-collapse-text"
                          style={{ fontSize: 16, marginLeft: 23 }}
                        >
                          You can reschedule your order by calling service
                          provider. You can check your new schedule time and
                          date from order details page.
                        </div>
                      </Collapse>
                    </div>
                    <div className="mb-3">
                      {open4 ? (
                        <span className="span-plus-minus">-</span>
                      ) : (
                        <span className="span-plus-minus">+</span>
                      )}
                      <button
                        onClick={() => setOpen4(!open4)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open4}
                        className="faq-btn mb-2"
                      >
                        What if I want to reschedule the order?
                      </button>
                      <Collapse in={open4}>
                        <div
                          id="example-collapse-text"
                          style={{ fontSize: 16, marginLeft: 23 }}
                        >
                          You can reschedule your order by calling service
                          provider. You can check your new schedule time and
                          date from order details page.
                        </div>
                      </Collapse>
                    </div>
                    <div
                      className="mt-5 py-3 text-center d-flex justify-content-center align-items-center"
                      style={{ backgroundColor: "#fafbfc" }}
                    >
                      <h6>Have any queries regarding this order?</h6>
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="fa-rotate-90 ms-3 me-2 "
                        style={{ fontSize: 18, fontWeight: 300 }}
                      />
                      <h5 className="fw-bold">01966-050506</h5>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="support">
                  <div className="mt-3">
                    <h5 className="my-5 fw-bold text-center">
                      Need help with order?
                    </h5>
                    <Row>
                      <Col md={6}>
                        <div className="border rounded py-5 text-center">
                          <h5>
                            Still did not get the answer you’re looking for?
                          </h5>
                          <div className="d-flex justify-content-center mt-3">
                            <FontAwesomeIcon
                              icon={faPhone}
                              className="fa-rotate-90 me-2 "
                              style={{ marginTop: 4 }}
                            />
                            <p className="fw-bold">01966-050506</p>
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="border rounded py-5 text-center">
                          <h5>Learn more about order management from our</h5>
                          <Link to="/" className="link">
                            {" "}
                            <h6 className="fw-bold">FAQs</h6>
                          </Link>
                          <div className="d-flex justify-content-center mt-3">
                            <FontAwesomeIcon
                              icon={faPhone}
                              className="fa-rotate-90 me-2 "
                              style={{ marginTop: 4 }}
                            />
                            <p className="fw-bold">01966-050506</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Row>
          </Tab.Container>
        </div>
      </Container>
    </div>
  );
};

export default OrderDetails;
