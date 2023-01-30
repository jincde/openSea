import React, { Component } from "react";
import { NotableSwiper } from "./Slider";

function Notable() {

  return (
    <section className="container">
      <h1 className="title-text">Notable collections</h1>
      <NotableSwiper></NotableSwiper>
    </section>
  )
}

export default Notable