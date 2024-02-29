import React, { useState } from "react";
import Idcard from "./Idcard";
import Idcardform from "./Idcardform";
import './Id_parent.css';
function Id_parent() {
    const [cardInfo, setCardInfo] = useState({
        name: "",
        idno: "",
        dob: "",
        blood_group: "",
        phone: "",
        email: "",
    });

    const data_from_child = (data) => {
        setCardInfo(data);
    }

return (
    <>
        <div className="id-card-form-parent">Identity Card </div>
        <div className="id-card-id-form-parent">
            <Idcardform data_from_parent={data_from_child} />
            <Idcard t={cardInfo} />
        </div>
    </>
);
}
export default Id_parent;