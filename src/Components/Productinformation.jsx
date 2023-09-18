import React from 'react'
import "../css/Productinformation.css"
function Productinformation({productData,index}) {
  console.log(productData)
  function kkl(){
    
   }
  return (

 <div id="jj">
   <table onClick={kkl}>
   <tr>
   <td  id='serialNoo'>{index+1}</td>
   <td  id='productNamee'>{productData.product_name}</td>
   <td  id='subCategoryy'>{productData.sub_category_name}</td>
   <td  id='brandd'>{productData.brand_name}</td>
   <td  id='pricee'>{productData.price}</td>
   <td  id='quantityy'>{productData.quantity}</td>
   </tr>
   </table>
   </div>
   
 
  )
}

export default Productinformation
