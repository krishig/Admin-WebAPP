import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "../css/Logedinnav.css"
function Dropdown() {
  return (
    <div id="dropdown" className='active'>
    <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/orders">Orders</Link></li>
    </ul>
</div>
  )
}

export default Dropdown
