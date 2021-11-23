import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ac from "../media/ac.jpg";
const CartCanvas = (props) => {
  const cart = useSelector((state) => state.cart);
  const allServices = useSelector((state) => state.service);
  const getService = (s) => {
    for (let service of allServices.services) {
      for (let serve of service.children) {
        if (serve._id === s) return serve.name;
      }
    }
  };
  return (
    <div>
      <Offcanvas
        show={props.show}
        onHide={props.handleClose}
        placement={props.placement}
        scroll={true}
        backdrop={false}
        closeLabel="Close"
      >
        <Offcanvas.Header closeButton Close className=" border-bottom">
          {" "}
          <Offcanvas.Title className="fw-bold"> Service Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {Object.keys(cart.cartItems).length > 0 ? (
            <div>
              {Object.keys(cart.cartItems).map((item) => (
                <div
                  className="d-flex justify-content-between mx-3 mt-1"
                  key={item}
                >
                  <img src={ac} alt="" style={{ height: 60 }} />
                  <div style={{ fontSize: 12 }}>
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
                    <small className="text-muted ">
                      {cart.cartItems[item].name} X {cart.cartItems[item].qty}{" "}
                      unit
                    </small>
                    <p
                      className="text-center fw-bold"
                      style={{ color: "#f16622", fontSize: 14 }}
                    >
                      ৳ {cart.cartItems[item].price * cart.cartItems[item].qty}
                    </p>
                  </div>
                  <FontAwesomeIcon icon={faTimes} className="cursor" />
                </div>
              ))}
            </div>
          ) : null}
          <div className="canvas-footer border-top">
            <div className="d-flex justify-content-between mt-3">
              <p>Subtotal</p>
              <p className="text-center fw-bold" style={{ color: "#f16622" }}>
                {" "}
                ৳{" "}
                {Object.keys(cart.cartItems).reduce((totalPrice, index) => {
                  const { qty, price } = cart.cartItems[index];
                  return totalPrice + price * qty;
                }, 0)}
              </p>
            </div>
            <div style={{ width: 360 }}>
              <Link to="/cart">
                <button className="secondary-btn w-100 mt-3">VIEW CART</button>{" "}
              </Link>
              <Link to="/checkout">
                <button className="primary-btn w-100 mt-3 mb-5">
                  CHECKOUT
                </button>{" "}
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CartCanvas;
