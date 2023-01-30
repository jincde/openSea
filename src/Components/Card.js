import React, { Component } from "react";
import test2 from '../img/notable.webp';
import test3 from '../img/HotToday.avif';
import test4 from '../img/Original.avif';
import test5 from '../img/Nft.png'
import test6 from '../img/category.png'

function NotableCard() {
  return (
    <article className="card notable-card">
      <div className="card-top notable-card-top">
        <img src={test2} />
      </div>
      <div className="card-bottom">
        <div className="collection-name">Shellz Orb</div>
        <div className="collection-info">
          <div className="table-row">
            <span className="table-row-title">FLOOR</span>
            <span className="table-row-content">0.08 ETH</span>
          </div>
          <div className="table-row">
            <span className="table-row-title">TOTAL VOLUME</span>
            <span className="table-row-content">1,137 ETH</span>
          </div>
        </div>
      </div>
    </article>
  )
}

function HotTodayCard() {
  return (
    <article className="card notable-card">
      <div className="card-top notable-card-top">
        <img src={test3} />
      </div>
      <div className="card-bottom">
        <div className="collection-name">Otherdeed for Otherside</div>
        <div className="collection-info">
          <div className="table-row">
            <span className="table-row-title">FLOOR</span>
            <span className="table-row-content">0.08 ETH</span>
          </div>
          <div className="table-row">
            <span className="table-row-title">24H VOLUME</span>
            <span className="table-row-content">1,137 ETH</span>
          </div>
        </div>
      </div>
    </article>
  )
}

function OriginalArtCard() {
  return (
    <article className="card notable-card">
      <div className="card-top notable-card-top">
        <img src={test4} />
      </div>
      <div className="card-bottom">
        <div className="collection-name">Feeling blue planet</div>
        <div className="collection-info">
          <div className="table-row">
            <span className="table-row-title">FLOOR</span>
            <span className="table-row-content">0.08 ETH</span>
          </div>
          <div className="table-row">
            <span className="table-row-title">TOTAL VOLUME</span>
            <span className="table-row-content">1,137 ETH</span>
          </div>
        </div>
      </div>
    </article>
  )
}

function NftListCard() {
  return (
    <article className="card notable-card">
      <div className="card-top notable-card-top">
        <img src={test5} />
      </div>
      <div className="card-bottom">
        <div className="collection-name">What is a Crypto wallet?</div>
      </div>
    </article>
  )
}

function CategoryCard() {
  return (
    <article className="card notable-card">
      <div className="card-top notable-card-top">
        <img src={test6} />
      </div>
      <div className="card-bottom">
        <div className="collection-name">Domain Names</div>
      </div>
    </article>
  )
}

export { NotableCard, HotTodayCard, OriginalArtCard, NftListCard, CategoryCard }