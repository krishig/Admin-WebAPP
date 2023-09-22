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
          <li><Link to="/home"><button><i class="ri-home-4-line"></i> <div id="homeeHead"><h1>Dashboard</h1></div></button></Link></li>

          <li><Link to="/products"><button><i class="ri-dropbox-fill"></i><div id="homeeHead"><h1>Products</h1></div></button></Link></li>
          <li><Link to="/orders"><button><i class="ri-box-2-fill"></i> <div id="homeeHead"><h1>Orders</h1></div> </button></Link></li>
          <li><Link to="/category"><button><i class="ri-archive-drawer-line"></i> <div id="homeeHead"><h1>Category</h1></div> </button></Link></li>
          <li><Link to="/sub_Category"><button><i class="ri-archive-2-line"></i><div id="homeeHead"><h1>Sub Category</h1></div> </button></Link></li>
          <li><Link to="/brands"><button><i class="ri-verified-badge-fill"></i> <div id="homeeHead"><h1>Brands</h1></div> </button></Link></li>
          <li><Link to="/customers"><button><i class="ri-service-fill"></i> <div id="homeeHead"><h1>Customers</h1></div> </button></Link></li>


          <li><Link to="/account"><button><i class="ri-account-box-line"></i> <div id="homeeHead"><h1> My Account</h1></div></button></Link></li>
          <li><Link to="/"><button><i class="ri-logout-box-line"></i> <div id="homeeHead"><h1>Log Out</h1></div></button></Link></li>

          </ul>
      </div>
    </div>
  )
}

export default Dropdown
