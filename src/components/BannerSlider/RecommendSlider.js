import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ac from "../../media/Ac repair.jpeg";
import cctv from "../../media/cctv.jpeg";
import digital from "../../media/digital marketing.jpeg";
import software from "../../media/software.jpeg";
import pest from "../../media/pest control.jpeg";
import web from "../../media/Website.jpg";
const RecommendSlider = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="trending-slider">
      <Slider {...settings}>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={software} alt="" className="trending-image" />

              <p className="trending-text mt-2 fw-bold">Software Development</p>
            </div>
          </Link>
        </div>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={pest} alt="" className="trending-image" />

              <p className="trending-text mt-2 fw-bold">Pest Control</p>
            </div>
          </Link>
        </div>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={web} alt="" className="trending-image" />

              <p className="trending-text mt-2 fw-bold">Website Development</p>
            </div>
          </Link>
        </div>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={cctv} alt="" className="trending-image" />

              <p className="trending-text mt-2 fw-bold">
                {" "}
                CCTV Installation and Repair
              </p>
            </div>
          </Link>
        </div>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={ac} alt="" className="trending-image" />

              <p className="trending-text mt-2 fw-bold">AC Repair Service</p>
            </div>
          </Link>
        </div>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={digital} alt="" className="trending-image" />

              <p className="trending-text mt-2 fw-bold">Digital Marketing</p>
            </div>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default RecommendSlider;
