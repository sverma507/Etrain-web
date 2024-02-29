import React from 'react'

function P2(props) {
  return (
    <div className='p2'>
      <div className='photo form-heading'>YOUR PROFILE</div>
      <div className='info-disp'>{props.t.name}</div> 
      <div className='info-disp'>{props.t.age}</div> 
      <div className='info-disp'>{props.t.mobile}</div>
      <div className='info-disp'>{props.t.email}</div> 
      <div className='info-disp'>{props.t.address}</div>     
    </div>
  )
}

export default P2
