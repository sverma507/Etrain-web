import React from 'react'
import './Courses.css'
import '../../Assets/star.svg'
function Courses() {
    let c_course=[{
        c_photo:require('../../Assets/special_cource_1.png'),
        c_platform:'Web Development',
        c_charge:'$130.00',
        c_name:'Web Development',
        c_detail:'Which whose darkness saying were life unto fish wherein all fish of together called',
        c_author:'James Well',
    },
    {
        c_photo:require('../../Assets/special_cource_2.png'),
        c_platform:'Design',
        c_charge:'$160.00',
        c_name:'Web UX/UI Design',
        c_detail:'Which whose darkness saying were life unto fish wherein all fish of together called',
        c_author:'James Well',
    },
    {
        c_photo:require('../../Assets/special_cource_3.png'),
        c_platform:'Wordpress',
        c_charge:'$140.00',
        c_name:'Wordpress Development',
        c_detail:'Which whose darkness saying were life unto fish wherein all fish of together called',
        c_author:'James Well',
    }

]
    return (
    <>
        <div className='heading-our-courses'>
            <div className='our-courses-1'>
                Our Courses
            </div>
            <div className='our-courses-2'>
                Home/Courses
            </div>
        </div>
        <div className='sec-2'>
            <div className='sec-2-a'>POPULAR COURSES</div>
            <div className='sec-2-b'>Special Courses</div>
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
                                    <div className='b-2'>{item.c_charge}</div>
                                </div>
                                <div className='sec-3-c'>{item.c_name}</div>
                                <div className='sec-3-d'>{item.c_detail}</div>
                                <div className='sec-3-e'>
                                    <div className='e-1'>
                                        <div className='e-1-a'></div>
                                        <div className='e-1-b'>{item.c_author}</div>
                                    </div>
                                    <div className='e-2'>
                                        <div className='e-star1'>
                                            {/* <img  className='e-star1' src={require('../../Assets/star.svg')}/> */}
                                        </div>
                                        <div className='e-star'>3.8Ratings</div>
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

export default Courses
