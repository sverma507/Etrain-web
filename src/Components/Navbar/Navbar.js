import React, { useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
function Navbar() {
    const [dropdown,setDropdown]=useState(true) ;
    // const [dropdownclick,setDropdownClick]=useState(false);
    const navigate=useNavigate();
    const go_courses=()=>{ navigate('/Courses');
      if(!dropdown)
      {
        setDropdown(true);
      }  
    }
    const go_blog=()=>{ navigate('/Blog');
      if(!dropdown)
      {
        setDropdown(true);
      }
    }
    const go_home=()=>{ navigate('/');
    if(!dropdown)
    {
      setDropdown(true);
    }
   }
    const go_awesome=()=>{ navigate('/Awesome');
    if(!dropdown)
    {
      setDropdown(true);
    }
    }
    const go_About=()=>{ navigate('/About');
    if(!dropdown)
    {
      setDropdown(true);
    } 
   }
    const go_contact=()=>{ navigate('/Contact');
    if(!dropdown)
    {
      setDropdown(true);
    }  
  }
    const go_profile=()=>{ navigate('/Profile');
    if(!dropdown)
    {
      setDropdown(true);
    }
    }
    const go_id=()=>{ navigate('/Id_Card');
    if(!dropdown)
    {
      setDropdown(true);
    }  
  }
    
    const go_dropdown=()=>{
      console.log("called");
      if(dropdown)
      {
        setDropdown(false);
      }
      else
      {
        setDropdown(true);
      }

      
    }
  return (
    <>
      <div className='navbar-outer'>
        <div className='navbar-1'></div>
        <div className={dropdown ?"navbar-2" :"dropdown-show"} id='navbar-2'>       
            <div className='navbar-item' onClick={go_home}>Home</div>
            <div className='navbar-item' onClick={go_About}> About</div>
            <div className='navbar-item' onClick={go_courses}>Courses</div>
            <div className='navbar-item' onClick={go_blog}>Blog</div>
            <div className='navbar-item' onClick={go_awesome}>Awesome Features</div>
            <div className='navbar-item' onClick={go_contact}>Contact</div>
            <div className='navbar-item' onClick={go_profile}>Profile</div>
            <div className='navbar-item' onClick={go_id}>Id Card</div>
            <div className='navbar-item'>
                <button className='navbar-btn '>Get A Quote</button>
            </div>
        </div>
        <div className={dropdown ?"menu-btn-show" :"menu-btn-hide"} id='navbar-2-hidden' onClick={go_dropdown} >
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </>
  )
}

export default Navbar;
