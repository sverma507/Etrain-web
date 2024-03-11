// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <div>
//       <div className='inner_item'>
//         <div className='item-1'>Contact Us</div>
//         <div className='item-2'>Home/Contact us</div>
//       </div>


//       <div className='content-container'>

//         <div className='content1-icon'>
//           <img src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png" alt="im" />
//         </div>
//         <div className='content1-title'>
//           Oops! something went wrong.
//         </div>
//         <div className='content1-message'>
//           This page didn't load Google Maps correctly.<span> See the JavaScript console for technical details.</span>
//         </div>
//       </div>

//       <div className='outer'>
//         <div className='outer-1'>
//           <div className='contact-details'>
//             <h1>Get in Touch</h1>
//           </div>

//           <div class='form-group'>
//             <textarea class="form-control" name="message" id="message" col="30" row="2" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder="Enter Message" />
//             <div className='e-name'>
//               <input class="form-name" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" />
//               <input class="form-name" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Enter email address" />
//             </div>
//             <a href='/' ><input class="form-name form-sub" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject" />
//             </a>
//             <div><button class="form-btn form-name" type="submit" >Send Message</button></div>
//           </div>
//         </div>
//         <div className='outer-2'>
//           <div className='contact-info'>
//           </div>
//           <div className='contant-media'>
//             {/* <i class="ti-home"></i> */}
//             <div className='h-3'>
//               Buttonwood, Calfornia
//             </div>
//             <p>
//               Rosemead, CA 91770
//             </p>
//           </div>
//           <div className='content-media'>
//             <div className='h-3'>
//               {/* <i class="ti-tablet"></i> */}
//               00 (440) 9865 562
//             </div>
//             <p>
//               Mon to Fri 9 am to 6pm
//             </p>
//           </div>
//           <div className='content-media'>
//             {/* <i class="ti-email"></i> */}
//             <div className='h-3'>support@colorlib.com</div>
//             <p>Send us your query anytime!</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;


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