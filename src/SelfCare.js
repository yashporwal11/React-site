import React from 'react'
import './SelfCare.css'
import selfcare from './images/selfcare.png'

function SelfCare() {
  return (
    <div className='selfCare'>
      <p className="heading">Liberate your everyday wellness</p>
      <p className="sub_heading">Shop our self-care products</p>
      <p className="content">Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.</p>
      <button className="button">Upgrade your self-care</button>
      <p className="hashtag">#NoNasties, we promise!</p>
      <img src={selfcare} alt='img' />
    </div>
  )
}

export default SelfCare