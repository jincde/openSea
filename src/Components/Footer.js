import React, { Component } from "react";
import whiteLogo from '../img/white-logo.png';

function Footer() {
  return (
    <footer>
      <section className="footer-container">
        {/* footer 1번째 줄 */}
        <div className="footer-row">
          <div className="footer-row-content">
            <div className="content-name">stay in the loop</div>
            <div className="content-text">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</div>
            <div className="footer-form">
              <div className="footer-input">
                <input placeholder="Your email address" />
              </div>
              <button>Sign up</button>
            </div>
          </div>
          <div className="footer-row-content">
            <div className="content-name">Join the community</div>
          </div>
        </div>
        {/* footer 2번째 줄 */}
        <div className="footer-row">
          <div className="footer-left">
            <div className="logo">
              <img src={whiteLogo} alt="logo"></img>
            </div>
            <div className="content-name">OpenSea</div>
            <div className="content-text">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</div>
          </div>

          <div className="footer-right">
            <div className="footer-right-link">
              <div className="footer-nav">Marketplace</div>
              <ul className="footer-nav-list">
                <li>All NFTs</li>
                <li>Arts</li>
                <li>Art</li>
                <li>Collectibles</li>
                <li>Domain Names</li>
                <li>Music</li>
                <li>Photography</li>
                <li>Sports</li>
                <li>Trading Cards</li>
                <li>Utility</li>
                <li>Virtual Worlds</li>
              </ul>
            </div>
            <div className="footer-right-link">
              <div className="footer-nav">My Account</div>
              <ul className="footer-nav-list">
                <li>Profile</li>
                <li>Favorites</li>
                <li>Watchlist</li>
                <li>My Collections</li>
                <li>Create</li>
                <li>Settings</li>
              </ul>
              <div className="footer-nav" style={{ marginTop: 48 }}>Stats</div>
              <ul className="footer-nav-list">
                <li>Ranking</li>
                <li>Activity</li>
              </ul>
            </div>
            <div className="footer-right-link">
              <div className="footer-nav">Resources</div>
              <ul className="footer-nav-list">
                <li>Learn</li>
                <li>Help Center</li>
                <li>Platform Status</li>
                <li>Partners</li>
                <li>Taxes</li>
                <li>Blog</li>
                <li>Docs</li>
                <li>Newsletter</li>
              </ul>
            </div>
            <div className="footer-right-link">
              <div className="footer-nav">Company</div>
              <ul className="footer-nav-list">
                <li>About</li>
                <li>Careers</li>
                <li>Ventures</li>
                <li>Grants</li>
              </ul>
            </div>
          </div>
        </div>
        {/* footer 3번째 줄 */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">© 2018 - 2023 Ozone Networks, Inc</div>
          <div className="footer-bottom-content">
            <div>Privacy Policy</div>
            <div style={{ marginLeft: 16 }}>Terms of Service</div>
          </div>
        </div>

      </section>
    </footer>
  )
}

export default Footer