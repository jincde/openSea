import logo from '../img/logo.png'

function Header() {

  return (
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
          <span class="material-symbols-outlined md-inactive">
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
          <li>O</li>
          <li>O</li>
          <li>O</li>
        </ul>
      </div>
    </header >
  )
}

export default Header