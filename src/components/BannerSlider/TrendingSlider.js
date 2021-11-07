import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Col, Row } from "react-bootstrap";
import categoryImage from "../../media/ac.jpg";
SwiperCore.use([Navigation]);
const TrendingSlider = () => {
  return (
    <div className="trending-slider">
      <div className="swiper-container">
        <Swiper
          slidesPerView={4}
          spaceBetween={50}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/product-details" className="link">
              <div style={{ maxHeight: 220, maxWidth: 280 }}>
                <img
                  src={categoryImage}
                  alt=""
                  className="sub-category-image"
                />

                <p className="text-center mt-2 fw-bold">Ac Repair</p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/product-details" className="link">
              <div style={{ maxHeight: 220, maxWidth: 280 }}>
                <img
                  src={categoryImage}
                  alt=""
                  className="sub-category-image"
                />

                <p className="text-center mt-2 fw-bold">Ac Repair</p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/product-details" className="link">
              <div style={{ maxHeight: 220, maxWidth: 280 }}>
                <img
                  src={categoryImage}
                  alt=""
                  className="sub-category-image"
                />

                <p className="text-center mt-2 fw-bold">Ac Repair</p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/product-details" className="link">
              <div style={{ maxHeight: 220, maxWidth: 280 }}>
                <img
                  src={categoryImage}
                  alt=""
                  className="sub-category-image"
                />

                <p className="text-center mt-2 fw-bold">Ac Repair</p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/product-details" className="link">
              <div style={{ maxHeight: 220, maxWidth: 280 }}>
                <img
                  src={categoryImage}
                  alt=""
                  className="sub-category-image"
                />

                <p className="text-center mt-2 fw-bold">Ac Repair</p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/product-details" className="link">
              <div style={{ maxHeight: 220, maxWidth: 280 }}>
                <img
                  src={categoryImage}
                  alt=""
                  className="sub-category-image"
                />

                <p className="text-center mt-2 fw-bold">Ac Repair</p>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingSlider;
