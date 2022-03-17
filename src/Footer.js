import React from 'react'
import './Footer.css'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import mail from './images/mail.png'

function Footer() {
  return (
    <div className='footer'>
      <div className="social">
        <img src={facebook} alt="img" />
        <img src={twitter} alt="img" />
      </div>
      <div className="links">
        <ul>
          <a><li>Products {">"}</li></a>
          <a><li>Our Science {">"}</li></a>
          <a><li>Vision & Mission {">"}</li></a>
          <a><li>About Us {">"}</li></a>
        </ul>
      </div>
      <div className="line"></div>
      <div className="footer_form">
        <p className="subscribe">Subscribe to our Newsletter</p>
        <input type="text" placeholder='Enter your email...' />
        <button className='button'>
          <img src={mail} alt="img" />
          <p className="text">Activate</p>
        </button>
      </div>
    </div>
  )
}

export default Footer