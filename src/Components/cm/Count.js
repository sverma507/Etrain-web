import React from 'react'
import "./Count.css";
import CountUp from 'react-countup';
export default function Count() {
  return (
    <div>
      <div className='count'>
         <div className='learning-container-count'>
          <div className='count-container'>
            <div className='count-col'>
                <div className='counter'>
               
                     <div className='count-counter'>1024
                      
                      </div> 
                     
                    <div className='count-text'> All Teacher </div>
                </div>
            </div>
           <div className='count-col'>
                <div className='counter'>
                  
                    <span className='count-counter'>960</span>
                    <div className='count-text'> All Student </div>
                </div>
            </div>
            <div className='count-col'>
                <div className='counter'>
               
                    <span className='count-counter'>1019</span>
                    <div className='count-text'> Online Student  </div>
                </div>
            </div>
            <div className='count-col'>
                <div className='counter'>
                
                    <span className='count-counter'>819</span>
                    <div className='count-text'> Ofline Student </div>
                </div>
            </div>
            </div> 
        </div> 
      </div>
    </div>
  )
}
