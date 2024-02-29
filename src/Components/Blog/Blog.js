import React from 'react'
import  './Blog.css'
function Blog() {
  let c_course=[{
    c_photo:require('../../Assets/special_cource_1.png'),
    c_platform:'Design',
    c_charge:'$130.00',
    c_name:'Dry Beginning Sea Over Tree',
    c_detail:'Which whose darkness saying were life unto fish wherein all fish of together called',
    c_author:'James Well',
},
{
    c_photo:require('../../Assets/special_cource_2.png'),
    c_platform:'Developing',
    c_name:'Form Day Seasons Sea Hand',
    c_detail:'Which whose darkness saying were life unto fish wherein all fish of together called',
    c_author:'James Well',
},
{
    c_photo:require('../../Assets/special_cource_3.png'),
    c_platform:'Design',
    c_charge:'$140.00',
    c_name:'All Beginning Air Two Likeness',
    c_detail:'Which whose darkness saying were life unto fish wherein all fish of together called',
}

]
  return (
    <>
      <div className='heading-our-courses'>
            <div className='our-courses-1'>
                Our Blog
            </div>
            <div className='our-courses-2'>
                Home/Blog
            </div>
        </div>
        <div className='sec-2'>
            <div className='sec-2-a'>Our Blog</div>
            <div className='sec-2-b'>Students Blog</div>
            <hr className='hr-sec-2'></hr>
        </div>
        <div className='sec-3'>
            {
                 c_course.map((item,index)=>{
                    return(
                        <>
                            <div className='box'>
                                <div className='sec-3-a' key={index}>
                                    <img className='sec-3-a'  src={item.c_photo}/>
                                </div>
                                <div className='sec-3-b'>
                                    <div className='b-1'>{item.c_platform}</div>
                                </div>
                                <div className='sec-3-c'>{item.c_name}</div>
                                <div className='sec-3-d'>{item.c_detail}</div>
                                <div className='sec-3-e'>
                                    <div className='e-1-blog'>
                                        <div className='blog-e'>2k Comments</div>
                                        <div className='blog-e'>2K Likes</div>
                                    </div>
                                   
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    </>
  )
}

export default Blog
