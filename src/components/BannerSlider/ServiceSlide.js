import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "../../styles/_swiper.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// install Swiper modules
SwiperCore.use([Navigation]);
const ServiceSlide = ({ openModal }) => {
  const category = useSelector((state) => state.category);
  return (
    <div className="p-3 shadow-lg service-slider" style={{ borderRadius: 20 }}>
      <Swiper
        spaceBetween={5}
        navigation={true}
        className="mySwiper"
        breakpoints={{
          300: {
            slidesPerView: 3,
          },
          // when window width is >= 640px
          600: {
            slidesPerView: 4,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 6,
          },
        }}
      >
        {category.categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className="category-card ">
              {cat.categoryImage && (
                <div className="d-flex justify-content-center">
                  <img
                    src={cat.categoryImage}
                    alt=""
                    className="swiper-image"
                  />
                </div>
              )}
              {/* <span onClick={openModal} style={{ cursor: "pointer" }}> */}
              <Link to="/all-services" className="link">
                <p className="mt-2 text-center swiper-text">{cat.name}</p>
              </Link>
              {/* </span> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlide;
