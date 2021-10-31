import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "../../styles/_swiper.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// install Swiper modules
SwiperCore.use([Navigation]);
const ServiceSlide = () => {
  const category = useSelector((state) => state.category);
  return (
    <div className="p-3 shadow-lg service-slider" style={{ borderRadius: 20 }}>
      <Swiper
        slidesPerView={6}
        spaceBetween={5}
        navigation={true}
        className="mySwiper"
      >
        {category.categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className="category-card ">
              {cat.categoryImage && (
                <div className="d-flex justify-content-center">
                  <img
                    src={cat.categoryImage}
                    alt=""
                    style={{ maxHeight: 40, marginTop: 10 }}
                  />
                </div>
              )}
              <Link to="/all-services" className="link">
                <p
                  className="mt-2 text-center"
                  style={{
                    fontSize: 14,
                    color: "rgba(0,0,0,.75)",
                    fontWeight: "600",
                  }}
                >
                  {cat.name}
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlide;
