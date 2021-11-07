import {
  faPhoneAlt,
  faStar as faStar2,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import review from "../media/reviewer.svg";
import * as Yup from "yup";
import React, { useState } from "react";
import {
  Breadcrumb,
  Col,
  Container,
  Nav,
  Row,
  Tab,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../media/1619427700_acservicing.jpg";
import MenuHeader from "../components/Layout/MenuHeader";
import TextField from "../components/UI/TextField";
import { Formik, Form as Form2 } from "formik";

const ProductDetails = () => {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const validate = Yup.object({
    email: Yup.string().email("Email is Invalid").required("Email is required"),
    name: Yup.string().required("Name is required"),
  });
  return (
    <div div style={{ marginTop: 57 }}>
      <MenuHeader />
      <div className="details">
        <Container>
          <Row>
            <Col md={7}>
              <div className="pt-5">
                <Breadcrumb>
                  <Breadcrumb.Item>
                    {" "}
                    <Link
                      to="/"
                      className="breadcrumb-item text-decoration-none"
                      style={{ color: "#CDCECF" }}
                    >
                      Home
                    </Link>{" "}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    {" "}
                    <Link
                      to="/ac-repair"
                      className="breadcrumb-item text-decoration-none"
                      style={{ color: "#CDCECF" }}
                    >
                      AC Repair Services
                    </Link>{" "}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active className="text-white">
                    {" "}
                    AC Services
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="text-white mb-5">
                <h1 className="fw-bold">AC Servicing</h1>
                <h3 className="fw-bold">৳ 400.00 – ৳ 7,800.00</h3>
                <h5 className="mt-5 fw-medium">Why take service from us?</h5>
                <div
                  className="d-flex align-items-center"
                  style={{
                    backgroundColor: "#006597",
                    width: "160px",
                    borderRadius: 10,
                  }}
                >
                  <h5 className="me-2 ps-2 pt-2 fw-bold">
                    <FontAwesomeIcon icon={faStar2} /> 4.88
                  </h5>
                  <h6 className="pt-2"> out of 5</h6>
                </div>
                <small>(33 ratings on 1 services)</small>
                <div className="mt-3">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{ color: "#17a2b8" }}
                  />{" "}
                  <small>
                    {" "}
                    Expert professionals
                    {/* <span style={{ fontWeight: "100" }}>Expert professionals</span> */}
                  </small>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{ color: "#17a2b8" }}
                  />{" "}
                  <small>
                    {" "}
                    100% Customer satisfaction
                    {/* <span style={{ fontWeight: "100" }}>Expert professionals</span> */}
                  </small>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{ color: "#17a2b8" }}
                  />{" "}
                  <small>
                    {" "}
                    Fully equipped
                    {/* <span style={{ fontWeight: "100" }}>Expert professionals</span> */}
                  </small>
                </div>
              </div>
            </Col>

            <Col md={5}>
              <div className="details-form shadow mb-3">
                <h3 className="fw-bold">AC Repairing</h3>
                <div
                  className="d-flex align-items-center"
                  style={{
                    backgroundColor: "#006597",
                    width: "160px",
                    borderRadius: 10,
                  }}
                >
                  <h5
                    className="me-2 ps-2 pt-2 fw-bold"
                    style={{ fontSize: 16 }}
                  >
                    <FontAwesomeIcon icon={faStar2} /> 4.88
                  </h5>
                  <h6 className="pt-2" style={{ fontSize: 12 }}>
                    {" "}
                    out of 5
                  </h6>
                </div>

                <Form className="mt-3" style={{ fontSize: 12 }}>
                  <Row>
                    <Col>
                      <p>Choose Service </p>
                    </Col>
                    <Col>
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                      >
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>Choose Ton Of Your AC </p>
                    </Col>
                    <Col>
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                      >
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>Choose Unit</p>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="number"
                          min="1"
                          className="form-control-sm"
                        />
                      </Form.Group>
                    </Col>
                    <p>
                      {" "}
                      <s
                        className="me-2"
                        style={{ fontSize: 16, fontWeight: 500 }}
                      >
                        ৳ 500.00
                      </s>{" "}
                      ৳ 400.00
                    </p>

                    <Form.Group
                      controlId="formFileMultiple"
                      style={{ fontSize: 12 }}
                    >
                      <input
                        type="submit"
                        className="review-btn"
                        value="Add to Cart"
                      />
                    </Form.Group>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col md={8}>
            <Row className="mt-3 tab-container">
              <Tab.Container id="left-tabs-example" defaultActiveKey="details">
                <Row>
                  <Nav variant="pills">
                    <Row className="w-100 mx-2 mb-3 border-bottom">
                      <Col md={3} className="px-0">
                        <Nav.Item className="active-toggle-btn">
                          <Nav.Link
                            eventKey="details"
                            className="tab-links py-3"
                          >
                            Details
                          </Nav.Link>
                        </Nav.Item>{" "}
                      </Col>
                      <Col md={6} className="px-0">
                        {" "}
                        <Nav.Item className="active-toggle-btn">
                          <Nav.Link
                            eventKey="additional-information"
                            className="tab-links py-3"
                          >
                            Additional Information
                          </Nav.Link>
                        </Nav.Item>{" "}
                      </Col>
                      <Col md={3} className="px-0">
                        <Nav.Item className="active-toggle-btn">
                          <Nav.Link
                            eventKey="reviews"
                            className="tab-links py-3"
                          >
                            Reviews
                          </Nav.Link>
                        </Nav.Item>
                      </Col>
                    </Row>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="details">
                      <div className="mt-4"></div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="additional-information">
                      <div className="mt-3"></div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="reviews">
                      <div className="mt-3">
                        <Row>
                          <Col md={6}>
                            <h5>Rating From Customers</h5>
                            <h1 className=" ms-5 mt-4" style={{ fontSize: 60 }}>
                              4.50
                            </h1>
                            <div
                              className=""
                              style={{ marginLeft: 67, color: "#ecd115" }}
                            >
                              <FontAwesomeIcon icon={faStar2} />
                              <FontAwesomeIcon icon={faStar2} />
                              <FontAwesomeIcon icon={faStar2} />
                              <FontAwesomeIcon icon={faStar2} />
                              <FontAwesomeIcon icon={faStarHalfAlt} />
                            </div>
                            <small
                              className="text-muted"
                              style={{ marginLeft: 42, fontSize: 11 }}
                            >
                              61 reviews and 808 ratings
                            </small>

                            {/* Skills */}
                            <div className="Skills mt-3">
                              <div className="skills-containers">
                                <div className="skill-bar d-flex ">
                                  <p className="skill-text">5</p>
                                  <div className="skill-progress">
                                    <div className="progress">
                                      <div
                                        className="inner-progress"
                                        style={{
                                          width: "80%",
                                          backgroundColor: "#3ea05c",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="Skills">
                              <div className="skills-containers">
                                <div className="skill-bar d-flex ">
                                  <p className="skill-text">4</p>
                                  <div className="skill-progress">
                                    <div className="progress">
                                      <div
                                        className="inner-progress"
                                        style={{
                                          width: "15%",
                                          backgroundColor: "#a9d363",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="Skills">
                              <div className="skills-containers">
                                <div className="skill-bar d-flex ">
                                  <p className="skill-text">3</p>
                                  <div className="skill-progress">
                                    <div className="progress">
                                      <div
                                        className="inner-progress"
                                        style={{
                                          width: "15%",
                                          backgroundColor: "#e1d53b",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="Skills">
                              <div className="skills-containers">
                                <div className="skill-bar d-flex ">
                                  <p className="skill-text">2</p>
                                  <div className="skill-progress">
                                    <div className="progress">
                                      <div
                                        className="inner-progress"
                                        style={{
                                          width: "5%",
                                          backgroundColor: "#d68639",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="Skills">
                              <div className="skills-containers">
                                <div className="skill-bar d-flex ">
                                  <p className="skill-text me-1">1</p>
                                  <div className="skill-progress">
                                    <div className="progress">
                                      <div
                                        className="inner-progress"
                                        style={{
                                          width: "10%",
                                          backgroundColor: "#b62d3b",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="review mt-3">
                              <h5 className="mb-3">Review From Customers</h5>
                              <div className="d-flex">
                                <div>
                                  <img
                                    src={review}
                                    alt=""
                                    style={{ maxWidth: 40, marginRight: 10 }}
                                  />
                                </div>
                                <div style={{ fontSize: 12 }}>
                                  <h6 className="fw-bold">H M Arifur Rahman</h6>
                                  <div
                                    className="ms-5 mb-1"
                                    style={{ color: "#ecd115", fontSize: 12 }}
                                  >
                                    <FontAwesomeIcon icon={faStar2} />
                                    <FontAwesomeIcon icon={faStar2} />
                                    <FontAwesomeIcon icon={faStar2} />
                                    <FontAwesomeIcon icon={faStar2} />
                                    <FontAwesomeIcon icon={faStar2} />
                                  </div>
                                  <p>
                                    {" "}
                                    <span className="text-muted">
                                      Taken on
                                    </span>{" "}
                                    <span className="fw-bold">
                                      27 October, 2021
                                    </span>
                                  </p>
                                  <p>
                                    Mr X give us excellent service and he is
                                    also well mannered. Thanks.
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex">
                                <div>
                                  <img
                                    src={review}
                                    alt=""
                                    style={{ maxWidth: 40, marginRight: 10 }}
                                  />
                                </div>
                                <div style={{ fontSize: 12 }}>
                                  <h6 className="fw-bold">Afsana Jahan Nipa</h6>
                                  <div
                                    className="ms-5 mb-1"
                                    style={{ color: "#ecd115", fontSize: 12 }}
                                  >
                                    <FontAwesomeIcon icon={faStar2} />
                                    <FontAwesomeIcon icon={faStar2} />
                                    <FontAwesomeIcon icon={faStar2} />
                                    <FontAwesomeIcon icon={faStar2} />
                                    <FontAwesomeIcon icon={faStar2} />
                                  </div>
                                  <p>
                                    <span className="text-muted">
                                      Taken on{" "}
                                    </span>
                                    <span className="fw-bold">
                                      12 October, 2021
                                    </span>
                                  </p>
                                  <p>
                                    The professionals are very skilled, on time,
                                    and very sincere in their work. Always
                                    recommend EasySheba!
                                  </p>
                                </div>
                              </div>
                              <button className="review-all-btn">
                                View All Reviews
                              </button>
                            </div>
                          </Col>
                          <Col md={6}>
                            <h5 className="fw-bold mb-3">
                              Review & Rate Our Service
                            </h5>
                            <p style={{ fontSize: 13 }}>
                              Your email address will not be published. Required
                              fields are marked{" "}
                              <span className="text-danger">*</span>
                            </p>
                            <div className="d-flex">
                              <p className="fw-bold">Rate: </p>
                              <div className="ms-2 mb-1">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                              </div>
                            </div>
                            <Formik
                              initialValues={{
                                name: "",
                                email: "",
                              }}
                              validationSchema={validate}
                              onSubmit={(values) => {
                                const user = values;

                                user.comment = comment;
                                console.log(user);
                              }}
                            >
                              {(formik) => (
                                <div className="mb-5 form-wrapper">
                                  <div>
                                    <div

                                    // style={{ width: "300px" }}
                                    >
                                      <Form2>
                                        <Form.Group
                                          className="mb-3 fw-bold"
                                          controlId="exampleForm.ControlTextarea1"
                                        >
                                          <Form.Label>
                                            Your Comment{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </Form.Label>
                                          <Form.Control
                                            as="textarea"
                                            rows={3}
                                            onChange={(e) =>
                                              setComment(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                        <TextField
                                          label="Name"
                                          type="text"
                                          placeholder="Your Name"
                                          name="name"
                                        />
                                        <TextField
                                          label="Email"
                                          type="email"
                                          placeholder="Your email"
                                          name="email"
                                        />
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
                                            Save my name, email, and website in
                                            this browser for the next time I
                                            comment.
                                          </label>
                                        </div>
                                        <button
                                          type="submit"
                                          className="review-btn"
                                        >
                                          Submit
                                        </button>
                                      </Form2>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Formik>
                          </Col>
                        </Row>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Row>
              </Tab.Container>
            </Row>
          </Col>
          <Col md={4}>
            <div className="have-questions-section">
              <h5>Have many questions in your head?</h5>
              <h6>We are ready to help you.....</h6>
              <div className="d-flex align-items-center mt-3">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="me-2 mb-1 "
                  style={{ fontSize: 30 }}
                />
                <h2>01966050506</h2>
              </div>
            </div>
            <div className=" mb-5">
              <h5>You may also like</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
