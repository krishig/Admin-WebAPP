import React,{useState} from 'react'
import "../css/OrderInformation.css"
import 'remixicon/fonts/remixicon.css'


function Orderinformation() {
  const [showEdit,setShowEdit]=useState(false)
  function editHandler(){
    setShowEdit(!showEdit)
  }
  return (
    <div id="jjj">
   <table >
   <tr>
   <td  id='serialNooo'>asfasdfg</td>
   <td  id='productNameee'>asdgfsadg</td>
   <td  id='subCategoryyy'>asdgfsadg</td>
   <td  id='branddd'>asdgasdg</td>
   <td  id='priceee'>asdgasdgasd</td>
   <td  id='quantityyy'>asdgasdgasd <i onClick={editHandler} class="ri-more-2-fill"></i>
   <div id="Editt"> 
   <button>Edit</button>
   </div>
   </td>
   </tr>
   </table>
   </div>
  )
}

export default Orderinformation
