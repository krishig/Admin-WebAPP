import React, { useState } from 'react'
import Logedinnav from './Logedinnav'
import "../css/Orderpage.css"
import Search from "../css/search.png"
import Filter from "../css/filter.png"
import Dropdown from "../css/dropDown.png"


function Orderpage() {
  // useStates variables below
  const [newFilterStatus, setFilterStatus] = useState(false)
  const [newSortStatus, setSortStatus] = useState(false)

  //functions below
  function filterDropDownHandler() {
   setFilterStatus((prev)=>{
    return !prev
   })
  }

  function sortDropDownHandler() {
    setSortStatus((prev)=>{
      return !prev
     })
  }

  function unknownOrderHandler() {

  }
  function criticalOrderHandler() {

  }
  function normalOrderHandler() {

  }
  return (
    <>
      <Logedinnav />
      <div id="orderPageMain">
        <div id="orderPageAlign">
          {/* #orderPageHeading is the heading of the page */}
          <div id="orderPageHeading">
            <h1>Order Page</h1></div>
          <div id="orderInfo">
            {/* #orderFilterBar is a filter bar in white color where there are filter by button,sort by button and search form*/}
            <div id="orderFilterBar">
              <div id="filterByBtn">
                <button onClick={filterDropDownHandler}> <img src={Filter} alt="" />Filter By<img src={Dropdown} alt="" /> </button>
              </div>
              <div id="orderSortBy">
                <button onClick={sortDropDownHandler}><img src={Filter} alt="" />Sort By<img src={Dropdown} alt="" /> </button>
              </div>
              <div id="orderSearchBar">
                <form action="">
                  <input type="text" placeholder='Search Product' />
                  <button><img src={Search} alt="" /></button>
                </form>
              </div>
            </div>
            {/* #orderPageMode is the three button used to show the table according to them */}
            <div id="orderPageMode">
              <div id="orderPageModeBtn1" className='orderPageModeButtons' ><button onClick={unknownOrderHandler}>Unknown</button></div>
              <div id="orderPageModeBtn2" className='orderPageModeButtons' ><button onClick={criticalOrderHandler}>Critical Orders</button></div>
              <div id="orderPageModeBtn3" className='orderPageModeButtons' ><button onClick={normalOrderHandler}>Normal Orders</button></div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Orderpage
