import React, { Component, useEffect } from "react";

function Rank() {
  useEffect(() => {
    const allMenu = document.querySelectorAll('.menu-content');
    const allTab = document.querySelectorAll('.tab-content');

    for (let i = 0; i < allMenu.length; i++) {
      allMenu[i].addEventListener('click', () => {

        for (let i = 0; i < allMenu.length; i++) {
          allMenu[i].classList.remove('active');
          allTab[i].classList.remove('show');
        }

        allMenu[i].classList.add('active');
        allTab[i].classList.add('show');
      })
    }
  })

  return (
    <section className="container">

      <div className="rank-menu">
        <div className="rank-menu-left">
          <p className="menu-content active">Trending</p>
          <p className="menu-content">Top</p>
        </div>

        <div className="rank-menu-center">
          <button>All chains</button>
          <button>i</button>
          <button>i</button>
          <button>i</button>
          <button>i</button>
          <button>i</button>
          <button>i</button>
          <button>i</button>
          <button>i</button>
        </div>

        <div className="rank-menu-end">
          <button>View all</button>
        </div>
      </div>

      <div className="rank-grid">
        {/* Top */}
        <section className="tab-content top-content show">
          <article>
            <div className="table-head">
              <p>COLLECTION</p>
              <p>FLOOR PRICE</p>
              <p>VOLUME</p>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">1</div>
                <div className="collection-img blue">
                  <img></img>
                </div>
                <p className="collection-text collection-title">Primary Blue</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">2</div>
                <div className="collection-img light-blue">
                </div>
                <p className="collection-text collection-title">Placid Blue</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">3</div>
                <div className="collection-img yellow">
                  <img></img>
                </div>
                <p className="collection-text collection-title">Illuminating</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">4</div>
                <div className="collection-img light-yellow">
                  <img></img>
                </div>
                <p className="collection-text collection-title">light yellow</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">5</div>
                <div className="collection-img black">
                  <img></img>
                </div>
                <p className="collection-text collection-title">power black</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            {/* <div>

          </div> */}
          </article>

          <article>
            <div className="table-head">
              <p>COLLECTION</p>
              <p>FLOOR PRICE</p>
              <p>VOLUME</p>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">6</div>
                <div className="collection-img orange">
                  <img></img>
                </div>
                <p className="collection-text collection-title">orange red</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">7</div>
                <div className="collection-img">
                  <img></img>
                </div>
                <p className="collection-text collection-title">beige</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">8</div>
                <div className="collection-img pink">
                  <img></img>
                </div>
                <p className="collection-text collection-title">Prism pink</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">9</div>
                <div className="collection-img purple">
                  <img></img>
                </div>
                <p className="collection-text collection-title">pantone purple</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">10</div>
                <div className="collection-img light-gray">
                  <img></img>
                </div>
                <p className="collection-text collection-title">lighty gray</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            {/* <div>

          </div> */}
          </article>
        </section>

        {/* Trending */}
        <section className="tab-content trending-content">
          <article>
            <div className="table-head">
              <p>COLLECTION</p>
              <p>FLOOR PRICE</p>
              <p>VOLUME</p>
            </div>

            <div className="table-contents ">
              <div className="collection">
                <div className="collection-number">1</div>
                <div className="collection-img orange">
                  <img></img>
                </div>
                <p className="collection-text collection-title">orange red</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">2</div>
                <div className="collection-img">
                </div>
                <p className="collection-text collection-title">beige</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">3</div>
                <div className="collection-img purple">
                  <img></img>
                </div>
                <p className="collection-text collection-title">pantone purple</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">4</div>
                <div className="collection-img blue">
                  <img></img>
                </div>
                <p className="collection-text collection-title">Primary Blue</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">5</div>
                <div className="collection-img yellow">
                  <img></img>
                </div>
                <p className="collection-text collection-title">Illuminating</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            {/* <div>

          </div> */}
          </article>

          <article>
            <div className="table-head">
              <p>COLLECTION</p>
              <p>FLOOR PRICE</p>
              <p>VOLUME</p>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">6</div>
                <div className="collection-img black">
                  <img></img>
                </div>
                <p className="collection-text collection-title">power black</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">7</div>
                <div className="collection-img pink">
                  <img></img>
                </div>
                <p className="collection-text collection-title">prism pink</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">8</div>
                <div className="collection-img light-blue">
                  <img></img>
                </div>
                <p className="collection-text collection-title">Placid Blue</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">9</div>
                <div className="collection-img light-gray">
                  <img></img>
                </div>
                <p className="collection-text collection-title">light gray</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            <div className="table-contents">
              <div className="collection">
                <div className="collection-number">10</div>
                <div className="collection-img light-yellow">
                  <img></img>
                </div>
                <p className="collection-text collection-title">light-yellow</p>
              </div>

              <div className="floor-price">
                <p className="collection-text">0.20 ETH</p>
              </div>

              <div className="volume">
                <p className="collection-text">493 ETH</p>
              </div>
            </div>

            {/* <div>

          </div> */}
          </article>
        </section>
      </div>
    </section>
  )
}

export default Rank