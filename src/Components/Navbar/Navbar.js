import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
function Navbar() {
    const navigate=useNavigate();
    const go_courses=()=>{ navigate('/Courses'); }
    const go_blog=()=>{ navigate('/Blog');}
    const go_home=()=>{ navigate('/');}
    const go_awesome=()=>{ navigate('/Awesome');}
    const go_About=()=>{ navigate('/About');}
    const go_contact=()=>{ navigate('/Contact');}
    const go_profile=()=>{ navigate('/Profile');}
    const go_id=()=>{ navigate('/Id_Card');}
  return (
    <>
      <div className='navbar-outer'>
        <div className='navbar-1'></div>
        <div className='navbar-2'>       
            <div className='navbar-item' onClick={go_home}>Home</div>
            <div className='navbar-item' onClick={go_About}> About</div>
            <div className='navbar-item' onClick={go_courses}>Courses</div>
            <div className='navbar-item'onClick={go_blog}>Blog</div>
            <div className='navbar-item' onClick={go_awesome}>Awesome Features</div>
            <div className='navbar-item' onClick={go_contact}>Contact</div>
            <div className='navbar-item' onClick={go_profile}>Profile</div>
            <div className='navbar-item' onClick={go_id}>Id Card</div>
            <div className='navbar-item'>
                <button className='navbar-btn '>Get A Quote</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
