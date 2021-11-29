import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Row, Table, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import demo from "../media/ac.jpg";
import { addToCart, removeCartItem } from "../redux/actions";
import { ToastContainer, toast } from "react-toastify";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const allServices = useSelector((state) => state.service);
  const dispatch = useDispatch();
  const getService = (s) => {
    for (let service of allServices.services) {
      for (let serve of service.children) {
        if (serve._id === s) return serve.name;
      }
    }
  };
  const onQuantityDecrement = (product) => {
    if (product.qty > 1) {
      dispatch(addToCart(product, -1));
    } else {
      const payload = {
        productId: product._id,
      };
      dispatch(removeCartItem(payload));
      toast("Removed Successfully", {
        type: "error",
        theme: "colored",
      });
    }
  };

  const removeItem = (product) => {
    const payload = {
      productId: product._id,
    };
    dispatch(removeCartItem(payload));
    toast("Removed Successfully", {
      type: "error",
      theme: "colored",
    });
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
            {Object.keys(cart.cartItems).length > 0 ? (
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
                    {Object.keys(cart.cartItems).map((item) => (
                      <tr key={item}>
                        <td className="d-flex" style={{ width: 350 }}>
                          <FontAwesomeIcon
                            icon={faTimes}
                            className="mt-3 me-2 cursor"
                            onClick={() => removeItem(cart.cartItems[item])}
                          />
                          <ToastContainer />
                          <img
                            src={demo}
                            alt=""
                            style={{ height: 40, borderRadius: 5 }}
                          />
                          <div className="ms-3 mt-2">
                            <small>
                              {cart.cartItems[item].service.name ? (
                                <p className="mb-0">
                                  {" "}
                                  {cart.cartItems[item].service.name}
                                </p>
                              ) : (
                                <p className="mb-0">
                                  {" "}
                                  {getService(cart.cartItems[item].service)}
                                </p>
                              )}
                              {cart.cartItems[item].name} x{" "}
                              {cart.cartItems[item].qty}
                            </small>
                          </div>
                        </td>
                        <td>
                          <div className="mt-3">
                            {" "}
                            ৳{" "}
                            {(
                              cart.cartItems[item].price *
                              cart.cartItems[item].qty
                            ).toLocaleString()}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div>
                              <button
                                className="px-1 border py-2"
                                onClick={() =>
                                  onQuantityDecrement(cart.cartItems[item])
                                }
                              >
                                -
                              </button>
                            </div>
                            <p className="px-2 py-2 border mx-2 fw-bold">
                              {" "}
                              {cart.cartItems[item].qty}
                            </p>
                            <div>
                              <button
                                className="px-1 py-2 border"
                                onClick={() =>
                                  dispatch(addToCart(cart.cartItems[item], 1))
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="fw-bold">
                            ৳{" "}
                            {Object.keys(cart.cartItems)
                              .reduce((totalPrice, index) => {
                                const { qty, price } = cart.cartItems[index];
                                return totalPrice + price * qty;
                              }, 0)
                              .toLocaleString()}
                          </div>
                        </td>
                      </tr>
                    ))}
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
            ) : (
              <div className="d-flex align-items-center justify-content-center">
                <div className="text-center text-muted ">
                  <h2 className="mt-5">Empty Cart</h2>
                  <p className="small my-5 mx-5">
                    Get your service done just with few clicks! so what are you
                    waiting for?
                  </p>
                  <div className="empty-cart-icon"></div>
                </div>
              </div>
            )}
          </Col>
          <Col md={4}>
            <div className="mt-5 ms-5">
              <h5 className="fw-bold mb-3">CART TOTALS </h5>
              <div className="d-flex justify-content-between mt-2">
                <p className="mb-1">Total Items</p>
                <p className="mb-1">{Object.keys(cart.cartItems).length}</p>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <p className="mb-1">Subtotal</p>
                <p className="mb-1">
                  ৳ ৳{" "}
                  {Object.keys(cart.cartItems)
                    .reduce((totalPrice, index) => {
                      const { qty, price } = cart.cartItems[index];
                      return totalPrice + price * qty;
                    }, 0)
                    .toLocaleString()}
                </p>
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
                <p>
                  ৳ ৳{" "}
                  {Object.keys(cart.cartItems)
                    .reduce((totalPrice, index) => {
                      const { qty, price } = cart.cartItems[index];
                      return totalPrice + price * qty;
                    }, 0)
                    .toLocaleString()}
                </p>
              </div>
              {Object.keys(cart.cartItems).length > 0 ? (
                <Link to="/checkout" className="mx-auto">
                  <button className="secondary-btn w-100 mt-3 mb-5">
                    Proceed to Checkout
                  </button>{" "}
                </Link>
              ) : (
                <Link to="/checkout" className="mx-auto">
                  <button className="secondary-btn w-100 mt-3 mb-5" disabled>
                    Proceed to Checkout
                  </button>{" "}
                </Link>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
