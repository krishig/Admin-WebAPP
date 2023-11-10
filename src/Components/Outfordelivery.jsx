import React from 'react'
import "../css/Outfordelivery.css"



function Outfordelivery({data,serialNo}) {

  return (
    <div id='ofdMain' >
<table >
   <tr>
   <td  id='serialNooo'>{serialNo}</td>
   <td  id='productNameee'>{data.customerId.fullName}</td>
   <td  id='subCategoryyy'>{data.paymentMethod}</td>
   <td  id='branddd'>{data.productResponseDtos.length}</td>
   <td  id='priceee'>{data.totalPrice}</td>
   <td  id='quantityyy'> {data.addressResponseDto?data.addressResponseDto.villageName:"NULL"}</td>
   </tr>
   </table>
    </div>
  )
}

export default Outfordelivery
