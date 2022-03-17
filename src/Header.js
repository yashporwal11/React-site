import React from 'react'
import './Header.css'
import menu from './images/menu.png'
import cart from './images/cart.png'
import bell from './images/bell.png'

function Header() {
  return (
    <div className='header'>
      <nav className='navbar'>
        <div className="left">
          <div className="menu">
            <img src={menu} alt="img" />
          </div>
        </div>
        <div className="right">
          <img src={cart} alt="img" />
          <img src={bell} alt="img" />
        </div>
      </nav>
    </div>
  )
}

export default Header