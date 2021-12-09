import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import close from "../../media/x-converted.png";
import { addToCart, removeCartItem } from "../../redux/actions";
import { ToastContainer, toast } from "react-toastify";
Modal.setAppElement("#root");

//function

const CartModal = ({
  modalIsOpen,
  closeModal,
  afterOpenModal,
  productByService,
  service,
}) => {
  const [info, setInfo] = useState(false);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const allServices = useSelector((state) => state.service);
  const [cartItems, setCartItems] = useState(cart.cartItems);

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

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

  return (
    <div className="d-flex justify-content-center">
      <Modal
        isOpen={modalIsOpen}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Example Modal"
        afterOpenModal={afterOpenModal}
      >
        {!info ? (
          <div>
            <button onClick={closeModal} className="close-btn">
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
                          <div>
                            {product.info && (
                              <ul>
                                {product.info.split(".").map((i, index) => (
                                  <li style={{ fontSize: 10 }}>{i}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                          <p className="fw-bold text-success mb-0">
                            ৳ {product.price.toLocaleString()} /{" "}
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
                          <div className="mx-3 mb-3" key={item}>
                            {/* {JSON.stringify(item)} */}
                            <div className="d-flex justify-content-between">
                              {cartItems[item].service.name ? (
                                <h6> {cartItems[item].service.name}</h6>
                              ) : (
                                <h6> {getService(cartItems[item].service)}</h6>
                              )}

                              <div className="quantity-section d-flex justify-content-between align-items-center">
                                <div style={{ backgroundColor: "#f16622" }}>
                                  <button
                                    className="mb-0 px-2 increment-decrement-btn"
                                    onClick={() =>
                                      onQuantityDecrement(cartItems[item])
                                    }
                                  >
                                    -
                                  </button>
                                  <ToastContainer />
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
                                      dispatch(addToCart(cartItems[item], 1))
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
                                ৳{" "}
                                {(
                                  cartItems[item].price * cartItems[item].qty
                                ).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        ))}
                        <div className="d-flex justify-content-between mx-3 ">
                          <h6 className="fw-bold"> Subtotal</h6>
                          <h6 className="fw-bold">
                            {" "}
                            ৳ ৳{" "}
                            {Object.keys(cart.cartItems)
                              .reduce((totalPrice, index) => {
                                const { qty, price } = cart.cartItems[index];
                                return totalPrice + price * qty;
                              }, 0)
                              .toLocaleString()}
                          </h6>
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
                        style={{ position: "fixed", width: 400 }}
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
          <div className="lol-modal">
            <button onClick={closeModal} className="close-btn">
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
                <div className="d-flex justify-content-center">
                  <div>
                    {service?.notes?.split(".").map((note, index) => (
                      <div className="d-flex mb-2" key={index}>
                        <FontAwesomeIcon
                          icon={faLongArrowAltRight}
                          className="me-2 text-success"
                        />
                        <h6>{note}</h6>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mx-2 d-flex justify-content-center"
              style={{ position: "fixed", bottom: 100 }}
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
