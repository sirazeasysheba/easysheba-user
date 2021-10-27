import { faPhoneAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Breadcrumb,
  Col,
  Container,
  Form,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../media/1619427700_acservicing.jpg";
import MenuHeader from "../components/Layout/MenuHeader";
const ProductDetails = () => {
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
                    <FontAwesomeIcon icon={faStar} /> 4.88
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
                    <FontAwesomeIcon icon={faStar} /> 4.88
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
                      <s className="me-2">৳ 500.00</s> ৳ 400.00
                    </p>

                    <Form.Group controlId="formFileMultiple">
                      <input
                        type="submit"
                        className="request-btn"
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
          <Col md={7}>
            <Row className="mt-3">
              <Tab.Container id="left-tabs-example" defaultActiveKey="details">
                <Row>
                  <Nav variant="pills">
                    <Row className="w-100 mx-2 mb-3">
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
                      <div className="mt-4">
                        <h5 className="fw-bold">
                          This course will highlight on:{" "}
                        </h5>
                        <ul
                          className="list-unstyled text-muted"
                          style={{ fontSize: 14 }}
                        >
                          {/* {highlightList?.map((li) => (
                          <li className="mt-1">
                            <FontAwesomeIcon
                              icon={faFileInvoice}
                              style={{ color: "#02863A" }}
                            />{" "}
                            {li}
                          </li>
                        ))} */}
                        </ul>
                      </div>
                      <div>
                        <h5 className="fw-bold">Software & Tools Taught</h5>
                        <ul
                          className="list-unstyled text-muted"
                          style={{ fontSize: 14 }}
                        >
                          {/* {softwareList?.map((li) => (
                          <li className="mt-1">
                            <FontAwesomeIcon
                              icon={faFileInvoice}
                              style={{ color: "#02863A" }}
                            />{" "}
                            {li}
                          </li>
                        ))} */}
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="additional-information">
                      <div className="mt-3">
                        <h3> COURSE MODULE</h3>
                        <ul
                          className="list-unstyled text-muted"
                          style={{ fontSize: 14 }}
                        >
                          {/* {moduleList?.map((li) => (
                          <li className="mt-1">
                            <FontAwesomeIcon
                              icon={faFileInvoice}
                              style={{ color: "#02863A" }}
                            />{" "}
                            {li}
                          </li>
                        ))} */}
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="reviews">
                      <div className="mt-3">
                        <h3>
                          After completing the course student will be able to:{" "}
                        </h3>
                        <ul
                          className="list-unstyled text-muted"
                          style={{ fontSize: 14 }}
                        >
                          {/* {objectiveList?.map((li) => (
                          <li className="mt-1">
                            <FontAwesomeIcon
                              icon={faHandPointRight}
                              style={{ color: "#02863A" }}
                            />{" "}
                            {li}
                          </li>
                        ))} */}
                        </ul>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Row>
              </Tab.Container>
            </Row>
          </Col>
          <Col md={5}>
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
