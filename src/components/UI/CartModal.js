import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import close from "../../media/x-converted.png";
import { addToCart, removeOneItemFromCart } from "../../redux/actions";
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "1000px",
    minHeight: "500px",
    transform: "translate(-50%, -50%)",
    overflow: "visible",
    padding: 0,

    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
};

const buttonStyles = {
  position: "absolute",
  top: "-23px",
  right: "-35px",
  border: "none",
  background: "transparent",
  zIndex: "10001 !important",
};
Modal.setAppElement("#root");

//function

const CartModal = ({ modalIsOpen, closeModal, productByService, service }) => {
  console.log(productByService);
  const [info, setInfo] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart.cartItems);
  const [cartItems, setCartItems] = useState(cart.cartItems);
  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  const handleIncrement = (id, quantity) => {
    // const sameProduct = cart.find((pd) => pd.id === product.id);
    // sameProduct.quantity += 1;
    // setSubTotal(subTotal + product.price);
    // const others = cart.filter((pd) => pd.id !== product.id);
    // let newCart = [...others, sameProduct];
    console.log(id, quantity);
    setQuantity(quantity + 1);
  };
  const handleDecrement = (id, quantity) => {
    // const sameProduct = cart.find((pd) => pd.id === product.id);
    // if (sameProduct.quantity <= 1) {
    //   const others = cart.filter((pd) => pd.id !== product.id);
    //   setCart(others);
    // } else {
    //   sameProduct.quantity -= 1;
    //   const others = cart.filter((pd) => pd.id !== product.id);
    //   let newCart = [...others, sameProduct];
    //   setCart(newCart);
    //   setSubTotal(subTotal - product.price);
    // }
    // setSubTotal(subTotal - product.price);
  };
  // const handleAddProduct = (product) => {
  //   product.quantity = 1;
  //   setSubTotal(subTotal + product.quantity * product.price);
  //   let newCart = [...cart, product];
  //   const sameProduct = cart.find((pd) => pd.id === product.id);
  //   if (sameProduct) {
  //     product.btn = false;
  //   }
  //   setCart(newCart);
  // };

  // console.log(cart);
  return (
    <div className="cart-modal">
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {!info ? (
          <div>
            <button onClick={closeModal} style={buttonStyles}>
              <img src={close} alt="" />
            </button>
            <div>
              <div className="shadow mt-0 pb-3 pt-4">
                <h5 className="text-center" style={{ fontWeight: 600 }}>
                  {service.name}
                </h5>
              </div>
              <Container>
                <Row>
                  <Col md={7} className="px-0">
                    <div
                      className="py-3 px-0"
                      style={{ backgroundColor: "#f5f5f8", marginLeft: 0 }}
                    >
                      <h6 className="text-center">
                        {productByService.length} options available
                      </h6>
                    </div>
                    <div className="mx-5 my-3">
                      <p>Select Options -</p>
                    </div>
                    {productByService?.map((product) => (
                      <div
                        className="d-flex justify-content-between mx-5 border-bottom mt-3"
                        key={product.id}
                      >
                        <div>
                          <p className="mb-1 fw-bold">{product.name}</p>
                          <p className="fw-bold text-success mb-0">
                            ৳ {product.price} /{" "}
                            <span
                              className="text-muted"
                              style={{ fontSize: 12, fontWeight: 200 }}
                            >
                              unit
                            </span>
                          </p>
                        </div>
                        <div>
                          {product.unitBtn ? (
                            <div className="quantity-section d-flex justify-content-between align-items-center">
                              <div style={{ backgroundColor: "#f16622" }}>
                                <button
                                  className="mb-0 px-2 increment-decrement-btn"
                                  // onClick={() => handleDecrement(product)}
                                >
                                  -
                                </button>
                              </div>
                              <p className="mb-0">
                                {product.quantity}
                                <span
                                  className="text-muted ms-1"
                                  style={{ fontSize: 12, fontWeight: 200 }}
                                >
                                  unit
                                </span>
                              </p>
                              <div style={{ backgroundColor: "#f16622" }}>
                                <button
                                  className="mb-0  px-2 increment-decrement-btn"
                                  // onClick={() => handleIncrement(product)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button
                              className="primary-btn px-3 py-1 mt-2"
                              onClick={() => dispatch(addToCart(product))}
                            >
                              Add +{" "}
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </Col>
                  <Col
                    md={5}
                    className="px-0"
                    style={{
                      backgroundColor: "#f5f5f8",
                      marginLeft: 0,
                      minHeight: 400,
                      overflowY: "auto",
                    }}
                  >
                    {Object.keys(cartItems).length > 0 ? (
                      <div className="mt-3">
                        {Object.keys(cartItems).map((item) => (
                          <div className="mx-3 mb-5" key={item}>
                            {/* {JSON.stringify(item)} */}
                            <div className="d-flex justify-content-between">
                              {/* <h6> {cartItems[item].service.name}</h6> */}
                              <div className="quantity-section d-flex justify-content-between align-items-center">
                                <div style={{ backgroundColor: "#f16622" }}>
                                  <button
                                    className="mb-0 px-2 increment-decrement-btn"
                                    onClick={() =>
                                      dispatch(
                                        removeOneItemFromCart(cartItems[item])
                                      )
                                    }
                                  >
                                    -
                                  </button>
                                </div>
                                <p className="mb-0">
                                  {cartItems[item].qty}
                                  <span
                                    className="text-muted ms-1"
                                    style={{ fontSize: 12, fontWeight: 200 }}
                                  >
                                    unit
                                  </span>
                                </p>
                                <div style={{ backgroundColor: "#f16622" }}>
                                  <button
                                    className="mb-0  px-2 increment-decrement-btn"
                                    onClick={() =>
                                      dispatch(addToCart(cartItems[item]))
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between mt-2 ">
                              <small className="text-muted border-start ps-2">
                                {cartItems[item].name}
                              </small>
                              <p className="fw-bold mb-0">
                                {" "}
                                ৳ {cartItems[item].price * cartItems[item].qty}
                              </p>
                            </div>
                          </div>
                        ))}
                        <div className="d-flex justify-content-between mx-3 ">
                          <h6 className="fw-bold"> Subtotal</h6>
                          <h6 className="fw-bold"> ৳ {subTotal}</h6>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="d-flex align-items-center"
                        style={{ height: "100%" }}
                      >
                        <div className="text-center text-muted ">
                          <h2 className="mt-5">Empty Cart</h2>
                          <p className="small my-5 mx-5">
                            Get your service done just with few clicks! so what
                            are you waiting for?
                          </p>
                          <div className="empty-cart-icon"></div>
                        </div>
                      </div>
                    )}
                    {Object.keys(cartItems).length > 0 ? (
                      <div
                        className="mx-2"
                        style={{ position: "fixed", bottom: 0 }}
                      >
                        <button
                          className="proceed-btn w-100 mt-5 mb-2"
                          onClick={() => setInfo(true)}
                        >
                          PROCEED TO CHECKOUT
                        </button>
                      </div>
                    ) : (
                      <div className="mx-2">
                        <button
                          className="proceed-btn-disabled w-100 mt-5 mb-2"
                          disabled
                        >
                          PROCEED TO CHECKOUT
                        </button>
                      </div>
                    )}
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        ) : (
          <div>
            <button onClick={closeModal} style={buttonStyles}>
              <img src={close} alt="" />
            </button>
            <div>
              <div className="shadow mt-0  pb-3 pt-4">
                <h5 className="text-center" style={{ fontWeight: 600 }}>
                  {service.name}
                </h5>
              </div>
              <div className="mt-0" style={{ marginLeft: 0 }}>
                <h5 className="text-center fw-bold mb-3 pt-3">
                  {" "}
                  Please note for {service.name}
                </h5>
                <div>
                  <div className="d-flex justify-content-center mb-2">
                    <FontAwesomeIcon
                      icon={faLongArrowAltRight}
                      className="me-2 text-success"
                    />
                    <h6>Hanging Charge 400tk (If applicable)</h6>
                  </div>
                  <div className="d-flex justify-content-center mb-2">
                    <FontAwesomeIcon
                      icon={faLongArrowAltRight}
                      className="me-2 text-success"
                    />
                    <h6>Hanging Charge 400tk (If applicable)</h6>
                  </div>
                  <div className="d-flex justify-content-center mb-2">
                    <FontAwesomeIcon
                      icon={faLongArrowAltRight}
                      className="me-2 text-success"
                    />
                    <h6>Hanging Charge 400tk (If applicable)</h6>
                  </div>
                  <div className="d-flex justify-content-center mb-2">
                    <FontAwesomeIcon
                      icon={faLongArrowAltRight}
                      className="me-2 text-success"
                    />
                    <h6>Hanging Charge 400tk (If applicable)</h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mx-2"
              style={{ position: "fixed", bottom: 10, left: "35%" }}
            >
              <Link to="/checkout">
                <button className="proceed-btn w-100 mt-5 mb-2">
                  OK, I understand, PROCEED TO CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CartModal;
