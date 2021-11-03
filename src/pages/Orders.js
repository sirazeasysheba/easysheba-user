import { faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import demo from "../media/ac.jpg";
import {
  Breadcrumb,
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div style={{ marginTop: 100, marginBottom: 50 }}>
      <Container>
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

          <Breadcrumb.Item active className="text-dark fw-bold">
            {" "}
            Orders
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col md={3} className="border-right"></Col>
          <Col md={9}>
            <div>
              <div className="d-flex">
                <div className="order-search-box-container border rounded me-5">
                  <Form className="d-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="ms-2 order-search-box-icon"
                    />
                    <FormControl
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      className="search-order me-2 shadow-none"
                    />
                  </Form>
                </div>
                <Form className="order-select-form">
                  <Form.Select>
                    <option selected>All</option>
                    <option value="1">Served</option>
                    <option value="2">Not Responded</option>
                    <option value="3">Pending</option>
                    <option value="4">Schedule Due</option>
                    <option value="5">Payment Due</option>
                    <option value="6">Accepted</option>
                    <option value="7">Serve Due</option>
                    <option value="8">Declined Due</option>
                    <option value="9">Canceled</option>
                  </Form.Select>
                </Form>
              </div>
              <div className="mt-5">
                <Table className="table-borderless">
                  <thead
                    style={{
                      backgroundColor: "rgba(18,15,46,.04)",
                    }}
                  >
                    <tr>
                      <th>ID</th>
                      <th>Service</th>
                      <th>Schedule</th>
                      <th>Price </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p className="mb-1 fw-bold">D-563248</p>
                        <small>Accepted</small>
                      </td>
                      <td className="d-flex">
                        <img
                          src={demo}
                          alt=""
                          style={{ height: 40, borderRadius: 5 }}
                        />
                        <p className="ms-3 fw-bold mt-2">AC Servicing</p>
                      </td>
                      <td>
                        {" "}
                        10:00 PM, <br /> 03/11/2021
                      </td>
                      <td className="d-flex mt-0 pt-0">
                        <div style={{ width: 80, fontWeight: 700 }}>৳1,780</div>
                        <button
                          className="view-details-btn fw-bold"
                          style={{ fontSize: 13 }}
                        >
                          Details{" "}
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="ms-1 pt-2 fw-bold"
                            style={{ color: "#f16622", fontSize: 20 }}
                          />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-1 fw-bold">D-563248</p>
                        <small>Accepted</small>
                      </td>
                      <td className="d-flex">
                        <img
                          src={demo}
                          alt=""
                          style={{ height: 40, borderRadius: 5 }}
                        />
                        <p className="ms-3 fw-bold mt-2">AC Servicing</p>
                      </td>
                      <td>
                        {" "}
                        10:00 PM, <br /> 03/11/2021
                      </td>
                      <td className="d-flex mt-0 pt-0">
                        <div style={{ width: 80, fontWeight: 700 }}>৳1,780</div>
                        <button
                          className="view-details-btn fw-bold"
                          style={{ fontSize: 13 }}
                        >
                          Details{" "}
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="ms-1 pt-2 fw-bold"
                            style={{ color: "#f16622", fontSize: 20 }}
                          />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Orders;
