import React from "react";
import "../../styles/_topBanner.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import banner from "../../media/cctv-banner.jpg";
import banner1 from "../../media/rsz_banner_2.jpg";
import banner2 from "../../media/rsz_banner_3.jpg";
import banner3 from "../../media/rsz_banner_4.jpg";
import banner4 from "../../media/rsz_banner_5.jpg";
import banner5 from "../../media/rsz_banner_6.jpg";
import { Container } from "react-bootstrap";

SwiperCore.use([Autoplay, Navigation]);

const BannerSlider = () => {
  return (
    <Container fluid className="px-0">
      <div className="banner-slider">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          loop={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          className="px-2 mx-auto mb-3"
          style={{ maxWidth: "100%" }}
        >
          <SwiperSlide className="rounded-2 d-flex align-items-center justify-content-center text-white">
            <img
              src={banner}
              alt=""
              className="image-fluid"
              style={{ maxHeight: 320 }}
            />
          </SwiperSlide>
          <SwiperSlide className=" rounded-2 d-flex align-items-center justify-content-center text-white">
            <img
              src={banner1}
              alt=""
              className="image-fluid"
              style={{ maxHeight: 320 }}
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2 d-flex align-items-center justify-content-center text-white">
            <img
              src={banner2}
              alt=""
              className="image-fluid"
              style={{ maxHeight: 320 }}
            />
          </SwiperSlide>
          <SwiperSlide className=" rounded-2 d-flex align-items-center justify-content-center text-white">
            <img
              src={banner3}
              alt=""
              className="image-fluid"
              style={{ maxHeight: 320 }}
            />
          </SwiperSlide>
          <SwiperSlide className=" rounded-2 d-flex align-items-center justify-content-center text-white">
            <img
              src={banner4}
              alt=""
              className="image-fluid"
              style={{ maxHeight: 320 }}
            />
          </SwiperSlide>
          <SwiperSlide className=" rounded-2 d-flex align-items-center justify-content-center text-white">
            <img
              src={banner5}
              alt=""
              className="image-fluid"
              style={{ maxHeight: 320 }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default BannerSlider;
