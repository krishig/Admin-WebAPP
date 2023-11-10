import React from 'react'
import "../css/sub_category.css"
import { useNavigate } from 'react-router-dom';

function Sub_category_Information({Data}) {
  const navigate = useNavigate()

  function clickHandler(){
     navigate('/viewSubCategory', { state: { myData: Data } });
  
  }
  return (
    <div id="jj" onClick={clickHandler}>
    <table  >
        <tr>
    <td  id='sub_category_id'>{Data.id}</td>
    <td  id='sub_category_name'>{Data.sub_category_name}</td>
    <td  id='category_name'>{Data.category_name}</td>
    <td  id='created_by'>{Data.created_by}</td>
    <td  id='modified_by'>{Data.modified_by?Data.modified_by:"null"}</td>
   
    </tr>
    </table>
        </div>
  )
}

export default Sub_category_Information
