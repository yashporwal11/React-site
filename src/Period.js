import React from 'react'
import './Period.css'
import period from './images/period.png'

function Period() {
  return (
    <div className='period'>
      <p className="heading">Track your period</p>
      <p className="content">Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data.</p>
      <button className="button">Track you period on the app</button>
      <img src={period} alt='img' />
    </div>
  )
}

export default Period