import React, { useState } from 'react'
import Logedinnav from './Logedinnav'
import "../css/Orderpage.css"
import Search from "../css/search.png"
import Filter from "../css/filter.png"
import Dropdown from "../css/dropDown.png"
import Orderinformation from './Orderinformation'

function Orderpage() {
  // useStates variables below
  const [newFilterStatus, setFilterStatus] = useState(false)
  const [newSortStatus, setSortStatus] = useState(false)
  const [newUnkownOrder,setUnknowOrder] = useState(true)

  //functions below
  function filterDropDownHandler() { // this function help the functioning of filter button
    if(newSortStatus){
      setSortStatus(false)
    }
    setFilterStatus((prev) => {
      return !prev
    })
  }

  function sortDropDownHandler() { // this function help the functioning of sort button
    if(newFilterStatus){
      setFilterStatus(false)
    }
    setSortStatus((prev) => {
      return !prev
    })
  }

  function unknownOrderHandler() {
    setUnknowOrder((prev)=>{
      return !prev
    })

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
                <button  id='filterByButton' onClick={filterDropDownHandler}> <img src={Filter} alt="" />Filter By<img src={Dropdown} alt="" /> </button>
                {newFilterStatus?
                <div id="orderFilterDropdownMenu">
                  <div className='orderFilterDropDownButton' ><button  >btn1</button></div>
                  <div className='orderFilterDropDownButton' ><button  >btn2</button></div>
                  <div className='orderFilterDropDownButton' ><button  >bt3</button></div>
                  <div className='orderFilterDropDownButton' ><button  >bt4</button></div>
                </div>:<></>}
              </div>
              <div id="orderSortBy">
                <button id='orderSortByButton' onClick={sortDropDownHandler}><img src={Filter} alt="" />Sort By<img src={Dropdown} alt="" /> </button>
                {newSortStatus?
                <div id="orderSortDropdownMenu">
                <div className='orderSortDropDownButton' ><button  >btn1</button></div>
                <div className='orderSortDropDownButton' ><button  >btn2</button></div>
                <div className='orderSortDropDownButton' ><button  >bt3</button></div>
                <div className='orderSortDropDownButton' ><button  >bt4</button></div>
              </div>
                :<></>}
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
               {/* orderHeading is the headings of the table */}
            <div id="orderHeading">
            <table>
              <tr>
                <th id='serialNo'>S.No</th>
                <th id='productName'>Product Name</th>
                <th id='subCategory'>Sub Category</th>
                <th id='brand'>Brand</th>
                <th id='price'>Price</th>
                <th id='quantity'>Quantity</th>
              </tr>
            </table>
          </div>
          {/* orderData is used to show the data in the table*/}
          <div id="orderData">
         
          <Orderinformation/>
         
        </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Orderpage
