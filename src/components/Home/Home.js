import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import quality from "../../media/quality.svg";
import price from "../../media/price.svg";
import experts from "../../media/experts.svg";
import equppied from "../../media/equppied.svg";
import client from "../../media/client-list.jpg";
import playStore from "../../media/play-store.png";
import app from "../../media/main.png";
import service from "../../media/png-clipart-call-centre-customer (1).png";
import advertise from "../../media/web-banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import ServiceModal from "../UI/ServiceModal";
import BannerSlider from "../BannerSlider/BannerSlider";
import ServiceSlide from "../BannerSlider/ServiceSlide";
import TrendingSlider from "../BannerSlider/TrendingSlider";
import RecommendSlider from "../BannerSlider/RecommendSlider";
import Countdown from "react-countdown";
import up from "../../media/UP-70.svg";
import CategoryModal from "../UI/CategoryModal";
import MyModal from "../UI/VideoModal";

const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleShow = () => setModalShow(true);
  const handleClose = () => {
    setModalShow(false);
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <div className="clock border px-3 py-2">
        <div className="d-flex justify-content-between align-items-center clock-items text-center">
          <div>
            <p className="mb-0">{days}</p>
            <small className="mb-0">Days</small>
          </div>
          <span className="mx-2" style={{ fontSize: 16 }}>
            :
          </span>
          <div>
            <p className="mb-0">{hours}</p>
            <small className="mb-0" style={{ fontSize: 12 }}>
              Hours
            </small>
          </div>
          <span className="mx-2" style={{ fontSize: 16 }}>
            :
          </span>
          <div>
            <p className="mb-0">{minutes}</p>
            <small className="mb-0">Minutes</small>
          </div>
          <span className="mx-2" style={{ fontSize: 16 }}>
            :
          </span>
          <div>
            <p className="mb-0">{seconds}</p>
            <small className="mb-0">Seconds</small>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <img src={up} alt="" style={{ height: 60 }} />
        </button>
      )}
      <div className="choose-section mb-2 pt-5">
        <BannerSlider />
        <div className="my-5">
          <Container>
            <h3 className="text-center fw-bold mb-3">Our Services</h3>
            <div>
              <ServiceSlide
                openModal={openModal}
                afterOpenModal={afterOpenModal}
                closeModal={closeModal}
              />
            </div>
          </Container>
        </div>

        {/* Advertisement */}
        <Container
          className="my-5 clock-container"
          style={{
            backgroundImage: `url(${advertise})`,
            //backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "220px",
            backgroundSize: "contain",
          }}
        >
          <div>
            <Countdown
              date={new Date("2021-12-26T10:05:29.896Z").getTime()}
              renderer={renderer}
            />
          </div>
        </Container>
        {/* Trending */}
        <div className="my-5">
          <Container>
            <h3 className="fw-bold mb-3">Trending</h3>
            <TrendingSlider />
          </Container>
        </div>

        {/* Recommended */}
        <div className="mb-5">
          <Container>
            <h3 className="fw-bold mb-3">Recommended For You</h3>
            <RecommendSlider />
          </Container>
        </div>
        <Container style={{ fontSize: 14 }}>
          <p>Why Choose EasySheba... ?</p>
          <h2 className="fw-bold">Because we care about your comfort...</h2>
          <Row>
            <Col md={3}>
              <div className="shadow text-center mt-5 p-3">
                <img
                  src={quality}
                  alt=""
                  className="image-fluid mx-auto"
                  style={{ height: 150 }}
                />
                <h5 className="fw-bold mb-3">100% Quality Assured</h5>
                <p style={{ minHeight: 63 }}>
                  If you don't love our service, we will make it right.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="shadow text-center mt-5 p-3">
                <img
                  src={price}
                  alt=""
                  className="image-fluid mx-auto"
                  style={{ height: 150 }}
                />
                <h5 className="fw-bold mb-3">Affordable pricing</h5>
                <p style={{ minHeight: 63 }}>
                  See fixed prices before you book. No hidden charges.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="shadow text-center mt-5 p-3">
                <img
                  src={experts}
                  alt=""
                  className="image-fluid mx-auto"
                  style={{ height: 150 }}
                />
                <h5 className="fw-bold mb-3">Experts only</h5>
                <p style={{ minHeight: 63 }}>
                  Our professionals are well trained and have on-job expertise.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="shadow text-center mt-5 p-3">
                <img
                  src={equppied}
                  alt=""
                  className="image-fluid mx-auto"
                  style={{ height: 150 }}
                />
                <h5 className="fw-bold mb-3">Fully equipped</h5>
                <p style={{ minHeight: 63 }}>
                  We bring everything needed to get the job done well.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className="mt-5">
          <Col md={3} className="py-2  text-center">
            <div
              className="py-2 shadow-lg rounded"
              style={{ background: "#f16622" }}
            >
              <h1
                className="mb-0 pb-0 text-white mt-1"
                style={{ lineHeight: 1 }}
              >
                66+
              </h1>
              <h5 className="mt-0 text-white">Services</h5>
            </div>
          </Col>
          <Col md={3} className="py-2 text-center">
            <div className="py-2 rounded" style={{ background: "#f16622" }}>
              <h1
                className="mb-0 pb-0 text-white mt-1"
                style={{ lineHeight: 1 }}
              >
                114+
              </h1>
              <h5 className="mt-0 text-white">Service Men</h5>
            </div>
          </Col>
          <Col md={3} className="py-2 text-center">
            <div className="py-2 rounded" style={{ background: "#f16622" }}>
              <h1
                className="mb-0 pb-0 text-white mt-1"
                style={{ lineHeight: 1 }}
              >
                1100+
              </h1>
              <h5 className="mt-0 text-white">Order Served</h5>
            </div>
          </Col>
          <Col md={3} className="py-2 text-center">
            <div className="py-2 rounded" style={{ background: "#f16622" }}>
              <h1
                className="mb-0 pb-0 text-white mt-1"
                style={{ lineHeight: 1 }}
              >
                500+
              </h1>
              <h5 className="mt-0 text-white">Five Star Ratings</h5>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 text-center">
        <h3 className="mb-3">
          Trusted by 500+ customers for solving their problem
        </h3>
        <img src={client} alt="" style={{ width: "100%" }} />
      </Container>
      <Container style={{ fontSize: 14, marginTop: 60 }}>
        <div className="dash">
          <p className="dash">How it works ?</p>
        </div>
        <h2 className="fw-bold mb-3">Easiest way to get a service</h2>
        <Row>
          <Col md={6}>
            <MyModal />
          </Col>
          <Col md={6}>
            <div className="d-flex mb-3">
              <div>
                <div className="service-number d-flex justify-content-center mt-2 me-3">
                  <p>1</p>
                </div>
              </div>
              <div>
                <h5 className="fw-bold">Choose Any Package </h5>
                <p>
                  Choose and take any package you are searching for from the
                  website or the app
                </p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div>
                <div className="service-number d-flex justify-content-center mt-2 me-3">
                  <p>2</p>
                </div>
              </div>
              <div>
                <h5 className="fw-bold">Confirm </h5>
                <p>
                  Let us know your date and time to avail of the service. Please
                  select the service provider based on their rating.
                </p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className="service-number d-flex justify-content-center mt-2 me-3">
                <p>3</p>
              </div>
              <div>
                <h5 className="fw-bold">Sit Back and Relax </h5>
                <p>It's time to relax. Easy Sheba, Easy Life.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container style={{ fontSize: 14, marginTop: 60 }}>
        <Row>
          <Col md={6}>
            <img src={app} alt="" className="image-fluid" />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div>
              <p>DOWNLOAD OUR APP</p>
              <h3 className="fw-bold my-3">Any Service, Any Time, Anywhere.</h3>
              <p style={{ marginBottom: 30 }}>
                Give us your mobile number. You’ll get an SMS with the app
                download link.
              </p>
              <div className="app-section  my-3">
                <Form className="d-flex mb-3">
                  <Form.Group
                    className="mb-3 app-form"
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Type your mobile number"
                      className="app-form shadow-none"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Button className="app-button shadow-none">
                      Get the app
                    </Button>
                  </Form.Group>
                </Form>
                <div className="mb-5">
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
          </Col>
        </Row>
      </Container>
      <div className="" style={{ backgroundColor: "#f4f5f8" }}>
        <Container>
          <Row md={8} className="d-flex align-items-center">
            <Col>
              <div>
                <h5 className="mb-4">
                  Want to Request For a Customize Service?
                </h5>
                <button className="request-btn me-5" onClick={handleShow}>
                  REQUEST A SERVICE
                </button>
                <button className="call-btn">
                  {" "}
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="fa-rotate-90 me-1"
                  />{" "}
                  01966-050506
                </button>
              </div>
            </Col>
            <Col md={4}>
              <img src={service} alt="" className="image-fluid service-img" />
            </Col>
          </Row>
          <ServiceModal
            modalShow={modalShow}
            handleClose={handleClose}
            title={"Request for service"}
          >
            <Form className="modal-form">
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: 300 }}
              >
                <Form.Label>আপনার এলাকা?</Form.Label>
                <Form.Select>
                  <option>Aftabnagar</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>আপনার কি ধরনের সার্ভিস প্রয়োজন?</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="উদাহরণ : অমার এসি দিয়ে পানি পড়ছে .."
                  style={{ height: 80 }}
                  className="modal-input"
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>আপনার পরিচয়?</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="আপনার নাম"
                      style={{ height: 50 }}
                      className="modal-input"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="আপনার পরিচয়"
                      className="mt-2 modal-input"
                      style={{ height: 50 }}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </ServiceModal>
        </Container>
        <CategoryModal
          modalIsOpen={modalIsOpen}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
          subtitle={subtitle}
        />
      </div>
    </>
  );
};

export default Home;
