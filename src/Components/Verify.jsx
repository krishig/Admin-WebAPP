import React from 'react'
  import "../css/Verify.css"
  import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
function Verify() {
  const navigate = useNavigate()
  function submitHandlerr(){
    navigate("/home")
  }
  return (
    <>
    <Navbar></Navbar>
    <div id='mainn'>
    <div id="formalignn">
    <div id="sliderr">
     <div id="smallSliderr">
     <div id="sliderr1"></div>
     <div id="sliderr2"></div>
     </div>
    </div>
    
    <div id="formm" >
    <div id="formHeading"><h1>OTP Verification</h1></div>
     <form action="" onSubmit={submitHandlerr}>
     <input id='inputss' maxLength={5} type="text"  placeholder='●●●●●●'/>
     <input className='Submitt' type="submit"  value="Verify"/>
     </form>
    </div>
    </div>
   </div>
   </>
  )
}

export default Verify
