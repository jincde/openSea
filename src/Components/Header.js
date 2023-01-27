import logo from '../img/logo.png'

function Header() {

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <div className="logo">
          <img src={logo}></img>
          <div className='brand-name'>OpenSea</div>
        </div>
      </div>

      <div>asd</div>
    </header>
  )
}

export default Header