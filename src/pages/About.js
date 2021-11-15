import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import easy from "../media/banner (6).jpg";
const About = () => {
  return (
    <div style={{ marginTop: 100, marginBottom: 50 }}>
      <Container>
        <Row>
          <Col md={4}>
            <h1>About Us</h1>
            <div
              style={{ width: 400, textAlign: "justify", fontSize: 13 }}
              className="text-justify text-dark mt-4"
            >
              <p>
                ‘EasySheba’ is the fastest platform to reach a one-stop solution
                to sort all your corporate and home services requirements
                ranging from construction to maintenance. We provide the service
                needs that you come across in everyday life. We are always here
                to serve quickly, professionally & conveniently. Our every
                single service expert is verified and an expert in what they do;
                we approach our work with dedication, keen attention to detail,
                and a quality standard driven by our RISE and SHINE mission that
                leads to best-in-class results.
              </p>
              <button
                className="view-details-btn fw-bold border-bottom"
                style={{ fontSize: 14 }}
              >
                Learn More
              </button>
            </div>
          </Col>
          <Col md={8}>
            <div className="ms-5">
              <img src={easy} alt="" style={{ width: "100%", height: 400 }} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
