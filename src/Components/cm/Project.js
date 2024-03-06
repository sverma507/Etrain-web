import React from 'react'
import "./Project.css";
import Slide from "../cm/Slide.jpg"
import Slide2 from "../cm/Slide2.jpg";
import Slide3 from "../cm/Slide3.jpg";
export default function Project() {
  return (
    <div>
      <div className='main-part'>
        <div className='tesi'>
          <div className='Happy'>
            <div className='pe'>Tesimonials</div>
            <h2 className='h'>Happy student</h2>
          </div>
        </div>
      </div>

      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className='row'>
              <div className='container'>
                <div className='row-1text'>
                  <div className='para'>Behold place was a multiply creeping creature his domin to thiren open void
                    hath herb divided divide creepeth living shall i call beginning
                    third sea itself set</div>
                  <div className='heading-4'>Michel Hashale</div>
                  <div className='heading-5'> Sr. Web designer</div>
                </div>
              </div>
              <div className='container-2'>
                <div>
                  <img src={Slide} alt=''></img>
                </div>
              </div>
            </div>

          </div>
          <div class="carousel-item">
            <div className='row'>
              <div className='container'>
                <div className='row-1text'>
                  <div className='para'>Behold place was a multiply creeping creature his domin to thiren open void
                    hath herb divided divide creepeth living shall i call beginning
                    third sea itself set</div>
                  <div className='heading-4'>Michel Hashale</div>
                  <div className='heading-5'> Sr. Web designer</div>
                </div>
              </div>
              <div className='container-2'>
                <div>
                  <img src={Slide3} alt=''></img>
                </div>
              </div>
            </div>

          </div>
          <div class="carousel-item">
            <div className='row'>
              <div className='container'>
                <div className='row-1text'>
                  <div className='para'>Behold place was a multiply creeping creature his domin to thiren open void
                    hath herb divided divide creepeth living shall i call beginning
                    third sea itself set</div>
                  <div className='heading-4'>Michel Hashale</div>
                  <div className='heading-5'> Sr. Web designer</div>
                </div>
              </div>
              <div className='container-2'>
                <div>
                  <img src={Slide2} alt=''></img>
                </div>
              </div>
            </div>

          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}