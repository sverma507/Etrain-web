import React from "react";
import "./Nav.css"
import logo1 from "../images/logo .png";

function NavBar() {
  const navItems = ["Home", "About", "Courses", "Blog", "Pages","Contact"];

  return (
    <>
    <div className="logo">
      <img src={logo1}/>
    </div>
    <div className="outer">
    {navItems.map((item, index) => (
         <div key={index}>
            {item}
        </div>
      ))}
   <button className="nav-button"> Get a quote</button>
    </div>
      
    </>
  );
}

export default NavBar;
