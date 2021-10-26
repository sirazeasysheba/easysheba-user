import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../media/1619427700_acservicing.jpg";
const ProductDetails = () => {
  return (
    <div style={{ marginTop: 57, height: 400 }} className="details">
      <Container>
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
        <div className="text-white fw-bold">
          <h1 className="fw-bold">AC Servicing</h1>
          <h3 className="fw-bold">৳ 400.00 – ৳ 7,800.00</h3>
          <h5 className="mt-5 fw-bold">Why take service from us?</h5>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
