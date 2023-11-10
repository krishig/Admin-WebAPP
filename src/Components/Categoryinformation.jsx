import React, { useState, useEffect, useRef } from 'react'
import "../css/Categoryinformation.css"
import CategoryEditData from './CategoryEditData'
import { useNavigate } from 'react-router-dom'

function Categoryinformation({ CategoryEachData }) {
  const navigate = useNavigate()
  const [newClick, setClick] = useState(false)



  function clickHandler() {
    navigate('/viewCategory', { state: { myData: CategoryEachData } });
  }
    

return (
    <>
      <div id='jj' onClick={clickHandler}>
        <table  >
          <tr>
            <td id='categoryId'>{CategoryEachData.id}</td>
            <td id='categoryName'>{CategoryEachData.category_name}</td>
            <td id='subCategoryInCategories'>{CategoryEachData.sub_category.length}</td>
            <td id='categoryProducts '>0</td>
            <td id='createdBy'>{CategoryEachData.created_by}</td>
            <td id='modifiedBy'  >{CategoryEachData.modified_by ? CategoryEachData.modified_by : <>0</>}</td>
          </tr>
        </table>
      </div>


      </>
  )
}

export default Categoryinformation
