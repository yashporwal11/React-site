import React from 'react'
import './Consult.css'
import consult from './images/consult.png'

function Consult() {
  return (
    <div className='consult'>
      <p className="heading">Consult with wellness experts</p>
      <p className="content">Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you.</p>
      <button className="button">Get a consultation</button>
      <img src={consult} alt="img" />
    </div>
  )
}

export default Consult