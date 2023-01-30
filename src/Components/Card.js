import React, { Component } from "react";
import test2 from '../img/notable.webp';

function NotableCard() {

  return (
    <article className="card notable-card">
      <div className="card-top notable-card-top">
        <img src={test2} />
      </div>
      <div className="card-bottom">
        <div className="collection-name">name</div>
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

export { NotableCard }