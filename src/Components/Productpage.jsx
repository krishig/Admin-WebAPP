import React, { useState, useEffect } from 'react'
import Logedinnav from './Logedinnav'
import "../css/Productpage.css"
import Dropdown from '../css/dropDown.png'
import filter from "../css/filter.png"
import add from "../css/add.png"
import Search from "../css/search.png"
import 'remixicon/fonts/remixicon.css'
import Productinformation from './Productinformation'
import axios from '../utils/axios'
import AddProduct from './Addproduct'


function Productpage() {
  // useState variable below
  const [newFilter, setFilter] = useState(false)
  const [newSort, setSort] = useState(false)
  const [newProductData, setProductData] = useState([])
  const [newAddClickHandler, setAddClickHandler] = useState(false)


  // functions below
  function filterHandler() { // function to open filter box

    setFilter((prev) => { return !prev })
    if (newSort === true) { setSort(false) }
  }
  function sortClickHandler() { // function to open sort box

    setSort((prev) => { return !prev })
    if (newFilter === true) { setFilter(false) }

  }
   
  async function fetchProductData() { // function to fetch product details
    const list = await axios.get("/product?items_per_page=10&page_number=1", {
      headers: {
        'Authorization': localStorage.getItem('token'), // Include the auth token in the headers
        'Content-Type': 'application/json', // Set the content type based on your API's requirements
      },
    })
    setProductData(list.data.data.result)
  }

  // useEffect function below 
  useEffect(() => { // it will run fetchProductData() on each time product page gets opened
    fetchProductData()
  }, [newAddClickHandler])

  function addHandler() { // it will open add product page 
    setAddClickHandler(true)
  }
  function closeAddHandler() { //it will close add product page
   setAddClickHandler(false)
 
  }
 

  return (
    <>
      <Logedinnav />
      <div id="productMain">
        {newAddClickHandler ? <AddProduct closeBtn={closeAddHandler} /> : <></>}
        <div id="productAlign">
          <div id="productPageHeading"><h1>Product page</h1></div>
          <div id="productInfo">
            <div id="filterBar">
              <div id="filterBy" onClick={filterHandler}><button> <img src={filter} alt="" /><h1>Filter</h1> <img src={Dropdown} alt="" /></button>
                {newFilter ?
                  <div id="filterDropDown">
                    <div id="filterDropDownButton"><button>date</button></div>
                    <div id="filterDropDownButton"><button>price</button></div>
                    <div id="filterDropDownButton"><button>pending</button></div>
                    <div id="lastfilterDropDownButton"><button>Status</button></div>
                  </div> : <></>}
              </div>

              <div id="sortBy" onClick={sortClickHandler}><button><img src={filter} alt="" /><h1>Sort</h1><img src={Dropdown} alt="" /></button>
                {newSort ?
                  <div id="sortByDropDown">
                    <div id="sortDropDownList"><button>price</button></div>
                    <div id="sortDropDownList"><button>date</button></div>
                    <div id="sortDropDownList"><button>status</button></div>
                    <div id="sortLastDropDownList"><button>urgent</button></div>
                  </div> : <></>
                }
              </div>
              <div id="searchBar">
                <form action="">
                  <input type="text" placeholder='Search Product' />
                  <button><img src={Search} alt="" /></button>
                </form>

              </div>
              <div id="addProduct" onClick={addHandler}><button> <img src={add} alt="" /><h1>Add</h1></button></div>
            </div>

            <div id="productHeading">
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
            <div id="productData">

              {

                newProductData.map((h, index) => {
                  return <Productinformation key={h.id} index={index} productData={h} />
                })}

            </div>

          </div>
        </div>
      </div>
    </>


  )
}

export default Productpage
