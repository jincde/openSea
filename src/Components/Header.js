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
            <li>Explore</li>
            <li>Drops</li>
            <li>Stats</li>
            <li>Resources</li>
          </ul>
        </div>

        {/* ul list 2 */}
        <div className='navbar-icons'>
          <ul>
            <li>
              <span class="material-symbols-outlined">
                account_box
              </span>
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
      </header >
    </nav>
  )
}

export default Header