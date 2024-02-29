import React from "react";
import './Idcardform.css';
let c_info={
    name: "",
    idno: "",
    dob: "",
    blood_group: "",
    phone: "",
    email: "",
};
function Idcardform(props) {
    // const go_Name=(e)=>{props.name_from_the_parent(e.target.value)}
    // const go_id_no=(e)=>{
    //     props.idno_from_the_parent(e.target.value)
    // }
    
    const handler=(e)=>{
        c_info={...c_info};
        c_info[e.target.name]=e.target.value;
        props.data_from_parent(c_info);
    }

    return (
        <>

            <div className="id-card-form-details-outer">
                <label className="label-name">Name:</label>
                <input type="text" className="input-name-text" placeholder="Enter your name"name="name" onChange={handler} /><br></br>
                <label className="label-id">ID No:</label>
                <input type="number" className="input-id-no-text" name="idno" placeholder="enter your id" onChange={handler}/><br></br>
                <label className="label-dob">Date of Birth:</label>
                <input type="Date" className="input-dob-text" name="dob"  onChange={handler} /><br></br>
                <label className="label-blood-group">Blood-Group:</label>
                <input type="text" className="input-blood-group-text" name="blood_group" placeholder="Enter the blood group"onChange={handler} /><br></br>
                <label className="label-phone">Phone:</label>
                <input type="number" className="input-phone-no-text" name="phone" onChange={handler} placeholder="enter the phone no"/><br></br>
                <label className="label-e-mail">E-mail:</label>
                <input type="text" className="input-E-mail-text" name="email" onChange={handler} placeholder="enter your email" /><br></br>
            </div>
        </>

    );
}
export default Idcardform;