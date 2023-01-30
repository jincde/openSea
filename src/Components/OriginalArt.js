import React, { Component } from "react";
import { OriginalArtCard } from "./Card";
import { OriginalArtSwiper } from "./Slider";


function OriginalArt() {

  return (
    <section className="container">
      <h1 className="title-text">Original art spotlight</h1>
      <OriginalArtSwiper></OriginalArtSwiper>
    </section>
  )
}

export default OriginalArt