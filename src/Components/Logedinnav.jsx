import React, { useState } from 'react'
import "../css/Logedinnav.css"
import { Link } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { CgMenuLeft } from "react-icons/cg"
import Dropdown from './Dropdown';

function Logedinnav() {
    const [showNav, setNav] = useState(false)
    
    function menuHandler() {
        setNav((prev) => !prev) }
    return (
        <div id="navv">

            <div id="menu" onClick={menuHandler}> <CgMenuLeft /></div>

            <div id="headingg">
                <Link to="/home">  <h1>K<span>rish</span>G</h1></Link>
            </div>


            <div id="account" >



                <Link to="/account"><BiSolidUser /></Link>

            </div>


            <Dropdown isOpen={showNav} ></Dropdown>

        </div>

    )
}

export default Logedinnav
