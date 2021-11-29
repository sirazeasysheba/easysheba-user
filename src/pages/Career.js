import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import key from "../media/ic_key.svg";
import smile from "../media/ic_smile.svg";
import pin from "../media/ic_pin.svg";
import symbol from "../media/ic_symbol.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import ServiceManModal from "../components/UI/ServiceManModal";

const Career = () => {
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div style={{ marginTop: 100, marginBottom: 50 }}>
      <Container>
        <div className="mx-5">
          <h5>Careers</h5>
          <h2 className="fw-bold">
            Use your unique powers to accelerate the future of service providing
          </h2>
          <p className="mt-5" style={{ fontSize: 13, fontWeight: 500 }}>
            Why EasySheba? We’re a talented (and friendly!) team with a mission
            to make services accessible and delightful for everyone — it’s at
            the heart of everything we do.
          </p>
          <p className="mt-4" style={{ fontSize: 13, fontWeight: 500 }}>
            As a service proving company, we thrive on audacious goals that push
            us to think differently; solve problems by approaching them from
            diverse perspectives; and fuel company growth by working hard and
            enjoying the time we spend together.
          </p>
          <div className="d-flex justify-content-between me-5">
            <a href="#positions">
              <button className="mt-3 mb-5 primary-btn">
                View Open Positions
              </button>
            </a>
            <button className="mt-3 mb-5 primary-btn" onClick={openModal}>
              Want to be a service man?{" "}
            </button>
          </div>
        </div>
        <div style={{ fontSize: 13, color: "#676e8b", fontWeight: 500 }}>
          <h3 className="text-center text-dark mt-5">Our Values</h3>
          <p className="text-center">
            We work hard to create a place where people can do the best work of
            their careers.
          </p>
          <div className="my-5">
            <Row>
              <Col md={4}>
                <div className="ms-3">
                  <img src={key} alt="" style={{ height: 60 }} />
                  <h5 className="fw-bold mt-3 text-dark mb-4">
                    Make your work count
                  </h5>
                  <div className="d-flex">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "green" }}
                      className="mt-1 me-2"
                    />
                    <p>Champion the mission.</p>
                  </div>
                  <div className="d-flex">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "green" }}
                      className="mt-1 me-2"
                    />
                    <p>Share your opinion and influence decisions.</p>
                  </div>
                  <div className="d-flex">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "green" }}
                      className="mt-1 me-2"
                    />
                    <p>Be resourceful to accomplish goals.</p>
                  </div>
                  <div className="d-flex">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "green" }}
                      className="mt-1 me-2"
                    />
                    <p>Let your curiosity lead you to new experiments.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="ms-3">
                  <img src={smile} alt="" style={{ height: 60 }} />
                  <h5 className="fw-bold mt-3 text-dark mb-4">
                    Be a great teammate
                  </h5>
                  <div className="d-flex">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "green" }}
                      className="mt-1 me-2"
                    />
                    <p>Listen fully and communicate honestly.</p>
                  </div>
                  <div className="d-flex">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "green" }}
                      className="mt-1 me-2"
                    />
                    <p>Support your teammates and win as a team.</p>
                  </div>
                  <div className="d-flex">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "green" }}
                      className="mt-1 me-2"
                    />
                    <p>Use diverse perspectives to create better solutions.</p>
                  </div>
                  <div className="d-flex">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "green" }}
                      className="mt-1 me-2"
                    />
                    <p className="mb-1">
                      Advocate inclusivity, belonging, and equality.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="ms-3">
                  <img src={pin} alt="" style={{ height: 60 }} />
                  <h5 className="fw-bold mt-3 text-dark mb-4">
                    Embrace the journey
                  </h5>
                  <div className="d-flex">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "green" }}
                      className="mt-1 me-2"
                    />
                    <p>Ask for help and get better every day.</p>
                  </div>
                  <div className="d-flex">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "green" }}
                      className="mt-1 me-2"
                    />
                    <p>Learn from mistakes; they’re healthy.</p>
                  </div>
                  <div className="d-flex">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "green" }}
                      className="mt-1 me-2"
                    />
                    <p>Use diverse perspectives to create better solutions.</p>
                  </div>
                  <div className="d-flex">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "green" }}
                      className="mt-1 me-2"
                    />
                    <p className="mb-1">
                      Be kind, be empathetic, and enjoy each day.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div id="positions" className="mt-5">
          <h3 className="text-center mb-5">Open Positions</h3>
          <Row>
            <Col md={3}>
              <div className="d-flex justify-content-center mb-3">
                <img src={symbol} alt="" style={{ height: 60 }} />
              </div>
              <h5 className="fw-bold mb-3" style={{ maxWidth: 300 }}>
                Executives, Sales and Marketing
              </h5>
              <p style={{ fontSize: 13, color: "#676e8b", fontWeight: 500 }}>
                Ensure regular client visit & follow up visit
              </p>
              <div className="d-flex justify-content-between me-5">
                <button className="mt-3 mb-5 primary-btn">View Details</button>

                <button className="mt-3 mb-5 primary-btn  px-4">Apply</button>
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex justify-content-center mb-3">
                <img src={symbol} alt="" style={{ height: 60 }} />
              </div>
              <h5 className="fw-bold mb-3" style={{ maxWidth: 300 }}>
                Executives, Sales and Marketing
              </h5>
              <p style={{ fontSize: 13, color: "#676e8b", fontWeight: 500 }}>
                Ensure regular client visit & follow up visit
              </p>
              <div className="d-flex justify-content-between me-5">
                <button className="mt-3 mb-5 primary-btn">View Details</button>

                <button className="mt-3 mb-5 primary-btn  px-4">Apply</button>
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex justify-content-center mb-3">
                <img src={symbol} alt="" style={{ height: 60 }} />
              </div>
              <h5 className="fw-bold mb-3" style={{ maxWidth: 300 }}>
                Executives, Sales and Marketing
              </h5>
              <p style={{ fontSize: 13, color: "#676e8b", fontWeight: 500 }}>
                Ensure regular client visit & follow up visit
              </p>
              <div className="d-flex justify-content-between me-5">
                <button className="mt-3 mb-5 primary-btn">View Details</button>

                <button className="mt-3 mb-5 primary-btn  px-4">Apply</button>
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex justify-content-center mb-3">
                <img src={symbol} alt="" style={{ height: 60 }} />
              </div>
              <h5 className="fw-bold mb-3" style={{ maxWidth: 300 }}>
                Executives, Sales and Marketing
              </h5>
              <p style={{ fontSize: 13, color: "#676e8b", fontWeight: 500 }}>
                Ensure regular client visit & follow up visit
              </p>
              <div className="d-flex justify-content-between me-5">
                <button className="mt-3 mb-5 primary-btn">View Details</button>

                <button className="mt-3 mb-5 primary-btn  px-4">Apply</button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <ServiceManModal modalIsOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default Career;
