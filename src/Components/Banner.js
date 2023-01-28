import React from "react";
import Slider from "./Slider";

function Banner() {

  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-title">
          <h1>Explore, collect, and sell NFTs</h1>
        </div>
        <article className="banner-contents">
        </article>
        <Slider></Slider>
      </div>
    </div>
  )
}

export default Banner