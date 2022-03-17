import React from 'react'
import './About.css'
import testtube from './images/testtube.png'
import stars from './images/stars.png'
import phone from './images/phone.png'

function About() {
  return (
    <div className='about'>
      <p className="heading">About Diana</p>
      <p className="sub_heading">A platform that looks out for you</p>
      <p className="content">Diana empowers you to understand how your body works so you can look and feel your best. </p>
      <div className="line"></div>
      <h2>Our Philosophy</h2>
      <p className="heading">Sustainable wellness is a big-picture, inside out approach</p>
      <p className="sub_heading">Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness.</p>
      <p className="sub_heading">That’s why we’ve created an integrated ecosystem of: </p>
      <div className="ecosystem">
        <div className="part">
          <img src={testtube} alt='img' />
          <p className="content">Consciously formulated products that deliver feel-good results fast</p>
        </div>
        <div className="part">
          <img src={stars} alt='img' />
          <p className="content">In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body</p>
        </div>
        <div className="part">
          <img src={phone} alt='img' />
          <p className="content">In-app consultation portals that connect you with compassionate wellness experts </p>
        </div>
      </div>
      <p className="content">Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.
      </p>
    </div>
  )
}

export default About