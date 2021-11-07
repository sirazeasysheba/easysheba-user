import React from "react";
import { Link } from "react-router-dom";
import categoryImage from "../../media/ac.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
const RecommendSlider = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: false,
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

export default RecommendSlider;
