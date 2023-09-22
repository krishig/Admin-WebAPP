import React from 'react'
import "../css/Categoryinformation.css"
function Categoryinformation({CategoryEachData}) {
  
  return (
    <div id='jj'>
    <table >
    <tr>
    <td  id='categoryId'>{CategoryEachData.id}</td>
    <td  id='categoryName'>{CategoryEachData.category_name}</td>
    <td  id='subCategoryInCategories'>{CategoryEachData.sub_category.length}</td>
    <td  id='categoryProducts '>0</td>
    <td  id='createdBy'>{CategoryEachData.created_by}</td>
    <td  id='modifiedBy'>{CategoryEachData.modified_by?CategoryEachData.modified_by:<>0</>}</td>
    </tr>
    </table>
    </div>
  )
}

export default Categoryinformation
