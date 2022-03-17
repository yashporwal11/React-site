import React from 'react'
import './Personalized.css'
import personalized from './images/personalized.png'

function Personalized() {
  return (
    <div className='personalized'>
      <p className="heading">Get your personalized period box</p>
      <img src={personalized} alt="img" />
      <p className="content">Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app. </p>
      <button className="button">Create your box on the app  {">"}</button>
    </div>
  )
}

export default Personalized