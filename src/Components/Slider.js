import React, { Component } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import test from '../img/test1.avif';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import styles from '../App.scss';

export default () => {
  return (
    <Swiper
      navigation={true}
      breakpoints={{
        300: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        2256: {
          slidesPerView: 6,
          spaceBetween: 40
        }
      }}
      loop={true}
      modules={[Navigation]}
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