import React from "react";
import { Col, Row } from "react-bootstrap";
import { ReactComponent as Logo } from "../../media/icons/footer_logo.svg";
import playStore from "../../media/play-store.png";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer mt-5">
        <Row className="me-2">
          <Col md={4} className="d-flex justify-content-center mt-5">
            <div>
              <div className="d-flex justify-content-center">
                <Logo style={{ height: 50 }} />
              </div>
              <p className="text-white text-center">
                Connect With Our Social Media
              </p>
              <div className="social-media">
                <ul className="list-unstyled d-flex justify-content-center">
                  <li className="social-icons text-center  mx-2 facebook">
                    <a
                      href="https://www.facebook.com/EasyShebaPlatform"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#a5b7d9" }}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li className="social-icons text-center mx-2 youtube">
                    <FontAwesomeIcon icon={faYoutube} />
                  </li>
                  <li className="social-icons text-center mx-2 twitter">
                    <FontAwesomeIcon icon={faInstagram} />
                  </li>
                  <li className="social-icons text-center  mx-2 pinerest">
                    <a
                      href="https://www.linkedin.com/company/31311047/admin/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#a5b7d9" }}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                </ul>
                <div>
                  <h6 className="text-white mb-4 text-center">
                    Download Our App
                  </h6>
                  {/* <p
                  className="text-white mb-4 text-center"
                  style={{ fontSize: 12 }}
                >
                  Tackle your to-do list wherever you are with our mobile app &
                  make your life easy.
                </p> */}
                  <div className="d-flex justify-content-center mb-5">
                    <a
                      href="https://play.google.com/store/apps/details?id=multiplexer.lab.easysheba"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={playStore}
                        alt=""
                        className="image-fluid"
                        style={{ height: 40 }}
                      />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={2} className="footerOnFocus ">
            <h6 className="text-white mb-4 mt-5">OTHER PAGES</h6>
            <li className="d-block mb0 "></li>
            <Link to="/about-digital-learning" className="d-block  mb-2 mt-1">
              About Us
            </Link>
            <Link to="/gallery" className="d-block  mb-2">
              Blog
            </Link>
            <Link to="#courses" className="d-block  mb-2">
              Help
            </Link>
            <Link to="/success-stories" className="d-block  mb-2">
              Terms and Conditions
            </Link>
            <Link to="/contact" className="d-block  mb-2">
              Privacy and Policies
            </Link>
          </Col>
          <Col md={2} className="footerOnFocus d-flex justify-content-around">
            <div className="">
              <h6 className="text-white mb-4 mt-5">COMPANIES</h6>
              <li className="d-block mb0 "></li>
              <Link
                to="/courses/web-development"
                className="d-block  mb-2 mt-1"
              >
                Digital Learning XYZ
              </Link>
              <Link to="/courses/graphic-design" className="d-block  mb-2">
                Agriona Food Ltd
              </Link>
              <Link to="/courses/digital-marketing" className="d-block  mb-2">
                Bhidu Agro Ltd
              </Link>
            </div>
          </Col>
          <Col
            md={4}
            className="mt-5 mb-2 footer-address d-flex justify-content-around"
          >
            <div className="address">
              <h6 className="text-white mb-4">CONTACT US</h6>

              <div className="d-flex footer-info">
                <div className="address-icon text-center me-2">
                  <FontAwesomeIcon icon={faPhone} className="fa-rotate-90" />
                </div>
                <p>01966-050506</p>
              </div>
              <div className="d-flex  footer-info" style={{ marginTop: -8 }}>
                <div className="address-icon text-center me-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <p>info@easysheba.com</p>
              </div>
              <div className="d-flex footer-info" style={{ marginTop: -8 }}>
                <div className="address-icon text-center me-2">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    style={{ fontSize: 16 }}
                  />
                </div>

                <p>
                  Assure M N Tower, Flat B1, <br /> House H/1, North-South Road,
                  Block- H, <br /> Aftabnagar, Dhaka-1212
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div
        className="text-center bg-secondary fw-medium"
        style={{ marginBottom: -16 }}
      >
        <p style={{ fontSize: 12, color: "#fff" }} className="p-4">
          Copyright @{new Date().getFullYear()} EasySheba Platform Limited | All
          Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
