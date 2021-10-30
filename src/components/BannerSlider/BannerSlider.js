import React from "react";
import "../../styles/_topBanner.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import banner from "../../media/banner (1).jpg";
import banner1 from "../../media/banner (2).jpg";
import banner2 from "../../media/banner (3).jpg";
import banner3 from "../../media/banner (4).jpg";
import banner4 from "../../media/banner (5).jpg";
import banner5 from "../../media/banner (6).jpg";

SwiperCore.use([Autoplay, Navigation]);

const BannerSlider = () => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      loop={3}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={true}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      className="px-2 mx-auto mb-3"
      style={{ maxWidth: "1100px" }}
    >
      <SwiperSlide className="rounded-2 d-flex align-items-center justify-content-center text-white">
        <img
          src={banner}
          alt=""
          className="image-fluid"
          style={{ maxHeight: 600 }}
        />
      </SwiperSlide>
      <SwiperSlide className=" rounded-2 d-flex align-items-center justify-content-center text-white">
        <img
          src={banner1}
          alt=""
          className="image-fluid"
          style={{ maxHeight: 600 }}
        />
      </SwiperSlide>
      <SwiperSlide className="rounded-2 d-flex align-items-center justify-content-center text-white">
        <img
          src={banner2}
          alt=""
          className="image-fluid"
          style={{ maxHeight: 600 }}
        />
      </SwiperSlide>
      <SwiperSlide className=" rounded-2 d-flex align-items-center justify-content-center text-white">
        <img
          src={banner3}
          alt=""
          className="image-fluid"
          style={{ maxHeight: 600 }}
        />
      </SwiperSlide>
      <SwiperSlide className=" rounded-2 d-flex align-items-center justify-content-center text-white">
        <img
          src={banner4}
          alt=""
          className="image-fluid"
          style={{ maxHeight: 600 }}
        />
      </SwiperSlide>
      <SwiperSlide className=" rounded-2 d-flex align-items-center justify-content-center text-white">
        <img
          src={banner5}
          alt=""
          className="image-fluid"
          style={{ maxHeight: 600 }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSlider;
