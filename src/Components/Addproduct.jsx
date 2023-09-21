import React, { useState } from 'react'
import "../css/Addproduct.css"
import 'remixicon/fonts/remixicon.css'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
function AddProduct({ closeBtn }) {
  // http://13.200.56.10:5000/python/product
 
  const navigate =useNavigate ()

  // "product_name": "product name",
  // "price": "price",
  // "whole_sale_price": "dealers price",
  // "base_unit": "KGorLI",
  // "quantity": "quantity",
  // "discount": "discount",
  // "sub_category_id": "sub category id",
  // "brand_id": "brand id",
  // "product_description": "description of the product"

  const [newFormData, setFormData] = useState({
    product_name: "",
    price: "",
    whole_sale_price: "",
    base_unit: "",
    quantity: "",
    discount: "",
    sub_category_id: "",
    brand_id: "",
    product_description: ""
  })
  function changeHandler(e) { // this function store the data in the useState variable on every change
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }
  async function submitHandler(e) {
    e.preventDefault()
    try {
      const sendData = await axios.post("http://13.200.56.10:5000/python/product", newFormData,{
        headers: {
          'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNfaWQiOjc1LCJ1c2VybmFtZSI6ImdhdXJhdmxvayIsInJvbGUiOjEsImV4cCI6MTY5NTUyODQ2N30.KU7DxEScT2IpyRCkHT4Ixg7BYYoTLsVb448r5lDqG9k`, // Include the auth token in the headers
          'Content-Type': 'application/json', // Set the content type based on your API's requirements
        },
     
      })
      navigate('/products')
      
    } catch (error) {
      console.log(error)
    }
 }
 
  


return (
  <div id='addProductMain'>
    <div id="toppp">
      <div id="addProductHeading"><h1>Add Product</h1></div>
      <div id="addProductClose"><button onClick={closeBtn}><i class="ri-close-line"></i></button></div>
    </div>
    <div id="buttomForm">
      <div id="addProductFormALign">
        <form action="" onSubmit={submitHandler}>
         <div id="formsetup">
          <input   className='productInputs'  id='ProductName' onChange={changeHandler} type="text" name='product_name' placeholder='Enter product name' />
        
          <input    className='productInputs' onChange={changeHandler} type="text" name='price' placeholder='Enter price' />
          <input  className='productInputs' onChange={changeHandler} name="product_description"  placeholder='Enter description of the product'></input>
          <input   className='productInputs'  onChange={changeHandler} name='whole_sale_price' type="text" placeholder="Enter dealer's price" />
          <input    className='productInputs' onChange={changeHandler} name='base_unit' type="text" placeholder='Enter base unit' />
          <input    className='productInputs' onChange={changeHandler} name='quantity' type="text" placeholder='Enter quantity' />
          <input   className='productInputs'  onChange={changeHandler} name='discount' type="text" placeholder='Enter discount' />
          <input    className='productInputs' onChange={changeHandler} name='sub_category_id' type="text" placeholder='Enter sub category id' />
          <input   className='productInputs'  onChange={changeHandler} name='brand_id' type="text" placeholder='Enter brand id' />
          </div>
          <input type="submit" id='submitbuttonn' />

        </form>
      </div>
    </div>
  </div>
)
}

export default AddProduct
