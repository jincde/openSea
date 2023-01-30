import React, { Component } from "react";
import { CategorySwiper } from "./Slider";


function Category() {

  return (
    <section className="container">
      <h1 className="title-text">Browse by category</h1>
      <CategorySwiper></CategorySwiper>
    </section>
  )
}

export default Category