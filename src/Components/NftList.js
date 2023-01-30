import React, { Component } from "react";
import { NftListSwiper } from "./Slider";


function NftList() {

  return (
    <section className="container">
      <h1 className="title-text">NFT 101</h1>
      <NftListSwiper></NftListSwiper>
    </section>
  )
}

export default NftList