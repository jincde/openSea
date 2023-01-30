import { useEffect } from 'react'
import logo from '../img/logo.png'

function Header() {

  useEffect(() => {
    // 스크롤 시 헤더 색상 변경
    const header = document.querySelector('nav');

    window.onscroll = function () {
      let top = window.scrollY;
      console.log(top);
      if (top >= 72) {
        header.classList.add('scroll')
      } else {
        header.classList.remove('scroll');
      }
    }
  })

  return (
    <nav>
      <header className="navbar">
        <div className="navbar-logo">
          <div className="logo">
            <img src={logo} alt="logo"></img>
            <div className='brand-name'>OpenSea</div>
          </div>
        </div>

        {/* search */}
        <div className='search-section'>
          <div className='search-view-toggle'></div>
          <div className='search-form'>
            <span className="material-symbols-outlined md-inactive">
              search
            </span>
            <input placeholder='Search items, collections, and accounts' />
          </div>
        </div>

        {/* ul list 1 */}
        <div className='navbar-menu'>
          <ul>
            <div className='dropdown'>
              <li className='main-menu'>Explore</li>
              <div className='dropdown-menu'>
                <button>All NFTs</button>
                <button>Arts</button>
                <button>Art</button>
                <button>Collectibles</button>
                <button>Domain Names</button>
                <button>Music</button>
                <button>Photography</button>
                <button>Sports</button>
                <button>Trading Cards</button>
                <button>Utility</button>
                <button>Virtual Worlds</button>
              </div>
            </div>

            <div className='dropdown'>
              <li className='main-menu'>Drops</li>
              <div className='dropdown-menu'>
                <button>Calendar</button>
                <button>Learn more</button>
              </div>
            </div>

            <div className='dropdown'>
              <li className='main-menu'>Stats</li>
              <div className='dropdown-menu'>
                <button>Rankings</button>
                <button>Activity</button>
              </div>
            </div>

            <div className='dropdown'>
              <li className='main-menu'>Resources</li>
              <div className='dropdown-menu'>
                <button>Learn</button>
                <button>Help Center</button>
                <button>Platform Status</button>
                <button>Partners</button>
                <button>Taxes</button>
                <button>Blog</button>
                <button>Docs</button>
                <button>Newsletter</button>
              </div>
            </div>
          </ul>
        </div>

        {/* ul list 2 */}
        <div className='navbar-icons'>
          <ul>
            <li style={{ padding: '0' }}>
              <div className='dropdown'>
                <li className='main-menu'>
                  <span class="material-symbols-outlined">
                    account_box
                  </span>
                </li>
                <div className='dropdown-menu'>
                  <button>Profile</button>
                  <button>Favorites</button>
                  <button>Watchlist</button>
                  <button>My collection</button>
                  <button>Create</button>
                  <button>Settings</button>
                  <button>Language</button>
                  <button>Night mode</button>
                </div>
              </div>
            </li>
            <li>
              <span class="material-symbols-outlined">
                account_balance_wallet
              </span>
            </li>
            <li>
              <span class="material-symbols-outlined">
                shopping_cart
              </span>
            </li>
          </ul>
        </div>

        {/* Hamburger */}
        <div className='hamburger'>
          <span class="material-symbols-outlined">
            menu
          </span>
        </div>

      </header >
    </nav >
  )
}

export default Header