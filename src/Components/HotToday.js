import React, { Component } from "react";
import { HotTodaySwiper } from "./Slider";


function HotToday() {

  return (
    <section className="container">
      <h1 className="title-text">Top collector buys today</h1>
      <HotTodaySwiper></HotTodaySwiper>
    </section>
  )
}

export default HotToday