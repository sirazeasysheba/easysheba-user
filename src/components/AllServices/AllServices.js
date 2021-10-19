import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import ServiceCart from "../Layout/ServiceCart";
import { Link } from "react-router-dom";
const AllServices = () => {
  return (
    <div className="All-services my-5">
      <Container>
        <Row>
          <Col md={3} className="service-title">
            <h3 className="fw-bold mb-3">All Services</h3>
            <div className="services">
              <ul className="list-unstyled">
                <a href="#1">
                  {" "}
                  <li>Painting and Renovation</li>
                </a>
                <a href="#2">
                  {" "}
                  <li>Appliance Repair</li>
                </a>
              </ul>
            </div>
          </Col>
          <Col md={9} className="mt-5">
            <div className="service-details ms-2" id="#1">
              <h5 className="fw-bold mb-3"> Painting and Renovation</h5>
              <ServiceCart />
              <ServiceCart />
              <ServiceCart />
              <ServiceCart />
            </div>
            <div className="service-details ms-2" id="2">
              <h5 className="fw-bold mb-3"> Appliance Repair</h5>
              <ServiceCart />
              <ServiceCart />
              <ServiceCart />
              <ServiceCart />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AllServices;
