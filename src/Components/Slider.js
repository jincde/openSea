import React, { Component } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import test from '../img/test1.avif';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="test-card">
          <div className="test-1"></div>
          <div className="test-2">ㅁㄴㅇ
            <img src={test} /></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
    </Swiper>
  );
};