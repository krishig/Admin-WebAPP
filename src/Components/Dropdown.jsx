import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "../css/Logedinnav.css"
import 'remixicon/fonts/remixicon.css'
function Dropdown({ isOpen }) {
  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div id="ulMain">
        <ul>
          <li><Link to="/home"><button><i class="ri-home-4-line"></i> <div id="homeeHead"><h1>Home</h1></div></button></Link></li>
          <li><Link to="/products"><button><i class="ri-dropbox-fill"></i><div id="homeeHead"><h1>Products</h1></div></button></Link></li>
          <li><Link to="/orders"><button><i class="ri-box-2-fill"></i> <div id="homeeHead"><h1>Orders</h1></div>
          </button></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
