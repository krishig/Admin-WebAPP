import React,{useState,useEffect} from 'react'
import "../css/Brands.css"
import Logedinnav from './Logedinnav'
import Search from '../css/search.png'
import add from "../css/add.png"
import axios from '../utils/axios'
import Brandsinformation from './Brandsinformation'
function Brands() {
    const[newBrandsData,setBrandsData]=useState([])
    async function fetchBrandsData() { // function to fetch product details
        const Brands = await axios.get("/product_brands?items_per_page=100000&page_number=1", {
          headers: {
            'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNfaWQiOjc1LCJ1c2VybmFtZSI6ImdhdXJhdmxvayIsInJvbGUiOjIsImV4cCI6MTY5NzUxMDQ0N30.-rgyCrvJlmV2eOuCLAUVifBgk1BGSWwou5h-9a1WgfY`, // Include the auth token in the headers
            'Content-Type': 'application/json', // Set the content type based on your API's requirements
          },
        })
        setBrandsData(Brands.data.data.result)
      }
    
      // useEffect function below 
      useEffect(() => { // it will run fetchProductData() on each time product page gets opened
        fetchBrandsData()
      }, [])

     
    return (
        <>
            <Logedinnav />
            <div id="brandsMain">
                <div id="brandsAlign">
                    <div className='brandsHeading'><h1>Brands</h1></div>
                    <div id="brandsInfo">
                        <div id="brandsSearchBar">
                            <div id="searchBarrrrrrrrrr">
                                <form action="">
                                    <input type="text" placeholder='Search Product' />
                                    <button><img src={Search} alt="" /></button>
                                </form>
                            </div>
                            <div id="addBrands" ><button> <img src={add} alt="" /><h1>Add</h1></button></div>
                        </div>
                        <div id="brandHeading">
                            <table>
                                <tr>
                                    <th id='brand_id'>Id</th>
                                    <th id='brand_name'>Brand Name</th>
                                    <th id='brand_product_name'>Brand Products</th>
                                    <th id='brand_created_by'>Created by</th>
                                    <th id='brand_modified_by'>Modified by</th>
                                </tr>
                            </table>
                        </div>
                       <div id="brandsData">
                      {newBrandsData.map((Eachdata,index)=>{
                        return <Brandsinformation  Data={Eachdata} key={index}/>
                      })}
                        
                       </div>
                     </div>
                </div>
            </div>
        </>
    )
}

export default Brands
