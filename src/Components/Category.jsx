import React,{useEffect, useState} from 'react'
import Logedinnav from './Logedinnav'
import "../css/Category.css"
import Search from "../css/search.png"
import add from "../css/add.png"
import Categoryinformation from './Categoryinformation'
import axios from '../utils/axios'
function Category() {
    const [newCategoryData,setCategoryData] = useState([])

  async function fetchCategoryData(){
  const api ="/categories"
  const tempAuth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNfaWQiOjc1LCJ1c2VybmFtZSI6ImdhdXJhdmxvayIsInJvbGUiOjIsImV4cCI6MTY5NzUxMDQ0N30.-rgyCrvJlmV2eOuCLAUVifBgk1BGSWwou5h-9a1WgfY"
  const CategoryData = await axios.get(api, {
    headers: {
      'Authorization': tempAuth, // Include the auth token in the headers
      'Content-Type': 'application/json', // Set the content type based on your API's requirements
    },
  })
  setCategoryData(CategoryData.data.data)
}
useEffect(()=>{
fetchCategoryData()
},[])


  return (
    <>
    <Logedinnav/>
    <div id="categoryMain">
    <div id="categoryAlign">
    <div id="categoryPageHeading"><h1>categories</h1></div>

    <div id="categoryInfo">
    <div id="searchBarAlign">
      <div id="categorySearchBar">
        <form action="">
          <input type="text" placeholder='Search Product' />
          <button><img src={Search} alt="" /></button>
        </form>

      </div>
      <div id="addCategory" ><button> <img src={add} alt="" /><h1>Add Category</h1></button></div>
    </div>
    
    <div id="categoryHeading">
      <table>
        <tr>
          <th id='categoryId'>Category id</th>
          <th id='categoryName'>Category Name</th>
          <th id='subCategoryInCategories'>Sub Category</th>
          <th id='categoryProducts'>Products</th>
          <th id='createdBy'>Created By</th>
          <th id='modifiedBy'>modified By</th>
        </tr>
      </table>
    </div>
    <div id="categoryData">

    {newCategoryData.map((CategoryEachData,index)=>{
        return <Categoryinformation key={index} CategoryEachData={CategoryEachData} />
     })}
    
    </div>

  </div>
    </div>
    </div>
    </>
  )
}

export default Category
