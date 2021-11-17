import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Row, Table, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import demo from "../media/ac.jpg";
const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 1780;
  const [disable, setDisable] = useState(false);
  const handleDecrement = () => {
    if (quantity <= 1) {
      setDisable(true);
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    setDisable(false);
    setQuantity(quantity + 1);
  };
  return (
    <div style={{ marginTop: 100, marginBottom: 50 }}>
      <Container>
        <div className="text-center">
          <h3 className="fw-bold">Your Cart</h3>
          <p>Please "Go To Checkout" to complete your order</p>
        </div>
        <Row>
          <Col md={8}>
            <div className="mt-5">
              <Table className="table-borderless">
                <thead
                  style={{
                    backgroundColor: "rgba(18,15,46,.04)",
                  }}
                >
                  <tr>
                    <th>Service</th>
                    <th>Price </th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="d-flex" style={{ width: 350 }}>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="mt-3 me-2 cursor"
                      />
                      <img
                        src={demo}
                        alt=""
                        style={{ height: 40, borderRadius: 5 }}
                      />
                      <div className="ms-3 mt-2">
                        <p className="fw-bold mb-0">AC Servicing</p>
                        <small>
                          Choose Service: Master Service Choose Ton Of Your AC:
                          2-3 Ton
                        </small>
                      </div>
                    </td>
                    <td>
                      <div className="mt-3 fw-bold">৳ 1,780</div>
                    </td>
                    <td>
                      <div className="d-flex">
                        <div>
                          <button
                            className="px-1 border py-2"
                            disabled={disable}
                            onClick={handleDecrement}
                          >
                            -
                          </button>
                        </div>
                        <p className="px-2 py-2 border mx-2 ">{quantity}</p>
                        <div>
                          <button
                            className="px-1 py-2 border"
                            onClick={handleIncrement}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="mt-3 fw-bold">৳ {price * quantity}</div>
                    </td>
                  </tr>
                </tbody>
              </Table>
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
          </Col>
          <Col md={4}>
            <div className="mt-5 ms-5">
              <h5 className="fw-bold mb-3">CART TOTALS </h5>
              <div className="d-flex justify-content-between mt-2">
                <p className="mb-1">Subtotal</p>
                <p className="mb-1">৳ 7500</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-1">Delivery Charge</p>
                <p className="mb-1">0</p>
              </div>
              <div className="d-flex justify-content-between text-success border-bottom">
                <p className="mb-1">Discount</p>
                <p className="mb-1"> 0</p>
              </div>
              <div className="d-flex justify-content-between mt-2 fw-bold">
                <p>Amount to be paid</p>
                <p>৳ 7,500</p>
              </div>
              <Link to="/checkout" className="mx-auto">
                <button className="secondary-btn mt-3 mb-5">
                  Proceed to Checkout
                </button>{" "}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
