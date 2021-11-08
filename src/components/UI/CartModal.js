import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Modal from "react-modal";
import close from "../../media/x-converted.png";
import { ReactComponent as Close } from "../../media/x.svg";
const customStyles = {
  content: {
    top: "35%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "1000px",
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
};
Modal.setAppElement("#root");
const CartModal = ({ modalIsOpen, closeModal }) => {
  const [unitButton, setUnitButton] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const price = 1780;

  const handleDecrement = () => {
    if (quantity <= 1) {
      setUnitButton(false);
    } else {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className=" cart-modal">
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <button onClick={closeModal} style={buttonStyles}>
            <img src={close} alt="" />
          </button>
          <div>
            <div className="shadow mt-0 py-3">
              <h5 className="text-center fw-bold">Ac Servicing</h5>
            </div>
            <Container>
              <Row>
                <Col md={7} className="px-0">
                  <div
                    className="py-3 px-0"
                    style={{ backgroundColor: "#f5f5f8", marginLeft: 0 }}
                  >
                    <h6 className="text-center">3 Options Available</h6>
                  </div>
                  <div className="mx-5 my-3">
                    <p>Select Ton of your AC -</p>
                  </div>
                  <div className="d-flex justify-content-between mx-5 border-bottom">
                    <div>
                      <p className="mb-1 fw-bold">1 - 1.5 Ton</p>
                      <p className="fw-bold text-success">
                        ৳ 500 /{" "}
                        <span
                          className="text-muted"
                          style={{ fontSize: 12, fontWeight: 200 }}
                        >
                          unit
                        </span>
                      </p>
                    </div>
                    <div>
                      {unitButton ? (
                        <div className="quantity-section d-flex justify-content-between align-items-center">
                          <div style={{ backgroundColor: "red" }}>
                            <button
                              className="mb-0 px-2 increment-decrement-btn"
                              onClick={handleDecrement}
                            >
                              -
                            </button>
                          </div>
                          <p className="mb-0">
                            {quantity}
                            <span
                              className="text-muted ms-1"
                              style={{ fontSize: 12, fontWeight: 200 }}
                            >
                              unit
                            </span>
                          </p>
                          <div style={{ backgroundColor: "red" }}>
                            <button
                              className="mb-0  px-2 increment-decrement-btn"
                              onClick={handleIncrement}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          className="primary-btn px-3 py-1 mt-2"
                          onClick={() => setUnitButton(true)}
                        >
                          Add +{" "}
                        </button>
                      )}
                    </div>
                  </div>
                </Col>
                <Col
                  md={5}
                  className="px-0"
                  style={{ backgroundColor: "#f5f5f8", marginLeft: 0 }}
                >
                  <h3>Cart</h3>
                  <h3>Cart</h3>
                  <h3>Cart</h3>
                  <h3>Cart</h3>
                  <h3>Cart</h3>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CartModal;
