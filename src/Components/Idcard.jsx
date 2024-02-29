import React from "react";
import "./Idcard.css";
import profile_image from '../images/Idcardprofile.png';
function Idcard(props){
    return(
    <>
    <div className="Idcard-outer">
    <div className="header">
    <div className="heading-company-name">
        Company Name
    </div>
    <div className="company-name">
        Amazon
       
    </div>
<img src={profile_image} className="id-card-profile-image"/>
</div>
<label className="name-id-card">{props.t.name}</label><br></br>
<div className="web-developer" >Web Developer
</div>

<div className="id-card-details">

   
    <label>ID No.  </label>
    <label className="id-detail">{props.t.idno}</label><br></br>
    <label>Date of birth</label>
    <label className="dob-detail">{props.t.dob}</label><br></br>
    <label>Blood Group</label>
    <label className="blood-detail">{props.t.blood_group}</label><br></br>
    <label>Phone</label>
    <label className="phone-detail">{props.t.phone}</label><br></br>
    <label>E-Mail</label>
    <label className="email-detail">{props.t.email}</label>
   
   
</div>
<div className="footer-id-card"></div>
</div>
    
</>
   
    );
   
}
export default Idcard;
