import React from "react";
import { BannerSwiper } from "./Slider.js";

function Banner() {

  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-title">
          <h1>Explore, collect, and sell NFTs</h1>
        </div>
        <article className="banner-contents">
        </article>
        <BannerSwiper></BannerSwiper>
      </div>
    </div>
  )
}

export default Banner