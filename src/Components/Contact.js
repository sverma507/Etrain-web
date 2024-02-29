import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div className='inner_item'>
        <div className='item-1'>Contact Us</div>
        <div className='item-2'>Home/Contact us</div>
      </div>


      <div className='content-container'>

        <div className='content1-icon'>
          <img src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png" alt="im" />
        </div>
        <div className='content1-title'>
          Oops! something went wrong.
        </div>
        <div className='content1-message'>
          This page didn't load Google Maps correctly.<span> See the JavaScript console for technical details.</span>
        </div>
      </div>

      <div className='outer'>
        <div className='outer-1'>
          <div className='contact-details'>
            <h1>Get in Touch</h1>
          </div>

          <div class='form-group'>
            <textarea class="form-control" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder="Enter Message"></textarea>
            <div className='e-name'>
              <input class="form-name" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" />
              <input class="form-name" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Enter email address" />
            </div>
            <a href='/' ><input class="form-name form-sub" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject" />  
            </a>
            <div><button class="form-btn form-name" type="submit" >Send Message</button></div>
          </div>
        </div>
        <div className='outer-2'>
         <div className='contact-info'>   
          </div>
          <div className='contant-media'>
          <i class="ti-home"></i>
            <h3>
              Buttonwood, Calfornia
            </h3>
            <p>
              Rosemead, CA 91770
            </p>
          </div>  
            <div className='content-media'>
              <h3>
              <i class="ti-tablet"></i>
                00 (440) 9865 562
              </h3>
              <p>
                Mon to Fri 9 am to 6pm
              </p>
            </div>
            <div className='content-media'>
            <i class="ti-email"></i>
              <h3>support@colorlib.com</h3>
              <p>Send us your query anytime!</p>
            </div>
         </div>
        </div>
      </div>

      







    

   

  );
}

export default Contact;
