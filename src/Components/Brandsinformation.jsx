import React from 'react'
import "../css/Brands.css"
import { useNavigate } from 'react-router-dom';


function Brandsinformation({Data}) {
const navigate = useNavigate()

  function clickHandler() {
    navigate('/viewBrand', { state: { myData: Data } });
  }
  return (
    <div id="Brands_EachData">
    <table onClick={clickHandler} >
    <tr>
    <td  id='brand_id'>{Data.id}</td>
    <td  id='brand_name'>{Data.brand_name}</td>
    <td  id='brand_product_name'>{Data.products.length}</td>
    <td  id='brand_created_by'>{Data.created_by}</td>
    <td  id='brand_modified_by'>{Data.modified_by?Data.modified_by:"-"}</td>
   
    </tr>
    </table>
    </div>
  )
}

export default Brandsinformation
