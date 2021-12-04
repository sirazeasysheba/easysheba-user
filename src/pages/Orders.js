import React from "react";
import {
  Badge,
  Breadcrumb,
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactTable from "../components/ReactTable/ReactTable";

const Orders = () => {
  return (
    <div style={{ marginTop: 100, marginBottom: 50 }}>
      <Container>
        <Breadcrumb className="bread">
          <Breadcrumb.Item>
            {" "}
            <Link
              to="/"
              className="breadcrumb-item text-decoration-none"
              style={{ color: "#333333" }}
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
          <Col md={3} className="service-order-container">
            <div className="service-order-title">
              <h6 className="text-center">Service Orders</h6>
            </div>
          </Col>
          <Col md={9}>
            <div className="ms-5">
              <div className="mt-5">
                {/* <Table className="table-borderless">
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
                        <Badge pill bg="success">
                          Accepted
                        </Badge>
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
                        <Link to="/order-details">
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
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-1 fw-bold">D-563248</p>
                        <Badge pill bg="danger">
                          Cancelled
                        </Badge>
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
                </Table> */}

                <ReactTable />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Orders;
