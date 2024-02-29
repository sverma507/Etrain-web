import React from 'react'
import "./Part.css";
import Learning from "../cm/Learning.jpg"
export default function Free() {
  return (
    <div className='Learning'>
      <div className='learning-container'>
        <div className='learning-row'>
          <div className='learning-row2'>
            <div className='learning-img'>
              <img src={Learning} alt="sorry"></img>
            </div>
          </div>
          <div className='learning-col'>
            <div className='learning-text'>
              <h5>About Us</h5>
              <h2>Learning with love and Loughter</h2>
              <p>Fifth saying upon divide divide rule for deep their female all hath brind Days and beast greater grass signs abundantly have greater also days years under brought moveth</p>
              <ul>
                <li>
                Him lights given i heaven second yielding seas
                                gathered wear
                </li>
                <li>Fly female them whales fly them day deep given
                                night.</li>
              </ul>
              <a href='#' className='btn'>Read more</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  )
}
