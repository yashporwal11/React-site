import React from 'react'
import './Mood.css'
import mood1 from './images/mood1.png'
import mood2 from './images/mood2.png'
import mood3 from './images/mood3.png'
import mood4 from './images/mood4.png'

function Mood() {
  return (
    <div className='mood'>
      <p className="heading">Track your mood</p>
      <p className="content">All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day.</p>
      <button className="button">Track you mood on the app</button>
      <div className="images">
        <img src={mood1} alt='img' />
        <img src={mood2} alt='img' />
        <img src={mood3} alt='img' />
        <img src={mood4} alt='img' />
      </div>
    </div>
  )
}

export default Mood