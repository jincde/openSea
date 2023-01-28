import React, { Component } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import test from '../img/test1.avif';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      navigation={true}
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="test-card">
          <div className="test-2">
            <img src={test} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="test-card">
          <div className="test-2">
            <img src={test} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="test-card">
          <div className="test-2">
            <img src={test} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="test-card">
          <div className="test-2">
            <img src={test} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="test-card">
          <div className="test-2">
            <img src={test} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="test-card">
          <div className="test-2">
            <img src={test} />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};