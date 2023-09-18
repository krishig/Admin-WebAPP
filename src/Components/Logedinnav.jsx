import React, { useState } from 'react'
import menu from "./meneIcon.png"
import acc from "./account.png"
import "../css/Logedinnav.css"



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
                <h1>K<span>rish</span>G</h1>
            </div>
            <div id="account"><img src={acc} alt="" /></div>
            {
                showNav ?
     
        <Dropdown ></Dropdown>
      
                
                    : <></>
            }
        </div>

    )
}

export default Logedinnav
