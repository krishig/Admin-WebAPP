import React, { useState,useEffect } from 'react'
import Logedinnav from './Logedinnav'
import "../css/sub_category.css"
import Search from '../css/search.png'
import add from "../css/add.png"
import Sub_category_Information from './Sub_category_Information'
import axios from '../utils/axios'
import { useNavigate } from 'react-router-dom'


function Sub_category() {
   const navigate = useNavigate()
    const[newSubCatagoryData,setSubCategoryData]=useState([])

    async function fetchSubCategoryData() { // function to fetch product details
        const subCategories = await axios.get("/sub_category?items_per_page=1000&page_number=1", {
          headers: {
            'Authorization': localStorage.getItem('token'), // Include the auth token in the headers
            'Content-Type': 'application/json', // Set the content type based on your API's requirements
          },
        })
        setSubCategoryData(subCategories.data.data.result)
      }
    
      // useEffect function below 
      useEffect(() => { // it will run fetchProductData() on each time product page gets opened
        fetchSubCategoryData()
      }, [])

    function addHandler() { // it will open add product page 
      navigate('/addSubCategory')
    }
   
    return (
        <>
            <Logedinnav />
            <div id="subCategoryMain">
                <div id="subCategoryAlign">
                    <div className='subCategoryHeading'><h1>Sub category</h1></div>
                    <div id="subCategoryInfo">
                        <div id="subCategorySearchBar">
                            <div id="searchBarrrrrr">
                                <form action="">
                                    <input type="text" placeholder='Search Product' />
                                    <button><img src={Search} alt="" /></button>
                                </form>
                            </div>
                            <div id="addSubCategory" onClick={addHandler}><button> <img src={add} alt="" /><h1>Add</h1></button></div>

                        </div>
                        <div id="subCategoryHeading">
                        <table>
                          <tr>
                            <th id='sub_category_id'>Id</th>
                            <th id='sub_category_name'>sub category name</th>
                            <th id='category_name'>Category name</th>
                            <th id='created_by'>Created by</th>
                            <th id='modified_by'>Modified by</th>
                            </tr>
                        </table>
                      </div>
                        <div id="subCategoryData">
                         {
                            newSubCatagoryData.map((eachData,index)=>{
                             return <Sub_category_Information key={index} Data={eachData}/>
                            })
                         }
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Sub_category
