import React, { Component } from "react";

function Footer() {
  return (
    <footer>
      <section className="footer-container">
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
      </section>
    </footer>
  )
}

export default Footer