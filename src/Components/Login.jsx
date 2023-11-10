import React, { useState } from 'react'
import "../css/Login.css"
import 'remixicon/fonts/remixicon.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from '../utils/axios';
import Verify from './Verify'
import Navbar from './Navbar';

function Login() {
  const [newClick, setClick] = useState(false)
  const [newVal, setVal] = useState()
  const [isSubmit, setSubmit] = useState(false)


  function passwordHandler() {
    if (newClick == false) {
      setClick(true)
    }
    else {
      setClick(false)
    }
  }


  async function submitHandler(e) {
    e.preventDefault()

    const a = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    try {

      const res = await axios.post("/user/login?user_role=Sales", a)
      setSubmit(true)
      localStorage.setItem('token',res.data.data.token)

    }

    catch (error) {
      console.log(error)
      toast.error('❗ wrong credentials', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    }
  }

  return (

    isSubmit ? <Verify /> :
      <>
        <Navbar></Navbar>
        <div id='main'>
          <div id="formalign">
            <div id="slider">
              <div id="smallSlider">
                <div id="slider1"></div>
                <div id="slider2"></div>
              </div>
            </div>
            <div id="form" >
              <form action="" onSubmit={submitHandler}>
                <input id='inputs' type="text" name='username' placeholder='Username' />
                <input id='inputs' type="password" name='password' placeholder='Password' />
                <input className='Submit' value="Login" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </>



  )
}

export default Login
