import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, Collapse, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import success from "../media/success-icon.svg";
import info from "../media/info-blue.svg";
import bkash from "../media/bkash.png";
import nagad from "../media/nagad.png";
import cbl from "../media/cbl.png";
import { useSelector } from "react-redux";
const OrderPayment = () => {
  const auth = useSelector((state) => state.auth);
  const order = JSON.parse(localStorage.getItem("order"));
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginTop: 100 }}>
      <Container>
        <Row>
          <Col md={8}>
            <div className="shadow-lg rounded py-5 px-3">
              <div className="d-flex">
                <div className="me-3">
                  <img src={success} alt="" />
                </div>
                <div>
                  <h5 className="fw-bold">
                    {auth.user.name} your order has been placed successfully!
                  </h5>
                  <p className="mb-0">
                    Your Order ID : <span className="fw-bold">{order.id}</span>
                  </p>
                  <small className="d-block mb-3">
                    To track your order Download our app & login.
                  </small>
                  <button className="primary-btn me-5">Order Details</button>
                  <Link to="/" className="link">
                    <FontAwesomeIcon icon={faHome} /> Back to Home
                  </Link>
                </div>
              </div>
              <div className="mt-5 mx-5">
                <h5 className="fw-bold mb-3">What is next :</h5>
                <ol style={{ fontSize: 14, fontWeight: 600 }}>
                  <li>
                    {" "}
                    You’ll get a call within 30 minutes for confirmation.
                  </li>
                  <li>We will monitor the whole service.</li>
                  <li>
                    Expert will arrive at your place & ensure the best service.
                  </li>
                  <li>So just RELAX. For any further query contact us.</li>
                </ol>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="shadow-lg py-5 px-4 mb-5  rounded ">
              <h5 className="fw-bold mb-3">Payment</h5>
              <div className="d-flex info-section  py-2 mb-2">
                <div className="mx-2 ">
                  <img src={info} alt="" />
                </div>
                <p className="mb-0" style={{ fontSize: 12 }}>
                  You can pay now or you can pay later from order details
                </p>
              </div>
              <div className="d-flex align-items-center my-3">
                {" "}
                <p className="mb-0 me-3 fw-bold" style={{ fontSize: 13 }}>
                  Total Payable ৳ {order.totalAmount}
                </p>
                <button
                  onClick={() => setOpen(!open)}
                  aria-expanded={open}
                  className="view-details-btn"
                >
                  View Details{" "}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="ms-1 pt-2 fw-bold"
                    style={{ color: "#f16622", fontSize: 20 }}
                  />
                </button>
              </div>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  {order.items.map((item) => (
                    <div
                      className="d-flex justify-content-between align-items-center border-bottom"
                      style={{ fontSize: 12 }}
                    >
                      <div>
                        <p className="mb-0"> {item.serviceName}</p>

                        <p className="text-muted fw-bold">
                          {item.productName} x {item.purchasedQty}
                        </p>
                      </div>
                      <p>
                        {" "}
                        ৳{" "}
                        {(
                          item.payablePrice * item.purchasedQty
                        ).toLocaleString()}
                      </p>
                    </div>
                  ))}
                  <div
                    className="d-flex justify-content-between mt-2"
                    style={{ fontSize: 12 }}
                  >
                    <p className="mb-1">Subtotal</p>
                    <p className="mb-1">
                      {" "}
                      ৳ {order.totalAmount.toLocaleString()}
                    </p>
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
                    <p className="mb-1">
                      {" "}
                      ৳ {order.totalAmount.toLocaleString()}
                    </p>
                  </div>
                  <small
                    className="text-muted d-block"
                    style={{ fontSize: 10 }}
                  >
                    *Prices are VAT exclusive
                  </small>
                  <small className="text-muted" style={{ fontSize: 10 }}>
                    *Price may vary depending on product availability
                  </small>
                  <Form className="d-flex my-3">
                    <Form.Group
                      className="mb-3 app-form"
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Type your promo code"
                        className="app-form shadow-none"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                      <button className="shadow-none add-promo-btn-2">
                        Add Promo
                      </button>
                    </Form.Group>
                  </Form>
                </div>
              </Collapse>
              <Form>
                <Form.Group className="mb-2 input-max-w" controlId="username">
                  <Form.Label className="fw-bold text-brand-primary mb-1">
                    Payment Methods
                  </Form.Label>
                  <div className="d-flex align-items-center mb-2">
                    <Form.Check type="radio" value="visa" />
                    <img
                      src={bkash}
                      alt=""
                      className="mx-2"
                      style={{ width: 30, height: 30 }}
                    />
                    <small>Bkash</small>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <Form.Check type="radio" value="visa" />
                    <img
                      src={nagad}
                      alt=""
                      className="mx-2"
                      style={{ width: 30, height: 30 }}
                    />
                    <small>Nagad</small>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <Form.Check type="radio" value="visa" />
                    <img
                      src={cbl}
                      alt=""
                      className="mx-2"
                      style={{ width: 30, height: 30 }}
                    />
                    <small>City Bank</small>
                  </div>
                  <div>
                    <div>
                      <button className="primary-btn mt-3 w-100">
                        Make Payment
                      </button>
                    </div>
                    <div className="text-center mt-3">
                      <Link to="/" className="link">
                        <span className="fw-bold">I will pay later...</span>
                      </Link>
                    </div>
                  </div>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderPayment;
