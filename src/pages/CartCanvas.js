import { faClosedCaptioning, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import ac from "../media/ac.jpg";
const CartCanvas = (props) => {
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
          <div>
            <div className="d-flex justify-content-between mx-3 mt-3">
              <img src={ac} alt="" style={{ height: 60 }} />
              <div style={{ fontSize: 12 }}>
                <p className="mb-0 mx-3 text-center">
                  Book Home Deep Cleaning (Floor,Kitchen,Washroom included)
                </p>
                <p
                  className="text-center fw-bold"
                  style={{ color: "#f16622", fontSize: 14 }}
                >
                  ৳ 6,590.00
                </p>
              </div>
              <FontAwesomeIcon icon={faTimes} className="cursor" />
            </div>
            <div className="d-flex justify-content-between mx-3 mt-3">
              <img src={ac} alt="" style={{ height: 60 }} />
              <div style={{ fontSize: 12 }}>
                <p className="mb-0 mx-3 text-center">
                  Book Home Deep Cleaning (Floor,Kitchen,Washroom included)
                </p>
                <p
                  className="text-center fw-bold"
                  style={{ color: "#f16622", fontSize: 14 }}
                >
                  ৳ 6,590.00
                </p>
              </div>
              <FontAwesomeIcon icon={faTimes} className="cursor" />
            </div>
          </div>
          <div className="canvas-footer border-top">
            <div className="d-flex justify-content-between mt-3">
              <p>Subtotal</p>
              <p className="text-center fw-bold" style={{ color: "#f16622" }}>
                {" "}
                ৳ 6,590.00
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
