import React, { useState } from 'react'
import menu from "./meneIcon.png"
import acc from "./account.png"
import "../css/Logedinnav.css"
import {  Link } from "react-router-dom";



import Dropdown from './Dropdown';
function Logedinnav() {
    const [showNav, setNav] = useState(false)
    function menuHandler() {
       setNav((prev)=>!prev)

    }
    return (
        <div id="navv">

            <div id="menu" onClick={menuHandler}> <img src={menu} alt="" /></div>

            <div id="headingg">
            <Link to="/home">  <h1>K<span>rish</span>G</h1></Link>
            </div>
            <div id="account"> <Link to="/account"> <img src={acc} alt="" /></Link></div>
            
     
        <Dropdown isOpen={showNav} ></Dropdown>
      
        </div>

    )
}

export default Logedinnav
