import React from 'react'
import "./Contact.css";
import icon_error from '../Assets/icon_error.png'
export default function Contact9() {
  return (
    <div>
    <div className='breadcrump'>
        <div className='contact-container'>
            <div className='contact-row'>
                <div className='contact-row1'>
                    <div className='contact-inner'>
                        <div className='contact-inner-text'>
                            <div className='contact-h2'>Contact us</div>
                                <div className='contact-p'><b>Home</b> / Contact us
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
     <div className='contact-section'>
        <div className='contact-container'>
           
    <div className='Map'>
        <div className='map-1'>
            <div className='map-2'>
                <div className='map-icon'>
                    <i></i>
                   <img src={icon_error} alt='' />
                    </div>
                    <div className='map-3'>
                    Sorry! Something went wrong.
                    </div>
                    <div className='map-message'> This page didn't load Google Maps correctly. See the JavaScript console for technical details.</div>
                    </div>
            </div>
            </div>
           <div className='contact-row'>
                 <div className='contact-row1'>
                     <div className='contact-title'>Get in Touch</div></div>
                     <div className='contact-row2'>
                         <div className='contact-row'>
                             <div className='contact-row3'>
                                 <div className='contact-form'>
                                     <textarea className='form-control' placeholder='Enter message'
                                     cols={30} rows={9} ></textarea>
                                 </div>
                             </div>
                             <div className='contact-name'>
                                <div className='contact-name1'>
                                <input  className='form-control'placeholder='Enter your name' /> 
                                </div>
                             </div>
                             <div className='contact-name'>
                                <div className='contact-name1'>
                                <input  className='form-control'placeholder='Enter email address' /> 
                                </div>
                                </div>
                                <div className='contact-email'>
                                <div className='contact-name1'>
                                <input  className='form-control' placeholder='Enter subject' /> 
                                </div>
                                </div>
                         </div>
                         <div className='contact-name1' >
                            <button type='submit' className='contact-button3'>Send message</button>
                         </div>
                     </div>
                </div>
                <div className='contact-info'>
                    <div className='contact-info1'>
                        <div className='contact-info-icon'>&#127968;</div>
                <div className='contact-info-media'>
                    <div className='contact-info-text'><b>Buttonwood, California.</b> </div>
                    <div className='contact-info-p'>Rosemead, CA 91770</div>
                </div>
       </div>
       <div className='contact-info1'>
                        <div className='contact-info-icon'>&#128241;</div>
                <div className='contact-info-media'>
                    <div className='contact-info-text'><b>00 (440) 9865 562</b> </div>
                    <div className='contact-info-p'>Mon to Fri 9am to 6pm</div>
                </div>
       </div>
       <div className='contact-info1'>
                        <div className='contact-info-icon'>&#9993;</div>
                <div className='contact-info-media'>
                    <div className='contact-info-text'><b>support@colorlib.com</b> </div>
                    <div className='contact-info-p'>Send us your query anytime!</div>
                </div>
       </div>
       
       </div>
       </div>
   </div>
    </div>

  )
}