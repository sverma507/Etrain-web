import React from 'react'
import './Profile.css'
let c_info={
  name:"",
  age:"",
  mobile:"",
  email:"",
  address:""
}
function P1(props) {
  const  go_to=(e)=>{
    const {name,value}=e.target;
    c_info={...c_info};
    c_info[name]=value;
  }


  return (
   <>
        <div className='form-outer'>
            <div className='form-heading'>Enter Your Profile Details</div>
            <div className='get-data'>
                <div className='info-box'>
                  <label>Name:</label><input type='text' className='in-box' name='name' onChange={go_to} placeholder='Sumit...'/>
                </div>
                <div className='info-box'>
                  <label>Age:</label><input type='number' className='in-box' name='age' onChange={go_to} placeholder='23...'/>
                </div>
                <div className='info-box'>
                  <label>Mobile:</label><input type='number' className='in-box' name='mobile' onChange={go_to} placeholder='+91xxxxxxxxxx'/>
                </div>
                <div className='info-box'>
                  <label>Email:</label><input type='text' className='in-box' name='email' onChange={go_to} placeholder='example@gmail.com'/>
                </div>
                <div className='info-box'>
                  <label>Address:</label><input type='text' className='in-box' name='address' onChange={go_to} placeholder='Hisar,Haryana...'/>
                </div> 
                 <div className='btn' onClick={()=>{props.data_from_parent(c_info);console.log("info=>",c_info);}}>PROFILE</div>    
            </div>
        </div>
   </>
  )
}

export default P1
