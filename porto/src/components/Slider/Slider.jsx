import "./Slider.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="single-slider-one">
          <div className="content">
            <h2>We work hard and porto has</h2>
            <h1>The Best Design</h1>
            <p>
              
              Trusted by over 40,000 satisfied users, Porto is a huge success in
              the one of largest world's MarketPlace 
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="single-slider-two">
          <div className="content">
            <h2>We work hard and porto has</h2>
            <h1>The Best Design</h1>
            <p>
              Trusted by over 40,000 satisfied users, Porto is a huge success in
              the one of largest world's MarketPlace
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="single-slider-three">
          <div className="content">
            <h2>We work hard and porto has</h2>
            <h1>The Best Design</h1>
            <p>
              Trusted by over 40,000 satisfied users, Porto is a huge success in
              the one of largest world's MarketPlace
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
