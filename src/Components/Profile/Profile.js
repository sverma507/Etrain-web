import React, { useState } from 'react'
import P1 from './P1'
import P2 from './P2'
function Profile() {
  const [p_info,setP_info]=useState({
    name:"",
    age:"",
    mobile:"",
    email:"",
    address:""
  })


  const data_from_child=(data)=>{
      setP_info(data);
      setTimeout(console.log("data=>",p_info),5000);
  }

  return (
    <div className='p-outer'>
        <P1 data_from_parent={data_from_child}/>
        <P2 t={p_info} />
    </div>
  )
}

export default Profile
