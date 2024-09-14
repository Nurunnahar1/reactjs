import "./Slider.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="title-area">
            <div className="content">
              <h4> We work hard and porto has</h4>

              <h2>The Best Design</h2>
              <p>
                Trusted by over 40,000 satisfied users, Porto is a huge success
                in the one of largest world's MarketPlace
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title-area">
            <div className="content">
              <h4> We work hard and porto has</h4>

              <h2>The Best Design</h2>
              <p>
                Trusted by over 40,000 satisfied users, Porto is a huge success
                in the one of largest world's MarketPlace
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title-area">
            <div className="content">
              <h4> We work hard and porto has</h4>

              <h2>The Best Design</h2>
              <p>
                Trusted by over 40,000 satisfied users, Porto is a huge success
                in the one of largest world's MarketPlace
              </p>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
