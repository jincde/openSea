import React, { Component } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { NotableCard, HotTodayCard, OriginalArtCard, NftListCard, CategoryCard } from "./Card";

import test from '../img/collection.avif';
import test2 from '../img/notable.webp';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import styles from '../App.scss';

function BannerSwiper() {
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
        <div className="card">
          <div className="card-top">
            <img src={test} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <div className="card-top">
            <img src={test} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <div className="card-top">
            <img src={test} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <div className="card-top">
            <img src={test} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <div className="card-top">
            <img src={test} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <div className="card-top">
            <img src={test} />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

function NotableSwiper() {

  return (
    <Swiper
      navigation={true}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 40
        },
        1600: {
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
        <NotableCard />
      </SwiperSlide>

      <SwiperSlide>
        <NotableCard />
      </SwiperSlide>

      <SwiperSlide>
        <NotableCard />
      </SwiperSlide>

      <SwiperSlide>
        <NotableCard />
      </SwiperSlide>

      <SwiperSlide>
        <NotableCard />
      </SwiperSlide>

      <SwiperSlide>
        <NotableCard />
      </SwiperSlide>

      <SwiperSlide>
        <NotableCard />
      </SwiperSlide>

      <SwiperSlide>
        <NotableCard />
      </SwiperSlide>

      <SwiperSlide>
        <NotableCard />
      </SwiperSlide>


    </Swiper>
  )
}

function HotTodaySwiper() {

  return (
    <Swiper
      navigation={true}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 40
        },
        1600: {
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
        <HotTodayCard />
      </SwiperSlide>

      <SwiperSlide>
        <HotTodayCard />
      </SwiperSlide>

      <SwiperSlide>
        <HotTodayCard />
      </SwiperSlide>

      <SwiperSlide>
        <HotTodayCard />
      </SwiperSlide>

      <SwiperSlide>
        <HotTodayCard />
      </SwiperSlide>

      <SwiperSlide>
        <HotTodayCard />
      </SwiperSlide>

      <SwiperSlide>
        <HotTodayCard />
      </SwiperSlide>

      <SwiperSlide>
        <HotTodayCard />
      </SwiperSlide>
    </Swiper>
  )
}

function OriginalArtSwiper() {

  return (
    <Swiper
      navigation={true}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 40
        },
        1600: {
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
        <OriginalArtCard />
      </SwiperSlide>

      <SwiperSlide>
        <OriginalArtCard />
      </SwiperSlide>

      <SwiperSlide>
        <OriginalArtCard />
      </SwiperSlide>

      <SwiperSlide>
        <OriginalArtCard />
      </SwiperSlide>

      <SwiperSlide>
        <OriginalArtCard />
      </SwiperSlide>

      <SwiperSlide>
        <OriginalArtCard />
      </SwiperSlide>

      <SwiperSlide>
        <OriginalArtCard />
      </SwiperSlide>
    </Swiper>
  )
}

function NftListSwiper() {

  return (
    <Swiper
      navigation={true}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 40
        },
        1600: {
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
        <NftListCard />
      </SwiperSlide>

      <SwiperSlide>
        <NftListCard />
      </SwiperSlide>

      <SwiperSlide>
        <NftListCard />
      </SwiperSlide>

      <SwiperSlide>
        <NftListCard />
      </SwiperSlide>

      <SwiperSlide>
        <NftListCard />
      </SwiperSlide>

      <SwiperSlide>
        <NftListCard />
      </SwiperSlide>

      <SwiperSlide>
        <NftListCard />
      </SwiperSlide>
    </Swiper>
  )
}

function CategorySwiper() {

  return (
    <Swiper
      navigation={true}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 40
        },
        1600: {
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
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>
    </Swiper>
  )
}

export { BannerSwiper, NotableSwiper, HotTodaySwiper, OriginalArtSwiper, NftListSwiper, CategorySwiper }