import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ac from "../../media/Ac repair.jpeg";
import cctv from "../../media/cctv.jpeg";
import gas from "../../media/gas-stove.png";
import geysar from "../../media/geyser repair.jpeg";
import digital from "../../media/digital marketing.jpeg";
import software from "../../media/software.jpeg";

const TrendingSlider = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: false,
    // autoplay: true,
    // autoplaySpeed: 2000,

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
    // prevArrow: <LeftArrow />,
  };
  return (
    <div className="trending-slider">
      <Slider {...settings}>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={ac} alt="" className="trending-image" />

              <p className="mt-2 fw-bold trending-text">Ac Repair Service</p>
            </div>
          </Link>
        </div>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={cctv} alt="" className="trending-image" />

              <p className="mt-2 fw-bold trending-text">
                CCTV Installation and Repair
              </p>
            </div>
          </Link>
        </div>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={software} alt="" className="trending-image" />

              <p className="mt-2 fw-bold trending-text">Software Development</p>
            </div>
          </Link>
        </div>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={gas} alt="" className="trending-image trending-text" />

              <p className="mt-2 fw-bold trending-text">Gas Stove Repair</p>
            </div>
          </Link>
        </div>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={geysar} alt="" className="trending-image" />

              <p className="mt-2 fw-bold trending-text">Geyser Repair</p>
            </div>
          </Link>
        </div>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={digital} alt="" className="trending-image" />

              <p className="mt-2 fw-bold trending-text">Digital Marketing</p>
            </div>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default TrendingSlider;
