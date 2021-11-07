import React from "react";
import { Link } from "react-router-dom";
import categoryImage from "../../media/ac.jpg";
import Slider from "react-slick";
import { ReactComponent as LeftArrow } from "../../media/arrow left.svg";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const TrendingSlider = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: false,
    // autoplay: true,
    // autoplaySpeed: 2000,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
    // prevArrow: <LeftArrow />,
  };
  return (
    <div className="trending-slider">
      <Slider {...settings}>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={categoryImage} alt="" className="trending-image" />

              <p className="text-center mt-2 fw-bold">Ac Repair</p>
            </div>
          </Link>
        </div>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={categoryImage} alt="" className="trending-image" />

              <p className="text-center mt-2 fw-bold">Ac Repair</p>
            </div>
          </Link>
        </div>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={categoryImage} alt="" className="trending-image" />

              <p className="text-center mt-2 fw-bold">Ac Repair</p>
            </div>
          </Link>
        </div>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={categoryImage} alt="" className="trending-image" />

              <p className="text-center mt-2 fw-bold">Ac Repair</p>
            </div>
          </Link>
        </div>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={categoryImage} alt="" className="trending-image" />

              <p className="text-center mt-2 fw-bold">Ac Repair</p>
            </div>
          </Link>
        </div>
        <div className="ms-3">
          <Link to="/product-details" className="link">
            <div>
              <img src={categoryImage} alt="" className="trending-image" />

              <p className="text-center mt-2 fw-bold">Ac Repair</p>
            </div>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default TrendingSlider;
