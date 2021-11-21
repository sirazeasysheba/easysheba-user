import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import icons from "../media/checkout.svg";
import error from "../media/error.svg";
import schedule from "../media/schedule-icon.svg";
import person from "../media/checkout-person-icon.svg";
import home from "../media/checkout-add-address-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import TextField from "../components/UI/TextField";
import { Formik, Form as Form2 } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import DatePickerModal from "../components/UI/DatePickerModal";
const Checkout = () => {
  const validate = Yup.object({
    house: Yup.string().required("House No is required"),
    road: Yup.string().required("Road No is required"),
    block: Yup.string().required("Block No is required"),
    area: Yup.string().required("Area is required"),
    sector: Yup.string().required("Sector is required"),
  });

  //
  const auth = useSelector((state) => state.auth);
  const { name, contactNumber, email } = auth.user;
  const [time, setTime] = useState("7.00");
  const [date, setDate] = useState(format(new Date(), "dd"));
  const [month, setMonth] = useState(format(new Date(), "LLLL"));
  const [year, setYear] = useState(format(new Date(), "yyyy"));
  //Modal
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(item) {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div style={{ marginTop: 55, fontSize: 13 }} className="checkout-container">
      <Container>
        <Row>
          <Col md={7}>
            <div className="mt-5 p-3 shadow-lg d-flex checkout">
              <div>
                <img src={schedule} alt="" className="me-3" />
              </div>
              <div>
                <h5 className="fw-bold">Checkout</h5>
                <p className="mb-2">
                  Expert will arrive at your given address within {time} PM{" "}
                </p>
                <div className="d-flex w-100 justify-content-between ">
                  <h3 className="me-5">
                    {time} <span style={{ fontSize: 14 }}>PM</span>{" "}
                  </h3>
                  <h3 className="me-5">
                    {date}
                    <span style={{ fontSize: 14 }}>
                      {" "}
                      {month}, {year}
                    </span>{" "}
                  </h3>
                  <button className="change-btn" onClick={() => openModal()}>
                    <FontAwesomeIcon icon={faEdit} /> Change
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-3 p-3 shadow-lg d-flex checkout">
              <div>
                <img src={person} alt="" className="me-3" />
              </div>
              <div>
                <h5 className="fw-bold">Contact Person</h5>
                <p>Expert will contact with the following person </p>
                <div className="d-flex w-100 justify-content-between ">
                  <h6 className="me-5 fw-bold">{name}</h6>
                  <h6 className="me-5 fw-bold">{contactNumber}</h6>
                  <h6 className="me-5 fw-bold">{email}</h6>
                  {/* <button className="change-btn">
                    <FontAwesomeIcon icon={faEdit} /> Change
                  </button> */}
                </div>
              </div>
            </div>
            <div className="checkout-address-container p-3 shadow-lg d-flex mb-5">
              <div>
                <img src={home} alt="" className="me-3" />
              </div>
              <div>
                <h6 className="fw-bold">Address</h6>
                <p className="text-muted">
                  Expert will arrive at the address given below
                </p>
                <Container>
                  <Formik
                    initialValues={{
                      house: "",
                      road: "",
                      sector: "",
                      block: "",
                      area: "",
                    }}
                    validationSchema={validate}
                    onSubmit={(values) => {
                      const user = values;
                      console.log(user);
                    }}
                  >
                    {(formik) => (
                      <div className="mb-5 form-wrapper">
                        <div>
                          <Form2>
                            <Row>
                              <Col md={6}>
                                <TextField
                                  label="House No."
                                  type="text"
                                  placeholder="House No"
                                  name="house"
                                />
                              </Col>
                              <Col md={6}>
                                <TextField
                                  label="Road No. / Name"
                                  type="text"
                                  placeholder="Road No. / Name"
                                  name="road"
                                />
                              </Col>
                            </Row>
                            <Row className="mt-3">
                              <Col md={6}>
                                <TextField
                                  label="Block No."
                                  type="text"
                                  placeholder="Block No."
                                  name="block"
                                />
                              </Col>
                              <Col md={6}>
                                <TextField
                                  label="Sector No"
                                  type="text"
                                  placeholder="Sector No"
                                  name="sector"
                                />
                              </Col>
                            </Row>
                            <Row className="mt-3">
                              <TextField
                                label="Area"
                                type="text"
                                placeholder="Gulshan"
                                name="area"
                              />
                            </Row>

                            <div className="mb-3">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                value=""
                                id="flexCheckIndeterminate"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckIndeterminate"
                                style={{ fontSize: 14 }}
                              >
                                Save this adress
                              </label>
                            </div>
                            <button type="submit" className="review-btn">
                              Save
                            </button>
                          </Form2>
                        </div>
                      </div>
                    )}
                  </Formik>
                </Container>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="shadow-lg p-5">
              <h5 className="fw-bold mb-3">Order Summary</h5>

              <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
                <div>
                  <p className="mb-0"> Table & Work Station Ma...</p>
                  <h6 className="text-muted">Wall Mount Home Work St.. x1</h6>
                </div>
                <p>৳ 7500</p>
              </div>
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
              <small className="text-muted d-block">
                *Prices are VAT exclusive
              </small>
              <small className="text-muted">
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
                  <button className="shadow-none add-promo-btn">
                    Add Promo
                  </button>
                </Form.Group>
              </Form>
              <div className="d-flex align-items-center">
                <div className="mb-3 me-3">
                  <img src={icons} alt="" />
                </div>
                <p>Do you want to add any additional notes with your order?</p>
              </div>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    className="shadow-none"
                    placeholder="Type here"
                    rows={3}
                  />
                </Form.Group>
              </Form>
              <small>
                By placing order, I agree to the{" "}
                <Link
                  to="/terms-and-conditions"
                  className="text-decoration-none"
                >
                  terms & conditions
                </Link>{" "}
              </small>

              <Link to="/order-payment">
                <button className="place-order-button mt-3 mb-5">
                  PLACE ORDER
                </button>{" "}
              </Link>
              <div className="d-flex error-section py-2 mb-5">
                <div className="mx-3 ">
                  <img src={error} alt="" />
                </div>
                <p className="mb-0">Please add your address to place order</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <DatePickerModal
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
        subtitle={subtitle}
        time={time}
        setTime={setTime}
        date={date}
        setDate={setDate}
        setYear={setYear}
        setMonth={setMonth}
      />
    </div>
  );
};

export default Checkout;
