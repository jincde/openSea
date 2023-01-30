import React, { Component } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { NotableCard, HotTodayCard, OriginalArtCard, NftListCard, CategoryCard } from "./Card";

import banner1 from '../img/collection.avif';
import banner2 from '../img/banner2.avif';
import banner3 from '../img/test1.avif';
import banner4 from '../img/banner4.avif';
import banner5 from '../img/banner5.avif';
import banner6 from '../img/banner6.avif';
import banner7 from '../img/banner7.avif';
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
            <img src={banner5} />
            <div className="banner-collection">
              <div className="banner-collection-title">FashionDuck</div>
              <div className="collection-price">Floor: 0.02 ETH</div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <div className="card-top">
            <img src={banner2} />
            <div className="banner-collection">
              <div className="banner-collection-title">Nyan Balloon</div>
              <div className="collection-price">Floor: 0.01 ETH</div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <div className="card-top">
            <img src={banner3} />
            <div className="banner-collection">
              <div className="banner-collection-title">NecroParadise</div>
              <div className="collection-price">Floor: 0.05 ETH</div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <div className="card-top">
            <img src={banner4} />
            <div className="banner-collection">
              <div className="banner-collection-title">Regulars</div>
              <div className="collection-price">Floor: 0.12 ETH</div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <div className="card-top">
            <img src={banner7} />
            <div className="banner-collection">
              <div className="banner-collection-title">SAM PIERSON'S BRAIN DRAIN</div>
              <div className="collection-price">Floor: 0.05 ETH</div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <div className="card-top">
            <img src={banner6} />
            <div className="banner-collection">
              <div className="banner-collection-title">archive editions</div>
              <div className="collection-price">Floor: 0.14 ETH</div>
            </div>
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